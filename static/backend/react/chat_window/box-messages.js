'use strict';

const e = React.createElement;

class BoxMessagesChatWindow extends React.Component{
	constructor(props){
		super(props);
	}

	sendMessage(message) {
		console.log(message, this.props)
		this.props.forwardMessage(message)
	}

	render(){
		const chats = [];
		for(const [index, chat] of this.props.chats.entries()){
			chats.push(<MessageChatWindow onClick={ () => this.sendMessage(chat) } key={index} message={chat} />);
		}

		return (
			<div>
				<div className="box-user"><strong>{this.props.user}</strong></div>	
				<div className="box-chat">
					{chats}
				</div>
			</div>
		);
	}
}