import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { MovieService } from './shared/service/movie.service';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ],
  providers: [MovieService],
  bootstrap: [MainComponent]
})
export class MainModule { }
