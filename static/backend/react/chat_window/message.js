'use strict';

const e = React.createElement;

class MessageChatWindow extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		const options = {
			year: 'numeric', month: 'numeric', day: 'numeric',
				hour: 'numeric', minute: 'numeric', second: 'numeric', 
		}

		const date = new Intl.DateTimeFormat('es-CO', options).format(new Date(this.props.message.createdAt));

		if(this.props.message.type == 'image'){
			return (
				<div className={`box-message ${this.props.message.sender == user_sender_id ? 'me' : ''}`}>
					<img src={this.props.message.message} />
					<time>{date}</time>
				</div>
			);
		} else{
			return (
				<div className={`box-message ${this.props.message.sender == user_sender_id ? 'me' : ''}`}>
					<p>{this.props.message.message}</p>
					<time>{date}</time>
				</div>
			);
		}
	}
}