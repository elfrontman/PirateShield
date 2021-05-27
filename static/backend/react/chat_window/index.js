'use strict';

let operativo_id, user_sender_id, conections, readonly;
let socket = io(CHAT_API);


if(document.querySelector('#chat_window')){
	operativo_id = document.querySelector('#chat_window').dataset.operativo;
	user_sender_id = Number(document.querySelector('#chat_window').dataset.user);
	conections = document.querySelector('#chat_window').dataset.clientes.split(',').filter(x => x.length > 0);
	readonly = document.querySelector('#chat_window').dataset.readonly;
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
	          receive_chat: this.state.chat_list[0] ? this.state.chat_list[0] : {}
	        })

          	if(this.state.chat_list[0]){
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

		reader.onload = (evt) => {
			const msg = {
				message: reader.result,
				sender: Number(user_sender_id),
				receiver:  user ? user.sender : Number(this.state.receive_chat.sender),
				type: "image",
				user_sender: "Admin",
				user_receiver: user ? user.name_user : this.state.receive_chat.name_user,
				chat_id: user ? user.chat_id : (this.state.receive_chat._id ? this.state.receive_chat._id.chat_id : this.state.receive_chat.user),
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
		const msg = {
			message: message,
			sender: Number(user_sender_id || 1),
			receiver: user ? (user.sender || user.receiver) : Number(this.state.receive_chat.sender || this.state.receive_chat.user),
			type: user ? user.type : "text",
			user_sender: "Admin",
			user_receiver: user ? user.name_user : this.state.receive_chat.name_user,
			chat_id: user ? (user.user_id || user.receiver) : (this.state.receive_chat._id ? this.state.receive_chat._id.chat_id : this.state.receive_chat.receiver),
			//chat_id: user ? user.chat_id : this.state.receive_chat._id.chat_id,
			operativo: this.state.operativo.token,
			createdAt: new Date()
		}

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
				let unReadList = JSON.parse(localStorage.getItem('unReadAdmin'));
				  unReadList = unReadList ? unReadList : [];
				  
				const existOp = unReadList.find(x => x.token === result.token);

				if (existOp) {
					existOp.messages = 0;
				}
				  
				  const total = unReadList.length > 0 ? unReadList.map(x => x.messages).reduce((acc, curr) => acc + curr) : 0;
				  if (total == 0) {
					  $('.chat-notification .badge').hide();	  
				  }
				$('.chat-notification .badge').html(total);
				localStorage.setItem('unReadAdmin', JSON.stringify(unReadList));
				

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
			} else {
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
						
						<BoxMessagesChatWindow chats={this.state.chats_messages} user={this.state.receive_chat.name_user} forwardMessage={this.handleForwardMessage} readonly={readonly}/>
						{
							!readonly &&
								<FormChatWindow sender={user_sender_id} reciever={this.state.receive_chat} onSubmitMessage={this.handleFormSubmit} onSubmitImage={this.handleFormSubmitImage}/>
						}
						
						
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


