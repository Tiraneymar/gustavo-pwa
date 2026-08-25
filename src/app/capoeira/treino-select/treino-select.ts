import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapoeiraModel } from '../capoeira.service';

@Component({
  imports: [],
  selector: 'app-treino-select',
  styleUrl: './treino-select.css',
  templateUrl: './treino-select.html',
})
export class TreinoSelect {

  @Input() treinos!: CapoeiraModel[]
  @Input() treinoSelecionado?: number
  @Output() selecionar = new EventEmitter<number | undefined>()

  selecionarTreino(index: number | undefined) {
    this.selecionar.emit(index)
  }

}
