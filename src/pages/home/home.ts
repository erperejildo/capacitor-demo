import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  image: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  async takePhoto() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64 // change for prod
    });

    this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(
      result && result.base64Data
    );
  }
}
