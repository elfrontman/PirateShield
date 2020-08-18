'use strict';

const e = React.createElement;

class HeaderChatWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = { liked: false };
	}

	render(){

		return (
			<div className="header-chat">
				<h1>Chat operativo</h1>
				<ul>
					<li><strong>Token:</strong> {this.props.chatInfo.token }</li>
					<li><strong>Dispositivos:</strong> {this.props.chatInfo.devices }</li>
					
				</ul>
			</div>
		);

	}
}