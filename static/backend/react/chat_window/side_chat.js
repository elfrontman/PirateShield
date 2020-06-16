'use strict';

const e = React.createElement;

class SideChatWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = { message_selected: this.props.chatsList[0] };
	}

	componentDidMount(){
		this.connectSocket();		
	}

	connectSocket(){
		for(const chat of this.props.chatsList){
			const chat_id = chat._id.chat_id
			socket.emit('create', chat_id);	
		}
		
	}

	selectMessage(message_index){
		this.props.onSelectChat(message_index)
		this.setState({  message_selected:  message_index})
	}

	render(){

		const chat_id =this.state.message_selected._id.chat_id

		const chats = [];
		for(const [index, chat] of this.props.chatsList.entries()){

			const options = {
				year: 'numeric', month: 'numeric', day: 'numeric',
  				hour: 'numeric', minute: 'numeric', second: 'numeric', 
			}

			const date = new Intl.DateTimeFormat('es-CO', options).format(new Date(chat.time));

			chats.push(
				<li key={index} className={ chat._id.chat_id == chat_id ? 'open-chat' : ''} onClick={ () => this.selectMessage(chat)}>
					<label>{chat.user_receiver}</label>
					<p>{chat.message.length > 50 ? chat.message.slice(0,50) + '...' : chat.message }</p>
					<time>{date}</time>
				</li>);
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