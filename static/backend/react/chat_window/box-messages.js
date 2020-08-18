'use strict';

const e = React.createElement;

class BoxMessagesChatWindow extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const chats = [];
		for(const [index, chat] of this.props.chats.entries()){
			chats.push(<MessageChatWindow key={index} message={chat} />);
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