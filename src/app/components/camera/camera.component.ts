import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from "@angular/core";
import { ToastController } from "@ionic/angular";
import { PictureService } from "../../services/picture.service";

// A good example how to build an app and use the camera
// https://ionicframework.com/docs/angular/your-first-app
@Component({
  selector: "app-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.scss"]
})
export class CameraComponent {
  @ViewChild("photoRef", { static: true }) photoInput: ElementRef;
  @Output() public readonly capture = new EventEmitter<string>();

  constructor(
    private readonly picture: PictureService,
    private readonly toasts: ToastController
  ) {}

  initPictureProcess() {
    // fake click on photo input to open the dialog
    this.photoInput.nativeElement.click();
  }

  async handleInput() {
    // get selected files
    const files: FileList = this.photoInput.nativeElement.files;
    if (!files && files.length <= 0) {
      return;
    }
    try {
      // only convert the first selected photo to base64 and emit
      const base64Photo = await this.picture.convertToBase64(files[0]);
      this.capture.emit(base64Photo);
    } catch {
      // notify user on error
      const toast = await this.toasts.create({
        message: "Could not take picture",
        duration: 2000,
        color: "warning",
        translucent: true
      });
      toast.present();
    }
  }

  // async saveToDevice(data: string) {
  //   const path = new Date().getTime() + 'ImmoAppImage.jpeg';
  //   const file = await Filesystem.writeFile({
  //     path,
  //     data,
  //     directory: FilesystemDirectory.Data,
  //   });
  // }

  async takePictureCapacitor() {
    const picture = await this.picture.takePicture();
    this.capture.emit(picture);
  }
}
