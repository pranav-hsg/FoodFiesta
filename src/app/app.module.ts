import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // <-- Import routing module

@NgModule({
  declarations: [
    AppComponent,
    // other components like HomeComponent, BrowseRestaurantsComponent, etc.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // <-- Add routing module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
