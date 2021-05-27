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
			chats.push(<MessageChatWindow onClick={() => !this.props.readonly && this.sendMessage(chat)} key={index} message={chat} readonly={this.props.readonly} />);
		}

		return (
			<div>
				<div className="box-user"><strong>{this.props.user}</strong></div>	
				<div className={`box-chat ${ this.props.readonly ? 'readonly-chat' : '' }`}>
					{chats}
				</div>
			</div>
		);
	}
}