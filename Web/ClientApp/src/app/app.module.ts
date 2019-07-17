import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppGuard } from "./app.guard";
import { ServiceLocatorHelper } from "./shared/helpers/service-locator.helper";
import { AlertHelper } from "./shared/helpers/alert-helper";
import { LoadingHelper } from "./shared/helpers/loading.helper";
import { StorageHelper } from "./shared/helpers/storage.helper";
import { ToastHelper } from "./shared/helpers/toast.helper";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    AppGuard,
    AlertHelper,
    LoadingHelper,
    StorageHelper,
    ToastHelper,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocatorHelper.injector = this.injector;
  }
}
