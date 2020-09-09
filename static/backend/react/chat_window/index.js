'use strict';

let operativo_id, user_sender_id, conections;
let socket = io(CHAT_API);


if(document.querySelector('#chat_window')){
	operativo_id = document.querySelector('#chat_window').dataset.operativo;
	user_sender_id = Number(document.querySelector('#chat_window').dataset.user);
	conections = document.querySelector('#chat_window').dataset.clientes.split(',').filter(x => x.length > 0);
}
const scrollToBottom = () => document.querySelector('.box-chat').scrollTo(0,document.querySelector('.box-chat').scrollHeight);  
const e = React.createElement;

class ChatWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoaded: false,
			receive_chat: null,
			chat_list: [],
			chats_messages: [],
			showForward: false
		}
	}



	getTokenChat(token_operativo){
		fetch(CHAT_API + "/chat/" + token_operativo + "/" + user_sender_id)
	      .then(res => res.json())
	      .then(
	        (result) => {

	        let chat_list = this.state.chat_list;

	        chat_list.forEach( x => {
	        	const obj = result.find( y => {
	        		const sender = user_sender_id ==  Number(y.sender) ?  Number(y._id.chat_id) : y.sender
	        		return sender == Number(x.user)
	        	})
	        	x = Object.assign(x, obj)
	        })

		
				  const _result = result.length > 0 ? this.state.chat_list.find(x => x.user == result[0].sender) : null;
	        
	        this.setState({
	          isLoaded: true,
	          chat_list: chat_list,
	          receive_chat: _result ? this.state.chat_list[0] : {}
	        })

          	if(_result){
          		this.getChat(this.state.chat_list[0].user);	
          	}
          		
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

	          

	          scrollToBottom()
	        },
	        (error) => { this.setState({ isLoaded: true,error });
	        }
	      )
	}

	getConversations(token_operativo){
		console.log(token_operativo)
		fetch(GLOBAL_API + "/operativoconnection/?search=" + token_operativo)
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	this.setState({
	        		chat_list: result,
	          	})

	        	this.getTokenChat(token_operativo);
			},
	        (error) => { this.setState({ isLoaded: true,error });
	        }
	      )
	}

	handleSelectedChat = (chat_id) => {


		this.setState({
			receive_chat: chat_id
		});

		this.getChat(chat_id.user);
	}

	handleFormSubmitImage = (image, user = null) => {

		var reader = new FileReader();

		console.log(this.state.receive_chat)

		reader.onload = (evt) => {
			const msg = {
				message: reader.result,
				sender: Number(user_sender_id),
				receiver:  user ? user.sender : Number(this.state.receive_chat.sender),
				type: "image",
				user_sender: "Admin",
				user_receiver: user ? user.name_user : this.state.receive_chat.name_user,
				chat_id: user ? user.chat_id : this.state.receive_chat._id.chat_id,
				operativo: this.state.operativo.token,
				createdAt: new Date()
			}

			socket.emit("send-message", msg);

			let chats = this.state.chats_messages;
			chats.push(msg);

			setTimeout( () => {
				scrollToBottom()	
			}, 1)

			this.setState({
				chats_messages: chats
			})
		}

		reader.readAsDataURL(image)
	}
 
	handleFormSubmit = (message, user = null) => {
		console.log(user)
		const msg = {
			message: message,
			sender: Number(user_sender_id),
			receiver: user ? user.sender : Number(this.state.receive_chat.sender),
			type: user ? user.type : "text",
			user_sender: "Admin",
			user_receiver: user ? user.name_user : this.state.receive_chat.name_user,
			chat_id: user ? user.chat_id : this.state.receive_chat._id.chat_id,
			operativo: this.state.operativo.token,
			createdAt: new Date()
		}

		console.log(msg)

		socket.emit("send-message", msg);

		if (!user) {
			let chats = this.state.chats_messages;
			chats.push(msg);

			setTimeout( () => {
				scrollToBottom()	
			}, 1)

			this.setState({
				chats_messages: chats
			})	
		}

		


	}

	loadOperativo = () => {
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
	          this.getConversations(result.token);
	          
	        },
	        (error) => { this.setState({ isLoaded: true,error });
	        }
	      )
	}

	componentDidMount() {

		socket.on('update_admin', (id) => {
			const new_chat = this.state.chat_list.find(x => x.user == id)
			if(!new_chat){
				this.loadOperativo();
			}else{
				this.handleSelectedChat(new_chat)
			}
		})
		
		socket.on('received', (msg) => {


			let chats = this.state.chats_messages;

			chats.push(msg);

			this.setState({
				chats_messages: chats,
			})

			scrollToBottom()
		})

		this.loadOperativo();

		
	}

	handleForwardMessage = (message) => {
		this.setState({
			forwardMessage: message,
			showForward: true
		})
	}

	handleSubmitForwardMessage = (message, user, type) => {
		this.handleFormSubmit(message, user);
		this.handleCloseForwardMessage();
	}

	handleCloseForwardMessage = () => {
		this.setState({
			forwardMessage: null,
			showForward: false
		})
	}

	render(){

		if(this.state.isLoaded){
			return (
				<div className="window_chat">
					{
						(this.state.showForward) &&
							<ForwardChatWindow message_selected={this.state.receive_chat} chatsList={this.state.chat_list} message={this.state.forwardMessage} onSendMessage={this.handleSubmitForwardMessage} onCloseModal={this.handleCloseForwardMessage}></ForwardChatWindow>
					}
						
								
					<div className="side_chat">
						<HeaderChatWindow chatInfo={this.state.operativo}/>
						<SideChatWindow chatsList={this.state.chat_list} message_selected={this.state.receive_chat} onSelectChat={this.handleSelectedChat}/>
					</div>
					<div className="view_chat">
						
						<BoxMessagesChatWindow chats={this.state.chats_messages} user={this.state.receive_chat.name_user} forwardMessage={this.handleForwardMessage}/>
						<FormChatWindow sender={user_sender_id} reciever={this.state.receive_chat} onSubmitMessage={this.handleFormSubmit} onSubmitImage={this.handleFormSubmitImage}/>
						
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

