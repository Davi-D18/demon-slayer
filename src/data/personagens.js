import TanjiroDetalhes from '@public/personagens/tanjiro/tanjiro-detalhes.png'
import TanjiroFundo from '@public/personagens/tanjiro/tanjiro-fundo.png'
import Tanjiro from '@public/personagens/tanjiro/tanjiro.png'

import NezukoDetalhes from '@public/personagens/nezuko/nezuko-detalhes.png'
import NezukoFundo from '@public/personagens/nezuko/nezuko-fundo.png'
import Nezuko from '@public/personagens/nezuko/nezuko.png'

import ZenitsuDetalhes from '@public/personagens/zenitsu/zenitsu-detalhes.png'
import ZenitsuFundo from '@public/personagens/zenitsu/zenitsu-fundo.png'
import Zenitsu from '@public/personagens/zenitsu/zenitsu.png'

import InosukeDetalhes from '@public/personagens/inosuke/inosuke-detalhes.png'
import InosukeFundo from '@public/personagens/inosuke/inosuke-fundo.png'
import Inosuke from '@public/personagens/inosuke/inosuke.png'

export const personagens = [
  {
    id: 1,
    nome: 'Tanjiro Kamado',
    galeria: [Tanjiro, TanjiroFundo, TanjiroDetalhes],
    classes: ['fundo_tanjiro', 'tanjiro_detalhes'],
    respiracao1: ['respiracao_agua', 'Respiração da Água'],
    respiracao2: ['hinokami_kagura', 'Hinokami Kagura'],
    paragrafo1:
      'Tanjiro kamado é um rapaz inteligente e de bom coração que vive com a família nas montanhas. Tornou-se o ganha-pão da família após a morte do pai, viajando para a aldeia vizinha para vender carvão. Tudo mudou quando um dia regressou a casa e descobriu que a sua família tinha sido atacada e chacinada por um demónio. Tanjiro e a sua irmã Nezuko foram os únicos sobreviventes do incidente, tendo Nezuko sido transformada num demónio, mas ainda mostrando surpreendentemente sinais de emoções e pensamentos humanos.',
    paragrafo2:
      'O protagonista de Demon Slayer, Tanjiro Kamado, é o filho mais velho de um falecido vendedor de carvão, Tanjuro. No primeiro capítulo da manga, a sua família (a sua mãe e os seus irmãos mais novos) é massacrada por um demónio chamado Muzan Kibutsuji, sobrevivendo apenas a sua irmã Nezuko Kamado, que se transforma em demónio.'
  },
  {
    id: 2,
    nome: 'Nezuko Kamado',
    galeria: [Nezuko, NezukoFundo, NezukoDetalhes],
    classes: ['fundo_nezuko', 'nezuko_detalhes'],
    respiracao1: ['kekkijutsu_bakketsu', 'Sangue Explosivo'],
    paragrafo1:
      'Nezuko Kamado é uma jovem bondosa e protetora, que vivia feliz com sua família antes do trágico ataque de Muzan Kibutsuji. Transformada em demônio, Nezuko surpreendentemente mantém vestígios de sua humanidade, recusando-se a se alimentar de humanos. Sua ligação com seu irmão Tanjiro torna-se sua maior força, levando-a a lutar ao seu lado contra as forças demoníacas enquanto busca uma maneira de recuperar sua humanidade.',
    paragrafo2:
      'Após ser transformada em demônio, Nezuko desenvolve habilidades únicas, incluindo a capacidade de reduzir seu tamanho para caber em uma caixa e uma força surpreendente para sua aparência delicada. Diferente de outros demônios, ela não se alimenta de sangue humano, sobrevivendo apenas com o sono. Ao longo da história, sua determinação e vínculo com Tanjiro mostram que sua humanidade ainda está presente.'
  },
  {
    id: 3,
    nome: 'Zenitsu Agatsuma',
    galeria: [Zenitsu, ZenitsuFundo, ZenitsuDetalhes],
    classes: ['fundo_zenitsu', 'zenitsu_detalhes'],
    respiracao1: ['respiracao_trovao', 'Respiração do Trovão'],
    paragrafo1:
      'Zenitsu Agatsuma é um jovem espadachim covarde e inseguro, que entrou para os Caçadores de Demônios por pressão de seu mestre. Apesar de seu medo extremo, ele possui um talento natural para a espada, conseguindo lutar em seu estado inconsciente. Com uma audição extremamente aguçada, ele é capaz de perceber ameaças à distância, embora prefira evitar combates sempre que possível.',
    paragrafo2:
      'Zenitsu aprendeu a Respiração do Trovão, mas conseguiu dominar apenas a Primeira Forma, que executa com perfeição. Durante suas batalhas, ele entra em um estado de transe e libera um poder devastador, surpreendendo inimigos e aliados. Mesmo com suas constantes reclamações e medos, ele demonstra coragem quando mais importa, especialmente quando precisa proteger aqueles que ama.'
  },
  {
    id: 4,
    nome: 'Inosuke Hashibira',
    galeria: [Inosuke, InosukeFundo, InosukeDetalhes],
    classes: ['fundo_inosuke', 'inosuke_detalhes'],
    respiracao1: ['respiracao_fera', 'Respiração da Fera'],
    paragrafo1:
      'Inosuke Hashibira é um espadachim feroz e impulsivo, criado por javalis nas montanhas. Seu comportamento selvagem e sua tendência a desafiar qualquer um que cruze seu caminho fazem dele um lutador imprevisível. Ele veste uma máscara de javali e luta com duas espadas de lâminas irregulares, moldadas para maximizar o dano. Apesar de sua natureza agressiva, ele desenvolve um forte laço de amizade com Tanjiro e os outros.',
    paragrafo2:
      'Desde pequeno, Inosuke sobreviveu sozinho nas montanhas, aprendendo a lutar instintivamente. Sua técnica, a Respiração da Fera, foi criada por ele mesmo, adaptando-se ao seu estilo único de combate. Inicialmente, ele despreza qualquer forma de fraqueza, mas ao longo da jornada aprende o valor do trabalho em equipe e descobre sua própria força além da brutalidade.'
  }
]
