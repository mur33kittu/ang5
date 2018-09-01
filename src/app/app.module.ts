import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core-module';
import { LayoutComponent } from './layouts/layout.component';
import { FormsModule } from '@angular/forms';
import { SlideMenuModule, OverlayPanelModule, CarouselModule, ButtonModule, CalendarModule, SliderModule, MultiSelectModule, RadioButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { ToastrModule } from 'ngx-toastr';
import { ToasterModule } from 'angular5-toaster';
import { NgProgressModule } from 'ngx-progressbar';
import { SlidingBarComponent } from './sliding-bar/sliding-bar.component';
import { OverlayComponent } from './core-module/components/overlay/overlay.component';
export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SlidingBarComponent,
    OverlayComponent
  ],
  imports: [
    CoreModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    OverlayPanelModule,
    TableModule,
    CarouselModule,
    ButtonModule,
    ToasterModule,
    NgProgressModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    RadioButtonModule
  ],
  providers: [
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }