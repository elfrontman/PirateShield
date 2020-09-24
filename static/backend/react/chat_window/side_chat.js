'use strict';

const e = React.createElement;

class SideChatWindow extends React.Component{
	constructor(props){
		super(props);
		const message_selected = this.props.message_selected ||  (this.props.chatsList[0] && this.props.chatsList[0]._id ?  this.props.chatsList[0] : null)
		this.state = { message_selected: message_selected };
	}

	componentDidMount(){
		this.connectSocket();		
	}

	connectSocket(){
		for(const chat of this.props.chatsList){
			const chat_id = chat.id
			socket.emit('create', chat_id);	
		}
		
	}

	selectMessage(message_index){
		this.props.onSelectChat(message_index)
		this.setState({  message_selected:  message_index})
	}

	render(){

		if(this.props.chatsList.length == 0){
			return (
				<div className="side-chat">
					<ul className="chat-vacio">No hay chats para mostar</ul>
				</div>
			);
		}

		const chat_id =this.props.message_selected ? this.props.message_selected.user : null

		const chats = [];
		for (const [index, chat] of this.props.chatsList.entries()) {
			
			const options = {
				year: 'numeric', month: 'numeric', day: 'numeric',
  				hour: 'numeric', minute: 'numeric', second: 'numeric', 
			}


			const date = chat.time ? new Intl.DateTimeFormat('es-CO', options).format(new Date(chat.time)) : '';

			if(chat._id){
				chats.push(
				<li key={index} className={ chat.user== chat_id ? 'open-chat' : ''} onClick={ () => this.selectMessage(chat)}>
						<label>{chat.name_user}</label>
						{
							(chat.type === 'image') ? <p>Imagen</p> : <p>{chat.message.length > 50 ? chat.message.slice(0,50) + '...' : chat.message }</p>
						}
					
					<time>{date}</time>
				</li>);	
			}else{
				chats.push(
				<li key={index}  onClick={ () => this.selectMessage(chat)}>
					<label>{chat.name_user}</label>
					<p>...</p>
				</li>);
			}
			
		}

		return (
			<div className="side-chat">
				<ul>
					{chats}
				</ul>
			</div>
		);

	}
}