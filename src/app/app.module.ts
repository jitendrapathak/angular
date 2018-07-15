import { BaseComponentComponent } from './components/base-component/base-component.component';



import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoaderModule } from './components/common/loader/loader.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpWrapperModule } from './httpWrapperModule/http_wrapper.module';
import { LoaderComponentService } from './components/common/loader/loader.service';
import { CoreModule } from './core/core.module';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ShareDataSubscriptionService } from './components/common/sharedata-subscription.service';

import { AuthGaurdModuleModule } from './auth-gaurd-module/auth-gaurd-module.module';
import { ShowAlertToastComponent } from './components/common/show-alert-toast/show-alert-toast.component';

import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { CommonConfirmationPopupComponent } from './core/common-confirmation-popup/common-confirmation-popup.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';
import localeArExtra from '@angular/common/locales/extra/ar-EG';
import { environment } from '../environments/environment';
import { PeopleModule } from './components/people/people.module';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}
registerLocaleData(localeAr, localeArExtra);




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowAlertToastComponent,
    ClickStopPropagationDirective,
    CommonConfirmationPopupComponent,
    BaseComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpWrapperModule,
    CoreModule,
    //PeopleModule,
    AuthGaurdModuleModule,
    LoaderModule,
    SelectDropDownModule
  ],
  providers: [LoaderComponentService,
    ShareDataSubscriptionService, { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation]
    },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [ClickStopPropagationDirective],
  entryComponents: [CommonConfirmationPopupComponent]
})
export class AppModule {
}
