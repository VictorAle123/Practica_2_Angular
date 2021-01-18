import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ComponentePersonaComponent } from './Componentes/componente-persona/componente-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ComponentePersonaComponent]
})
export class AppModule { }
