import {Component} from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {

  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 6, 21),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2019, 6, 10),
      dataPagamento: new Date(2019, 6, 9), valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2019, 7, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2018, 1, 10),
      dataPagamento: new Date(2018, 10, 30), valor: 800, pessoa: 'Escola Abelha Rainha'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2019, 9, 10),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza'
    },
    {
      tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2019, 7, 10),
      dataPagamento: new Date(2019, 7, 9), valor: 1750, pessoa: 'Casa Nova Imóveis'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2019, 7, 13),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
  ];
}
