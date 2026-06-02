import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, 
  Validators } from '@angular/forms';

@Component({
  selector: 'app-calcula-media',
  imports: [ReactiveFormsModule],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {
  protected mediaParcial: number | undefined
  protected mediaFinal: number | undefined
  #fb = inject(FormBuilder) //Ajuda a criar o objeto FormGroup
  //grupo de controles de formulário relacionados (inputs, selects...)
  protected formMedia: FormGroup; 
  constructor() {
    this.formMedia = this.#fb.group({
      bim1: [undefined, [Validators.required, 
        Validators.min(0), Validators.max(100)]],
      bim2: [undefined, [Validators.required, 
        Validators.min(0), Validators.max(100)]],
      bim3: [undefined, [Validators.required, 
        Validators.min(0), Validators.max(100)]],
      bim4: [undefined, [Validators.required, 
        Validators.min(0), Validators.max(100)]]
    })
    this.mediaParcial = undefined
    this.mediaFinal = undefined 
  }
  

  calcularMediaParcial() {
      const { bim1, bim2, bim3, bim4 } = this.formMedia.value
      this.mediaParcial = 
        (bim1 * 2 + bim2 * 2 + bim3 * 3 + bim4 * 3) / 10
  }

  //Método para calcular a média final. Recebe a nota 
}
