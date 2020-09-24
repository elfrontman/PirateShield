'use strict';

const e = React.createElement;

class FormChatWindow extends React.Component{
	constructor(props){
		super(props);
		this.state = {message: ''};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.message) {
			this.props.onSubmitMessage(this.state.message);
			this.setState({
				message: ''
			})
		}
		

	}

	handleChange = (event) => {
		this.setState({message: event.target.value});
	}

	handleChangeImage = (event) => {
		const file = event.target.files[0];
		if (file.type.search(/^image\/(png|jpg|jpeg|heic)/) > -1) {
			this.props.onSubmitImage(file);
		}
	}


	render(){

		return (
			<form className="form-box" onSubmit={this.handleSubmit}>
				<div className="grid-x">
					<div className="cell small-12 medium-10">
						<input type="text" name="message" id="message" className="message-input" value={this.state.message} onChange={this.handleChange}/>	
					</div>
					<div className="cell small-12 medium-1">
						<button className="button expanded">
							<i className="fas fa-paper-plane"></i>
						</button>
					</div>
					<div className="cell small-12 medium-1">
						<label className="button expanded alert">
							<i className="fas fa-camera"></i>
							<input type="file" hidden className="filechooser"  accept="image/png,image/jpeg,image/jpg" onChange={this.handleChangeImage}/>
						</label>
				</div>
			</div>
		</form>	
		);

	}
}