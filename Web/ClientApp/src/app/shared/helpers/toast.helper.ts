import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastHelper {
    private duration: number;
    private position: string;

    constructor(private toastCtrl: ToastController) {
        this.duration = 3000;
        this.position = 'bottom';
    }

    public async show(message: string) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: this.duration
        });
        toast.present();
    }
}
