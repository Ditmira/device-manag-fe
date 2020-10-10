import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceServiceService } from './device-service.service';
import { AttributeFormComponent } from './attribute-form/attribute-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceFormComponent,
    AttributeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeviceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
