import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

	@Input() backRoute;

	constructor(private location: Location) { }

	ngOnInit() {}

	goBack(){
		this.location.back();
	}

}
