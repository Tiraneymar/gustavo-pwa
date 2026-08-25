import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' }) // permite injetar esse serviço em outra classe automaticamente.
export class CapoeiraService {

    obterTreinos() {
        return treinos
    }

}

export class CapoeiraModel { // classe que representa um treino.
    nome!: string
    corCorda!: string
    movimentos!: string[]
    tempoTreino!: number
    tempoDescanso!: number
}

const treinos: CapoeiraModel[] = [ // lista fixa de treinos disponiveis.
    {
        nome: 'Corda Crua (Iniciante)',
        corCorda: 'grey',
        tempoTreino: 30,
        tempoDescanso: 20,
        movimentos: [
            'GINGA BASE (Postura e Guarda)',
            'ESQUIVA LATERAL',
            'COCORINHA (Defesa Baixa)',
            'MEIA LUA DE FRENTE',
            'BENÇÃO (Chute Frontal)',
            'GINGA COM NEGATIVA DE FRENTE',
        ],
    },
    {
        nome: 'Corda Verde (Batizado)',
        corCorda: 'green',
        tempoTreino: 40,
        tempoDescanso: 15,
        movimentos: [
            'GINGA ACELERADA',
            'ARMADA (Chute Rotacional)',
            'QUEIXADA',
            'RALEIRAS / ESQUIVA DE TRÁS',
            'MARTELO LATERAL',
            'ROLÊ (Movimentação de Chão)',
        ],
    },
    {
        nome: 'Corda Amarela (Intermediário)',
        corCorda: 'amber',
        tempoTreino: 45,
        tempoDescanso: 15,
        movimentos: [
            'GINGA COM MUDANÇA DE RITMO',
            'MEIA LUA DE COMPASSO',
            'AU TRADICIONAL (Estrela)',
            'SÉRIE: ARMADA + NEGATIVA',
            'SÉRIE: QUEIXADA + COCORINHA',
            'SÉRIE: MARTELO + ROLÊ',
        ],
    },
    {
        nome: 'Corda Azul (Avançado / Graduado)',
        corCorda: 'blue',
        tempoTreino: 50,
        tempoDescanso: 10,
        movimentos: [
            'GINGA AGRESSIVA (Foco em Jogo)',
            'SÉRIE: MEIA LUA DE COMPASSO + SÃO BENTO',
            'AU BATIDO (Defesa/Ataque Plástico)',
            'BENÇÃO COM SALTO',
            'SÉRIE: QUEIXADA + ARMADA + ROLÊ',
            'FLOREIOS (Movimentos Acrobáticos)',
        ],
    },
    {
        nome: 'Corda de Mestre (Vermelha/Branca)',
        corCorda: 'red',
        tempoTreino: 60,
        tempoDescanso: 10,
        movimentos: [
            'GINGA DE MESTRE (Malandragem pura)',
            'SEQUÊNCIA 1 DE MESTRE BIMBA',
            'SEQUÊNCIA 2 DE MESTRE BIMBA',
            'SÉRIE COMPLETA: ARMADA + COMPASSO + AU',
            'JOGO DE DENTRO (Espaço Curto)',
            'JOGO DE SÃO BENTO GRANDE',
        ],
    },
]