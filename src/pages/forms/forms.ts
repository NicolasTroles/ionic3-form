import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'page-forms',
	templateUrl: 'forms.html',
})
export class FormsPage {

	credentialsForm: FormGroup;
	myUfs = [];

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private formBuilder: FormBuilder,
		private alertCtrl: AlertController) {

		this.myUfs = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

		this.credentialsForm = this.formBuilder.group({
			enderecoComercial: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			numeroEndereco: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
			complemento: [''],
			cep: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
			cidade: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			uf: [''],
			telComecial: ['', Validators.compose([Validators.required, Validators.minLength(14)])],
			telCelular: ['', Validators.compose([Validators.minLength(15)])],
			email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]
		});
	}

	onSelectChange(selectedValue: Number) {
		// setar UF de form
	}

	save() {
		// Aqui pode-se criar validações específicas para o preenchimento incorreto dos campos, 
		// ressaltando uma mensagem no campo para o usuário como "Este campo deve possuir pelo menos 3 caracteres"

		// Não sei se o ionic possui, mas no Angular Material possui um componente chamado ng-Message que 
		// avisa o preenchimento incorreto de cada campo em cada situação.

		let alert = this.alertCtrl.create({
			title: 'Cadastro Realizado com Sucesso',
			buttons: ['Ok']
		});
		alert.present();
	}

}
