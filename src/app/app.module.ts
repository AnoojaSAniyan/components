import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustompipesPipe } from './custompipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    Page2Component,
    Page3Component,
    DemopipesComponent,
    CustompipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
