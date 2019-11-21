import { Component, OnInit } from '@angular/core';
import { MainServicesService } from './../main-services.service';
@Component({
	selector: 'app-terminos',
	templateUrl: './terminos.page.html',
	styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

	url_terms: string;
	constructor(private _service: MainServicesService) { }

	ngOnInit() {
		this.url_terms = this._service.getFileURL('Politica_de_Privacidad.pdf')
	}

}
