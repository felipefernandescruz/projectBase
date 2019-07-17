import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingHelper {
  private loading: any;

  constructor(public loadingCtrl: LoadingController) {}

  public async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde...'
    });

    this.loading.present();
  }

  public hideLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }
}
