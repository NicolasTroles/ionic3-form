import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'page-forms',
	templateUrl: 'forms.html',
})
export class FormsPage {

	credentialsForm: FormGroup;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private formBuilder: FormBuilder,
		private alertCtrl: AlertController) {

		this.credentialsForm = this.formBuilder.group({
			enderecoComercial: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			numeroEndereco: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
			complemento: [''],
			cep: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
			cidade: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			uf: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			telComecial: ['', Validators.compose([Validators.required, Validators.minLength(14)])],
			telCelular: ['', Validators.compose([Validators.minLength(15)])],
			email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]
			
		});
	}

	save() {
		let alert = this.alertCtrl.create({
			title: 'Cadastro Realizado com Sucesso',
			buttons: ['Ok']
		});
		alert.present();
	}

}
