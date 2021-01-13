import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { AreaComponent } from './area/area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ArticleComponent,
    AreaComponent  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
