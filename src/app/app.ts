import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Barra } from './Components/barra/barra';
import { Cabecera } from './Components/cabecera/cabecera';
import { Footer } from './Components/footer/footer';
import { Menu } from './Components/menu/menu';
import { Principal } from './Components/principal/principal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Barra, Cabecera, Footer, Menu, Principal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Estructura_Completa');
}
