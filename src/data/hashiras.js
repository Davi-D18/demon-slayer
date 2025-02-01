import RengokuDetalhes from '@public/hashiras/rengoku/rengoku-detalhes.png'
import RengokuFundo from '@public/hashiras/rengoku/rengoku-fundo.png'
import Rengoku from '@public/hashiras/rengoku/rengoku.png'

import UzuiDetalhes from '@public/hashiras/uzui/uzui-detalhes.png'
import UzuiFundo from '@public/hashiras/uzui/uzui-fundo.png'
import Uzui from '@public/hashiras/uzui/uzui.png'

import TomiokaDetalhes from '@public/hashiras/tomioka/tomioka-detalhes.png'
import TomiokaFundo from '@public/hashiras/tomioka/tomioka-fundo.png'
import Tomioka from '@public/hashiras/tomioka/tomioka.png'

import TokitoDetalhes from '@public/hashiras/tokito/tokito-detalhes.png'
import TokitoFundo from '@public/hashiras/tokito/tokito-fundo.png'
import Tokito from '@public/hashiras/tokito/tokito.png'

import GyomeiFundo from '@public/hashiras/gyomei/gyomei-fundo.png'
import Gyomei from '@public/hashiras/gyomei/gyomei.png'

import SanemiFundo from '@public/hashiras/sanemi/sanemi-fundo.png'
import Sanemi from '@public/hashiras/sanemi/sanemi.png'

import ShinobuFundo from '@public/hashiras/shinobu/shinobu-fundo.png'
import Shinobu from '@public/hashiras/shinobu/shinobu.png'

import MitsuriFundo from '@public/hashiras/mitsuri/mitsuri-fundo.png'
import Mitsuri from '@public/hashiras/mitsuri/mitsuri.png'

import ObanaiFundo from '@public/hashiras/obanai/obanai-fundo.png'
import Obanai from '@public/hashiras/obanai/obanai.png'

export const hashiras = [
  {
    id: 5,
    nome: 'Rengoku Kyojuro',
    galeria: [Rengoku, RengokuFundo, RengokuDetalhes],
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
    galeria: [Uzui, UzuiFundo, UzuiDetalhes],
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
    galeria: [Tomioka, TomiokaFundo, TomiokaDetalhes],
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
    galeria: [Tokito, TokitoFundo, TokitoDetalhes],
    classes: ['fundo_tokito', 'tokito_detalhes'],
    respiracao1: ['respiracao_nevoa', 'Respiração da Nevoa'],
    paragrafo1:
      'Muichiro Tokito é o jovem prodígio do Corpo de Caçadores de Demônios e Hashira da Névoa. Apesar de sua aparência distraída e personalidade indiferente, ele é um gênio do combate, tendo se tornado Hashira em tempo recorde. Inicialmente, sua falta de empatia o distancia dos outros, mas à medida que recupera suas memórias, descobre sua verdadeira determinação.',
    paragrafo2:
      'A Respiração da Névoa de Muichiro é caracterizada por movimentos rápidos e confusos, desorientando seus oponentes. Ele possui um talento natural para a espada, conseguindo enfrentar até mesmo demônios da Lua Superior. Por trás de sua atitude desligada, existe uma força de vontade inabalável e um desejo ardente de proteger aqueles que não podem se defender sozinhos.'
  },
  {
    id: 9,
    nome: 'Gyomei Himejima',
    galeria: [Gyomei, GyomeiFundo],
    classes: ['fundo_gyomei', 'gyomei_detalhes'],
    respiracao1: ['respiracao_pedra', 'Respiração da Pedra'],
    paragrafo1:
      'Gyomei Himejima é o mais velho dos Hashiras e serve como o Pilar da Pedra. Apesar de sua cegueira, ele possui uma percepção aguçada e é considerado o mais forte entre os Hashiras. Gyomei é profundamente espiritual e frequentemente é visto rezando, refletindo sua natureza calma e compassiva.',
    paragrafo2:
      'Utilizando a Respiração da Pedra, Gyomei empunha uma arma única composta por um machado e uma bola de espinhos conectados por uma corrente, que maneja com maestria. Sua força física é incomparável, permitindo-lhe enfrentar os demônios mais poderosos com facilidade. Sua dedicação e fé inabalável servem de inspiração para todos os membros do Corpo de Caçadores de Demônios.'
  },
  {
    id: 10,
    nome: 'Sanemi Shinazugawa',
    galeria: [Sanemi, SanemiFundo],
    classes: ['fundo_sanemi', 'sanemi_detalhes'],
    respiracao1: ['respiracao_vento', 'Respiração do Vento'],
    paragrafo1:
      'Sanemi Shinazugawa é o impetuoso e feroz Pilar do Vento. Conhecido por sua personalidade abrasiva e comportamento agressivo, ele possui uma profunda aversão aos demônios devido a experiências traumáticas em seu passado. Apesar de seu exterior duro, Sanemi se preocupa profundamente com seus companheiros e está comprometido com a erradicação dos demônios.',
    paragrafo2:
      'Como usuário da Respiração do Vento, Sanemi emprega técnicas rápidas e cortantes que devastam seus oponentes. Sua resistência e durabilidade são notáveis, permitindo-lhe continuar lutando mesmo após sofrer ferimentos graves. Sua determinação feroz e habilidades de combate excepcionais fazem dele um dos Hashiras mais formidáveis.'
  },
  {
    id: 11,
    nome: 'Shinobu Kocho',
    galeria: [Shinobu, ShinobuFundo],
    classes: ['fundo_shinobu', 'shinobu_detalhes'],
    respiracao1: ['respiracao_inseto', 'Respiração do Inseto'],
    paragrafo1:
      'Shinobu Kocho é a graciosa e serena Pilar do Inseto. Sempre exibindo um sorriso gentil, ela esconde uma profunda tristeza devido à perda de sua irmã para os demônios. Embora não possua a força física para decapitar demônios, Shinobu desenvolveu um estilo de combate único que utiliza venenos para subjugar seus inimigos.',
    paragrafo2:
      'Empregando a Respiração do Inseto, Shinobu realiza movimentos ágeis e precisos, aplicando venenos letais através de sua espada modificada. Sua inteligência e conhecimento em medicina a tornam uma estrategista formidável, permitindo-lhe criar antídotos e venenos especializados para diferentes situações. Sua abordagem única ao combate e sua determinação silenciosa a distinguem entre os Hashiras.'
  },
  {
    id: 12,
    nome: 'Mitsuri Kanroji',
    galeria: [Mitsuri, MitsuriFundo],
    classes: ['fundo_mitsuri', 'mitsuri_detalhes'],
    respiracao1: ['respiracao_amor', 'Respiração do Amor'],
    paragrafo1:
      'Mitsuri Kanroji é a vibrante e emocional Pilar do Amor. Com um coração gentil e uma natureza afetuosa, ela se junta ao Corpo de Caçadores de Demônios em busca de um propósito e para encontrar um parceiro que possa apreciar sua força única. Sua personalidade calorosa e empática a torna querida entre seus companheiros.',
    paragrafo2:
      'Utilizando a Respiração do Amor, Mitsuri emprega uma espada flexível semelhante a um chicote, permitindo-lhe realizar ataques de longo alcance com velocidade impressionante. Sua força física é extraordinária, contrastando com sua aparência delicada. A combinação de sua técnica única e sua paixão ardente a tornam uma combatente formidável contra os demônios.'
  },
  {
    id: 13,
    nome: 'Obanai Iguro',
    galeria: [Obanai, ObanaiFundo],
    classes: ['fundo_obanai', 'obanai_detalhes'],
    respiracao1: ['respiracao_serpente', 'Respiração da Serpente'],
    paragrafo1:
      'Obanai Iguro é o enigmático e reservado Pilar da Serpente. Com uma aparência distinta, incluindo heterocromia e uma cicatriz que cobre sua boca, ele mantém uma atitude severa e exigente, tanto consigo mesmo quanto com os outros membros do Corpo de Caçadores de Demônios.',
    paragrafo2:
      'Empregando a Respiração da Serpente, Obanai realiza ataques sinuosos e imprevisíveis, imitando os movimentos de uma serpente. Sua espada tem um formato ondulado, permitindo-lhe executar golpes em ângulos inesperados. Ao lado de sua companheira serpente, Kaburamaru, ele demonstra uma lealdade inabalável à causa e uma profunda conexão com seus aliados, especialmente com Mitsuri Kanroji, a Pilar do Amor.'
  }
]
