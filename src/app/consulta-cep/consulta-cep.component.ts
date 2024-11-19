import {Component, inject} from '@angular/core';
import {ConsultaCepService} from './consulta-cep.service';
import {Endereco} from './endereco.model';


@Component({
  selector: 'app-consulta-cep',
  standalone: true,
  imports: [],
  templateUrl: './consulta-cep.component.html',
  styleUrl: './consulta-cep.component.css'
})
export class ConsultaCepComponent {

  cep: string = '85900180';
  cepService = inject(ConsultaCepService);

  onConsultaCep() {
    this.cepService.buscarCep(this.cep).subscribe(
      {
        next: (endereco: Endereco) => {
          console.log(endereco);
        },
        error:(error) => console.error(error)
      }
    );
  }
}
