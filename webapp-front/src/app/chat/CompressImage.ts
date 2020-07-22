export class CompressImage{

	private file;
	private MAX_IMAGE_SIZE_PROCESS;
	private MAX_HEIGHT;
	private reader;
	private type;
	private name;

	constructor(file: File, max_size: number, prefix_name:string){
		this.file = file;
		this.MAX_IMAGE_SIZE_PROCESS = max_size;
		this.type = this.file.type;
		this.name = prefix_name +'_' + this.file.name;
		this.reader = new FileReader();

	}

	getImage() {
		var _self = this;

		return new Promise(function(resolve, reject){
			_self.reader.onloadend = _self.loadEndReader.bind(_self, resolve, reject);
			_self.reader.readAsDataURL(_self.file);
		});
	};

	base64ToArrayBuffer (base64) {
		base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
		var binaryString = atob(base64);
		var len = binaryString.length;
		var bytes = new Uint8Array(len);
		for (var i = 0; i < len; i++) {
			bytes[i] = binaryString.charCodeAt(i);
		}
		return bytes.buffer;
	}

	loadEndReader(resolve, reject) {
		var tmpImage = new Image(),
		_self = this;
		
		tmpImage.onload = function(){

			var _img = <HTMLImageElement>this;
			var MAX_WIDTH = _self.MAX_IMAGE_SIZE_PROCESS,
			MAX_HEIGHT = _self.MAX_IMAGE_SIZE_PROCESS,
			tmpWidth = tmpImage.width,
			tmpHeight = tmpImage.height;

			if(tmpWidth > tmpHeight){

				if(tmpWidth > MAX_WIDTH){
					tmpHeight *= MAX_WIDTH / tmpWidth;
					tmpWidth = MAX_WIDTH;
				}
			}else{
				if(tmpHeight > MAX_HEIGHT){
					tmpWidth *= MAX_HEIGHT / tmpHeight;
					tmpHeight = MAX_HEIGHT;
				}
			}

			var resizeCanvas = document.createElement('canvas');
			resizeCanvas.width = tmpWidth;
			resizeCanvas.height = tmpHeight;
			var ctx = resizeCanvas.getContext('2d');

	
			ctx.drawImage(_img, 0, 0, resizeCanvas.width, resizeCanvas.height);

			var dataURL = resizeCanvas.toDataURL(_self.type);
			var file = _self.dataURLtoBlob(dataURL);

			resolve(file);

		}

		tmpImage.onerror = function(err){
			reject(err)
		}


		tmpImage.src = this.reader.result;
	}

	dataURLtoBlob(dataURL) {
		var binary = atob(dataURL.split(',')[1]);
		var array = [], length = binary.length;

		for(var i = 0; i < length; i++){
			array.push(binary.charCodeAt(i));
		}

		var blob = new Blob([new Uint8Array(array)], {type: this.type});
		return new File([blob], this.name, {type: this.type, lastModified: blob['lastModifiedDate']})
	}
}
