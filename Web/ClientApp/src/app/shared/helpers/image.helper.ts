import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ImageHelper {
  //
  public static ResizeImage(
    photoBase64,
    MAX_WIDTH = 640,
    MAX_HEIGHT = 480,
    quality = 0.8
  ) {
    const canvas: any = document.createElement("canvas");
    const image = new Image();

    return Observable.create(observer => {
      image.crossOrigin = "";
      image.src = photoBase64;
      image.onload = () => {
        let width = image.width;
        let height = image.height;
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/png", quality);

        observer.next(dataUrl);
        observer.complete();
      };
    });
  }
}
