import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConsultaCepComponent} from './consulta-cep/consulta-cep.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultaCepComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viacep';
}
