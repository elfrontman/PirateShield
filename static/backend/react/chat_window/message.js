'use strict';

const e = React.createElement;

class MessageChatWindow extends React.Component{
	constructor(props){
		super(props);
	}

	b64toBlob(b64Data, contentType = '', sliceSize = 512) {

		if (b64Data.search(/^data:image\/(png);base64,/) > -1) {
			contentType = 'image/png'
		}

		if (b64Data.search(/^data:image\/(jpg|jpeg);base64,/) > -1) {
			contentType = 'image/jpeg'
		}

		if (b64Data.search(/^data:application\/(pdf);base64,/) > -1) {
			contentType = 'application/pdf'
		}

		try {
			const byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, '').replace(/^data:application\/(pdf);base64,/, ''));
			const byteArrays = [];
		
			for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);
		
			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
		
			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
			}
		
			const blob = new Blob(byteArrays, { type: contentType });
			return blob;
		} catch (e) {
			return null;
		}
		
	}
	
	handleClick() {
		this.props.onClick(this.props.message);
	}

	render(){

		const options = {
			year: 'numeric', month: 'numeric', day: 'numeric',
				hour: 'numeric', minute: 'numeric', second: 'numeric', 
		}

		const date = new Intl.DateTimeFormat('es-CO', options).format(new Date(this.props.message.createdAt));
		

		if (this.props.message.type == 'image') {
			const blob = this.b64toBlob(this.props.message.message);
			
			let blobUrl
			if (blob) {
				blobUrl = URL.createObjectURL(blob);
			}
			
			return (
				<div className={`box-message ${this.props.message.sender == user_sender_id ? 'me' : ''}`} onClick={ () => {this.handleClick()} }>
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