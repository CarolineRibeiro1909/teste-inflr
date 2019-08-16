import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss']
})
export class CreatePage {

  firstname: string;
  lastname: string;
  username: string;
  password: number;

  constructor(public api: ApiService, private toastCtrl: ToastController) { }


  createUser() {
    let data = {
      "first_name": this.firstname, "last_name": this.lastname, "username": this.username,
      "password": this.password
    };
    console.log('teste' + data)
    this.api.postArtigo(data).then((result) => {
      let toast = this.toastCtrl.create({ message: 'Usuário cadastrado com sucesso.', duration: 3000 });
      toast.present();
    })
      .catch(() => {
        const toast = this.toastCtrl.create({ message: 'Erro ao cadastrar usuário.', duration: 1000 });
        toast.present(toast);
      });


  }
}

