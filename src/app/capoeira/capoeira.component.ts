import { Component, inject, OnInit, signal } from '@angular/core';
import { CapoeiraModel, CapoeiraService } from './capoeira.service';
import { TreinoSelect } from './treino-select/treino-select';

@Component({ // @Component é um decorator que define o componente do angular.
  selector: 'app-capoeira', // é o nome da tag que chama esse componente no html (ex: <app-capoeira>).
  standalone: true, // indica que o componente é standalone, ou seja, não precisa de um componente pai.
  imports: [
    TreinoSelect,
  ],
  templateUrl: './capoeira.component.html', // indica onde está o html deste componente.
  styleUrl: './capoeira.component.css' // indica onde está o css deste componente.
})
export class CapoeiraComponent implements OnInit { // OnInit obriga o componente implementar o método ngOnInit, que é chamado sempre que o componente for inicializado.

  // *Observação: coisas que começam com private só podem ser acessadas dentro dessa classe. Nem o html pode acessar.

  private capoeiraService = inject(CapoeiraService) // inject faz a injeção do serviço CapoeiraService e controla todo o ciclo de vida automáticamente.

  treinos: CapoeiraModel[] = [] // guarda a lista de treinos disponiveis.
  treinoSelecionado?: number // guarda o treino que foi selecionado.

  movimentoSelecionado?: number

  timer = signal(0) // guarda o tempo atual do timer. E signal permite atualizar na tela somente o timer sem ter que atualizar toda a página.
  pausado = true // indica se o timer deve ser pausado ou não.

  ngOnInit(): void { // antes da tela abrir faça...
    this.carregarTreinos()
  }

  private carregarTreinos() { // pede para o serviço obter os treinos e guarda os resultados na variável treinos.
    this.treinoSelecionado = undefined
    this.treinos = this.capoeiraService.obterTreinos()
  }

  selecionarTreino(index: number | undefined) {
    this.treinoSelecionado = index // seleciona o treino na posição index da lista de treinos e guarda na variavel treinoSelecionado.
    this.movimentoSelecionado = index == undefined ? undefined : 0
    this.resetarTimer()
  }

  resetarTimer() {
    this.pausarTimer() // pausa o timer.
    if (this.treinoSelecionado != undefined) {
      this.timer.set(this.treinos[this.treinoSelecionado].tempoTreino || 0) // seta o timer com o tempo do treino selecionado. Se não houver treino selecionado, zera o timer.
    }
  }

  iniciarTimer() {
    this.pausado = false // define que o timer está ativo.
    const timerId = setInterval(() => { // setInterval é um loop que roda a cada x milisegundos. timerId é o identificador usado para parar o loop.
      if (this.timer() == 0) { // se o timer chegou a zero, pausar o timer.
        this.pausarTimer()
      }
      if (this.pausado) { // se o timer estiver pausado, parar o loop.
        clearInterval(timerId) // parar o loop com o identificador timerId.
        return // indica que a função deve sair da execução neste ponto.
      }
      this.timer.update(atual => atual - 1) // se chegou até aqui reduz o timer em 1 segundo.
    }, 1000) // 1000 é a quantidade de milisegundos em que o loop será executado. 1000ms = 1 segundo.
  }

  pausarTimer() {
    this.pausado = true
  }

  avancar() {
    if (this.treinoSelecionado == undefined) {
      return
    }
    const movimentosTotal = this.treinos[this.treinoSelecionado].movimentos.length
    if (this.movimentoSelecionado == undefined) {
      this.movimentoSelecionado = 0
    } else if ((this.movimentoSelecionado + 1) >= movimentosTotal) {
      alert("Você chegou ao fim do treino!")
      this.reiniciar()
      return
    } else {
      this.movimentoSelecionado += 1
    }
    this.resetarTimer()
  }

  reiniciar() {
    this.treinoSelecionado = undefined
    this.movimentoSelecionado = undefined
    this.timer.set(0)
    this.pausado = true
  }

}
