import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ShareButtonsModule} from "ng2-sharebuttons";
import { AppComponent } from './app.component';
import {CreateComponent} from './create.component';
import {CreateServiceService} from './create-service.service' 
import{ListComponent} from './list.component';
import{ListService} from './list.service';
import{UpdateComponent} from './update.component';
import{UpdateService} from './update.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShareButtonsModule
  ],
  providers: [CreateServiceService,ListService,UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
