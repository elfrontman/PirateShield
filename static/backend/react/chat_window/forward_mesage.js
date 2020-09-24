'use strict';

const e = React.createElement;

class ForwardChatWindow extends React.Component{

	constructor(props){
		super(props);
    }
    
    sendMessage(message, chat) {

        console.log(chat)
        
        const user = {
            name_user: chat.name_user,
            chat_id: chat._id ? chat._id.chat_id : chat.id,
            sender: chat.sender,
            type: message.type,
            receiver: chat.user
        }

        const type = message.type;
        this.props.onSendMessage(message.message, user, type)
    }

    cancel() {
        this.props.onCloseModal()
    }

    render() {
        const chats = [];

        for (const [index, chat] of this.props.chatsList.entries()) {
            if (chat.id !== this.props.message_selected.id) {
                chats.push(<li key={index} onClick={ () => this.sendMessage(this.props.message, chat)}> { chat.name_user } </li>);    
            }
            
        }
        
		return (
            <div className="forwardModal">
                
                <ul>
                    <h3>Enviar mensaje a</h3>
                    {chats}
                    <br/>
                    <a className="button expanded alert" onClick={ () => this.cancel()}>CANCELAR</a> 
                </ul>  

                
			</div>
		);
	}
}