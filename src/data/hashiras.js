import RengokuFundo from '@public/hashiras/rengoku/rengoku-fundo.png'
import Rengoku from '@public/hashiras/rengoku/rengoku.png'

import UzuiFundo from '@public/hashiras/uzui/uzui-fundo.png'
import Uzui from '@public/hashiras/uzui/uzui.png'

import TomiokaFundo from '@public/hashiras/tomioka/tomioka-fundo.png'
import Tomioka from '@public/hashiras/tomioka/tomioka.png'

import TokitoFundo from '@public/hashiras/tokito/tokito-fundo.png'
import Tokito from '@public/hashiras/tokito/tokito.png'

export const hashiras = [
  {
    id: 5,
    nome: 'Rengoku Kyojuro',
    galeria: [Rengoku, RengokuFundo],
    classes: ['fundo_rengoku', 'rengoku_detalhes'],
    respiracao1: ['respiracao_chamas', 'Respiração das Chamas'],
    paragrafo1:
      'Rengoku Kyojuro é um dos Hashiras mais carismáticos e apaixonados do Corpo de Caçadores de Demônios. Ele carrega um forte senso de justiça e responsabilidade, herdado de sua família, e sempre enfrenta desafios com um sorriso vibrante. Seu espírito inquebrável e determinação são inspiradores para aqueles ao seu redor, tornando-o um verdadeiro líder e exemplo para os mais jovens.',
    paragrafo2:
      'Como Hashira das Chamas, Rengoku domina técnicas poderosas e devastadoras baseadas no fogo. Sua força e velocidade são notáveis, permitindo-lhe enfrentar demônios de alto nível com confiança. Apesar de sua curta aparição, ele deixou um impacto profundo em seus companheiros, especialmente em Tanjiro Kamado, demonstrando que a verdadeira força vem do coração e da dedicação ao próximo.'
  },
  {
    id: 6,
    nome: 'Tengen Uzui',
    galeria: [Uzui, UzuiFundo],
    classes: ['fundo_uzui', 'uzui_detalhes'],
    respiracao1: ['respiracao_som', 'Respiração do Som'],
    paragrafo1:
      'Tengen Uzui é o extravagante e imponente Hashira do Som. Antigo ninja, ele combina sua experiência no combate furtivo com uma personalidade vibrante e teatral. Apesar de sua aparência chamativa e seu gosto por tudo que é “extravagante”, ele possui um forte senso de dever e protege aqueles sob sua responsabilidade com extrema lealdade.',
    paragrafo2:
      'Utilizando sua Respiração do Som, Uzui luta de forma estratégica, analisando os movimentos do inimigo como se fossem partituras musicais. Ele empunha duas enormes lâminas conectadas por correntes, utilizando explosões para aumentar seu poder destrutivo. Embora se aposente após a luta contra Gyutaro e Daki, ele continua apoiando o Corpo de Caçadores de Demônios como mentor e aliado.'
  },
  {
    id: 7,
    nome: 'Tomioka Giyu',
    galeria: [Tomioka, TomiokaFundo],
    classes: ['fundo_tomioka', 'tomioka_detalhes'],
    respiracao1: ['respiracao_agua', 'Respiração da Água'],
    paragrafo1:
      'Tomioka Giyu é o reservado e disciplinado Hashira da Água. Sua personalidade séria e introspectiva o faz parecer distante, mas no fundo ele se preocupa profundamente com seus aliados. Foi ele quem encontrou Tanjiro e Nezuko após o massacre de sua família e decidiu dar ao jovem a chance de se tornar um caçador de demônios.',
    paragrafo2:
      'Giyu é um dos espadachins mais talentosos da sua geração, dominando a Respiração da Água com perfeição. Ele desenvolveu uma técnica própria, a "Décima Primeira Forma: Calmaria", que lhe permite derrotar inimigos com mínima movimentação. Apesar de sua aparência fria, ele carrega um forte senso de justiça e honra, sendo um dos pilares mais confiáveis do Corpo de Caçadores de Demônios.'
  },
  {
    id: 8,
    nome: 'Muichiro Tokito',
    galeria: [Tokito, TokitoFundo],
    classes: ['fundo_tokito', 'tokito_detalhes'],
    respiracao1: ['respiracao_nevoa', 'Respiração da Nevoa'],
    paragrafo1:
      'Muichiro Tokito é o jovem prodígio do Corpo de Caçadores de Demônios e Hashira da Névoa. Apesar de sua aparência distraída e personalidade indiferente, ele é um gênio do combate, tendo se tornado Hashira em tempo recorde. Inicialmente, sua falta de empatia o distancia dos outros, mas à medida que recupera suas memórias, descobre sua verdadeira determinação.',
    paragrafo2:
      'A Respiração da Névoa de Muichiro é caracterizada por movimentos rápidos e confusos, desorientando seus oponentes. Ele possui um talento natural para a espada, conseguindo enfrentar até mesmo demônios da Lua Superior. Por trás de sua atitude desligada, existe uma força de vontade inabalável e um desejo ardente de proteger aqueles que não podem se defender sozinhos.'
  }
]
