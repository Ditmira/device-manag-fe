import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import {AttributeFormComponent} from './attribute-form/attribute-form.component';
import {DeviceInfoComponent} from './device-info/device-info.component';

const routes: Routes = [
  { path: 'devices', component: DeviceListComponent },
  { path: 'addDevice', component: DeviceFormComponent },
  { path: 'addAttribute', component: AttributeFormComponent},
  { path: 'viewByID', component: DeviceInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
