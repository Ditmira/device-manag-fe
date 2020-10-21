import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceServiceService } from './services/device-service.service';
import { AttributeFormComponent } from './attribute-form/attribute-form.component';
import { MatDialogModule}  from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DeviceInfoComponent } from './device-info/device-info.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeviceUpdateComponent } from './device-update/device-update.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceFormComponent,
    AttributeFormComponent,
    DeviceInfoComponent,
    DeviceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },DeviceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
