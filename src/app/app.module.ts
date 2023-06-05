import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
