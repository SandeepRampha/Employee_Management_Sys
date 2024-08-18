import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { KeysApiInterceptor } from './interceptors/keys-api.interceptor';
import { DbEmpListComponent } from './components/db-emp-list/db-emp-list.component';
import { DbEmpInsertComponent } from './components/db-emp-insert/db-emp-insert.component';
import { DbEmpUpdateComponent } from './components/db-emp-update/db-emp-update.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';


import { ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/date-format-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DbEmpListComponent,
    DbEmpInsertComponent,
    DbEmpUpdateComponent,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeysApiInterceptor,
      multi:true   
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
