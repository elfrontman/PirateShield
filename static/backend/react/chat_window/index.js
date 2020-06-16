'use strict';

let operativo_id, user_sender_id;
let socket = io(CHAT_API);


if(document.querySelector('#chat_window')){
	operativo_id = document.querySelector('#chat_window').dataset.operativo;
	user_sender_id = document.querySelector('#chat_window').dataset.user;
}

const e = React.createElement;

class ChatWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoaded: false,
			receive_chat: null,
			chat_list: [],
			chats_messages: []
		}
	}



	getTokenChat(token_operativo){
		fetch(CHAT_API + "/chat/" + token_operativo + "/" + user_sender_id)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	          	isLoaded: true,
	          	chat_list: result,
	          	receive_chat: result[0] || null
	          })

	          this.getChat( result[0]._id.chat_id);
	        },
	        (error) => { this.setState({ isLoaded: true,error });
	        }
	      )
	}

	getChat(chat_id){
		fetch(CHAT_API + "/chat_all/" + chat_id)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	          	isLoaded: true,
	          	chats_messages: result,
	          })
	        },
	        (error) => { this.setState({ isLoaded: true,error });
	        }
	      )
	}

	handleSelectedChat = (chat_id) => {
		this.setState({
			receive_chat: chat_id
		});

		this.getChat(chat_id._id.chat_id);
	}

	handleFormSubmit = (message) => {

		const msg = {
			message: message,
			sender: Number(user_sender_id),
			receiver: Number(this.state.receive_chat.sender),
			type: "text",
			user_sender: "Admin",
			user_receiver: this.state.receive_chat.user_receiver,
			chat_id: this.state.receive_chat._id.chat_id,
			operativo: this.state.operativo.token,
			createdAt: new Date()
		}

		socket.emit("send-message", msg);

		let chats = this.state.chats_messages;
		chats.push(msg);

		this.setState({
			chats_messages: chats,
			receive_chat: msg
		})
	}

	componentDidMount() {
		fetch(GLOBAL_API + "/operativo/" + operativo_id)
	      .then(res => res.json())
	      .then(
	        (result) => {

	          this.setState({
	            operativo: {
	            	token: result.token,
	            	devices: result.connections,
	            	client: {
						id: 1,
						name: 'Adidas'
					}

	            }
	          });

	          this.getTokenChat(result.token);
	        },
	        (error) => { this.setState({ isLoaded: true,error });
	        }
	      )
	}

	render(){

		if(this.state.isLoaded){
			return (
				<div className="window_chat">
					<div className="side_chat">
						<HeaderChatWindow chatInfo={this.state.operativo}/>
						<SideChatWindow chatsList={this.state.chat_list} onSelectChat={this.handleSelectedChat}/>
					</div>
					<div className="view_chat">
						<BoxMessagesChatWindow chats={this.state.chats_messages} user={this.state.receive_chat.user_receiver}/>
						<FormChatWindow sender={user_sender_id} reciever={this.state.receive_chat} onSubmitMessage={this.handleFormSubmit}/>
		  			</div>
	  			</div>
			);
		}else{
			return <div>Loading...</div>;
		}
		

	}
}

if(operativo_id){
	ReactDOM.render(
		<ChatWindow />,
		document.querySelector('#chat_window')
	);	
}

