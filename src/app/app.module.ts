import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeModule,TreeDraggedElement } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [TreeDraggedElement],
  bootstrap: [AppComponent]
})
export class AppModule { }
