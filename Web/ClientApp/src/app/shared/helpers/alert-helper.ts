import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertHelper {
  constructor(private alertController: AlertController) {}

  public async errorAlert(message: string, errorAction?: any) {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader: message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (errorAction) {
              errorAction();
            }
          }
        }
      ]
    });

    alert.present();
  }

  public async okAlert(message: string, okAction?: any) {
    const alert = await this.alertController.create({
      header: 'Informação',
      subHeader: message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (okAction) {
              okAction();
            }
          }
        }
      ]
    });
    alert.present();
  }

  public async confirmAlert(
    message: string,
    title?: string,
    yesAction?: any,
    noAction?: any
  ) {
    const alert = await this.alertController.create({
      header: title ? title : 'Confirmação',
      subHeader: message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Não',
          handler: data => {
            if (noAction) {
              noAction();
            }
          }
        },
        {
          text: 'Sim',
          handler: data => {
            if (yesAction) {
              yesAction();
            }
          }
        }
      ]
    });

    alert.present();
  }

  public async presentPrompt(
    message: string,
    title?: string,
    yesAction?: any,
    noAction?: any
  ) {
    const alert = await this.alertController.create({
      header: title ? title : 'Confirmação',
      subHeader: message,
      backdropDismiss: false,
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'E-mail'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            if (noAction) {
              noAction();
            }
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            if (yesAction) {
              yesAction(data);
            }
          }
        }
      ]
    });

    alert.present();
  }
}
