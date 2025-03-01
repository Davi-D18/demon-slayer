// Luas superiores

import KokushiboFundo from '@public/onis/kokushibo/kokushibo-fundo.png'
import Kokushibo from '@public/onis/kokushibo/kokushibo.png'

import DomaFundo from '@public/onis/doma/doma-fundo.png'
import Doma from '@public/onis/doma/doma.png'

import AkazaFundo from '@public/onis/akaza/akaza-fundo.png'
import Akaza from '@public/onis/akaza/akaza.png'

import HantenguFundo from '@public/onis/hantengu/hantengu-fundo.png'
import Hantengu from '@public/onis/hantengu/hantengu.png'

import GyokkoFundo from '@public/onis/gyokko/gyokko-fundo.png'
import Gyokko from '@public/onis/gyokko/gyokko.png'

import DakiDetalhes from '@public/onis/daki/daki-detalhes.webp'
import DakiFundo from '@public/onis/daki/daki-fundo.png'
import Daki from '@public/onis/daki/daki.png'

import GyutaroFundo from '@public/onis/gyutaro/gyutaro-fundo.png'
import Gyutaro from '@public/onis/gyutaro/gyutaro.png'

import NakimeFundo from '@public/onis/nakime/nakime-fundo.png'
import Nakime from '@public/onis/nakime/nakime.png'

import KaigakuFundo from '@public/onis/kaigaku/kaigaku-fundo.png'
import Kaigaku from '@public/onis/kaigaku/kaigaku.png'

// Luas inferiores

import EnmuFundo from '@public/onis/enmu/enmu-fundo.png'
import Enmu from '@public/onis/enmu/enmu.png'

import RokuroFundo from '@public/onis/rokuro/rokuro-fundo.png'
import Rokuro from '@public/onis/rokuro/rokuro.png'

import WakurabaFundo from '@public/onis/wakuraba/wakuraba-fundo.png'
import Wakuraba from '@public/onis/wakuraba/wakuraba.png'

import MukagoFundo from '@public/onis/mukago/mukago-fundo.png'
import Mukago from '@public/onis/mukago/mukago.png'

import RuiFundo from '@public/onis/rui/rui-fundo.png'
import Rui from '@public/onis/rui/rui.png'

import KamanueFundo from '@public/onis/kamanue/kamanue-fundo.png'
import Kamanue from '@public/onis/kamanue/kamanue.png'

import KyogaiFundo from '@public/onis/kyogai/kyogai-fundo.png'
import Kyogai from '@public/onis/kyogai/kyogai.png'

export const Onis = [
  {
    id: 14,
    nome: 'Kokushibo',
    galeria: [Kokushibo, KokushiboFundo],
    classes: ['fundo_kokushibo', 'kokushibo_detalhes'],
    kekkijutsu: ['respiracao_da_lua', 'Golpes Lunares Crescentes'],
    paragrafo1:
      'Único sobrevivente dos primeiros caçadores de demônios, Kokushibo foi um espadachim lendário que trocou a humanidade pela imortalidade. Como Lua Superior 1, carrega a contradição de odiar seu irmão Yoriichi enquanto imita suas técnicas, simbolizando sua eterna busca por superioridade.',
    paragrafo2:
      'Seus Golpes Lunares Crescentes projeta lâminas de energia em forma de lua que cortam à distância. Cada ataque abre fendas dimensionais que ignoram defesas físicas, combinando séculos de técnica samurai com poder demoníaco.'
  },
  {
    id: 15,
    nome: 'Doma',
    galeria: [Doma, DomaFundo],
    classes: ['fundo_doma', 'doma_detalhes'],
    kekkijutsu: [
      'criocionese_das_ondas_gelidas',
      'Criocinese das Ondas Gélidas'
    ],
    paragrafo1:
      'Ex-líder de um culto religioso, Doma Lua Superior 2, vê o canibalismo como "salvação", convertendo devotos em esculturas de gelo. Sua empatia falsa esconde incapacidade de entender emoções humanas, tratando até o Lua Superior 1 com desprezo casual.',
    paragrafo2:
      'A Criocinese das Ondas Gélidas congela o vapor do ar em estruturas complexas. Gelo venenoso invade corpos pelo sistema respiratório, enquanto clones cristalinos replicam seus movimentos em sincronia perfeita.',
    rank: 'Superior 2'
  },
  {
    id: 16,
    nome: 'Akaza',
    galeria: [Akaza, AkazaFundo],
    classes: ['fundo_akaza', 'akaza_detalhes'],
    kekkijutsu: ['morte_destrutiva', 'Morte Destrutiva: Agulha da Bússola'],
    paragrafo1:
      'Ex-lutador que perdeu família e mestre para a injustiça, Akaza rejeitou a morte para buscar força absoluta. Como Lua Superior 3, desafia Hashiras promissores, vendo sua recusa em se tornar demônios como fraqueza.',
    paragrafo2:
      'Seu kekkijutsu Morte Destrutiva detecta pulsos vitais, guiando ataques que desviam de bloqueios. Seus punhos liberam explosões concussivas capazes de esmagar crânios de Hashiras mesmo sem contato direto.',
    rank: 'Superior 3'
  },
  {
    id: 17,
    nome: 'Hantengu',
    galeria: [Hantengu, HantenguFundo],
    classes: ['fundo_hantengu', 'hantengu_detalhes'],
    kekkijutsu: [
      'manifestacao_das_quatro_mascaras_emocionais',
      'Manifestação das Quatro Máscaras Emocionais'
    ],
    paragrafo1:
      'Criminoso humano que sempre negou culpa, Hantengu Lua superior 4 personifica a negação patológica. Sua transformação em demônio fragmentou sua consciência em emoções autônomas que carregam seu medo central.',
    paragrafo2:
      'Cada clone da Manifestação das Quatro Máscaras Emocionais possui habilidades únicas: Ódio gera raios, Alegria ataca com ondas sonoras de sua boca, Tristeza usa uma lança, e Prazer ataca com rajadas de ventos. O corpo real se esconde em dimensões paralelas.',
    rank: 'Superior 4'
  },
  {
    id: 18,
    nome: 'Gyokko',
    galeria: [Gyokko, GyokkoFundo],
    classes: ['fundo_gyokko', 'gyokko_detalhes'],
    kekkijutsu: ['ceramina_viva', 'Cerâmica Viva: Transmutação Corpórea'],
    paragrafo1:
      'Ex-artesão humano obcecado por perfeição, Gyokko Lua superior 5 reinterpreta "arte" como fusão de corpos vivos com cerâmica. Despreza Hashiras por não entenderem sua "evolução estética" através da transmutação.',
    paragrafo2:
      'A Transmutação Corpórea permite fundir-se com água para criar armaduras de madrepérola e tentáculos com espinhos tóxicos. Vasos cerâmicos sob seu controle explodem liberando ácido digestivo.',
    rank: 'Superior 5'
  },
  {
    id: 19,
    nome: 'Daki',
    galeria: [Daki, DakiFundo, DakiDetalhes],
    classes: ['fundo_daki', 'daki_detalhes'],
    kekkijutsu: ['manipulacao_da_faixa_obi', 'Manipulação da Faixa Obi'],
    paragrafo1:
      'Daki Lua superior 6 com seu irmão Gyutaro, usa beleza como arma para atrair vítimas. Sua vaidade mascara insegurança, dependendo do irmão para ataques decisivos durante combates.',
    paragrafo2:
      'As faixas da Manipulação da Faixa Obi armazenam almas consumidas que vigiam 360°. Tecido demoníaco corta aço e se regenera indefinidamente, podendo envolver prédios inteiros como armadilhas.',
    rank: 'Superior 6'
  },
  {
    id: 20,
    nome: 'Gyutaro',
    galeria: [Gyutaro, GyutaroFundo],
    classes: ['fundo_gyutaro', 'gyutaro_detalhes'],
    kekkijutsu: [
      'manipulacao_de_sangue_venenoso',
      'Manipulação de Sangue Venenoso'
    ],
    paragrafo1:
      'Marginalizado desde o nascimento por deformidades, Gyutaro Lua superior 6 com sua irmã Daki, odeia a sociedade que o rejeitou. Protege Daki obsessivamente, vendo nela a única aceitação que já experimentou em 200 anos.',
    paragrafo2:
      'O Sangue Venenoso de Gyutaro se manifesta em foices afiadas e mortais, manipuladas livremente para ataques rápidos e precisos. Essas lâminas são revestidas com um veneno letal que enfraquece até mesmo Hashiras treinados, paralisando e corroendo seus corpos.',
    rank: 'Superior 6'
  },
  {
    id: 21,
    nome: 'Kaigaku',
    galeria: [Kaigaku, KaigakuFundo],
    classes: ['fundo_kaigaku', 'kaigaku_detalhes'],
    kekkijutsu: [
      'eletrocinese_do_trovao_celestial',
      'Eletrocinese do Trovão Celestial'
    ],
    paragrafo1:
      'Kaigaku, ex-discípulo do Pilar do Trovão Jigoro Kuwajima, se tornou um demônio após trair seus amigos e seu mestre. Consumido pela inveja de Zenitsu e pela ambição de poder, ele aceitou o sangue de Kokusshibo para se transformar em um Oni e ascender à posição de Lua Superior 6.',
    paragrafo2:
      'A Eletrocinese do Trovão Celestial permite que Kaigaku dispare raios negros que queimam nervos e músculos, causando dor intensa. Seus ataques são rápidos e devastadores.',
    rank: 'Substituto Superior 6'
  },
  {
    id: 22,
    nome: 'Nakime',
    galeria: [Nakime, NakimeFundo],
    classes: ['fundo_nakime', 'nakime_detalhes'],
    kekkijutsu: [
      'dimensao_do_castelo_infinito',
      'Dimensão do Castelo Infinito'
    ],
    paragrafo1:
      'Ex-musicista de rua fracassada, Nakime ganhou propósito ao reconstruir realidades para Muzan. Controla a Fortaleza Dimensional sem lealdade genuína, apenas por obsessão em "aperfeiçoar" seu mundo.',
    paragrafo2:
      'Cada nota da biwa na Dimensão do Castelo Infinito altera gravidade, conecta salas distantes ou cria abismos.Ela foi promovida a Lua Superior 4 após a morte de Hantengu, tornando-se uma peça-chave nas estratégias de Muzan Kibutsuji.(Rei dos Onis)',
    rank: 'Substituto Superior 4'
  },
  {
    id: 23,
    nome: 'Enmu',
    galeria: [Enmu, EnmuFundo],
    classes: ['fundo_enmu', 'enmu_detalhes'],
    kekkijutsu: ['manipulacao_dos_sonhos', 'Manipulação dos Sonhos'],
    paragrafo1:
      'Ex-experimento de Muzan com demônios subordinados, Enmu acredita que sonhos são a "verdadeira realidade". Manipula vítimas com falsa gentileza, considerando sua morte durante o sono como "ato de caridade.',
    paragrafo2:
      'No kekkijutsu Manipulação dos Sonhos, as vítimas adormecem instantaneamente, enfrentando pesadelos que drenam energia vital enquanto corpos ficam vulneráveis. Para sair do sonho, a pessoa deve se matar no sonho.',
    rank: 'Inferior 1'
  },
  {
    id: 24,
    nome: 'Rokuro',
    galeria: [Rokuro, RokuroFundo],
    classes: ['fundo_rokuro', 'rokuro_detalhes'],
    kekkijutsu: ['impacto_cinetico', 'Impacto Cinético'],
    paragrafo1:
      'Ex-soldado humano e Lua inferior 2, via demônios como meio de ascensão social, Rokuro falhou em impressionar Muzan. Sua agressividade caótica reflete frustração por nunca ser reconhecido como especial.',
    paragrafo2:
      'O Impacto Cinético armazena energia cinética em seus músculos, liberando-a em explosões direcionadas. Quanto maior a distância percorrida em um ataque, mais destrutivo se torna o impacto final.',
    rank: 'Inferior 2'
  },
  {
    id: 25,
    nome: 'Wakuraba',
    galeria: [Wakuraba, WakurabaFundo],
    classes: ['fundo_wakuraba', 'wakuraba_detalhes'],
    kekkijutsu: ['velocidade_extrema', 'Velocidade Extrema'],
    paragrafo1:
      'Assassino de aluguel humano que se tornou demônio para escapar da justiça, sendo Lua inferior 3. Mantém táticas covardes mesmo após transformação, atacando apenas alvos feridos ou distraídos para garantir vantagem.',
    paragrafo2:
      'Na Velocidade Extrema, distorce a percepção temporal criando após-imagens. Movimentos ultrarrápidos geram ventos cortantes secundários, enquanto sua verdadeira posição fica oculta.',
    rank: 'Inferior 3'
  },
  {
    id: 26,
    nome: 'Mukago',
    galeria: [Mukago, MukagoFundo],
    classes: ['fundo_mukago', 'mukago_detalhes'],
    kekkijutsu: ['evasao_sombria', 'Evasão Sombría'],
    paragrafo1:
      'Camponesa transformada em demônio por acidente sendo Lua inferior 4, Mukago nunca aceitou sua nova natureza. Evita combates para preservar resquícios de humanidade, estratégia que a levou à execução por Muzan.',
    paragrafo2:
      'A Evasão Sombria projeta hologramas que replicam seu cheiro e calor corporal. Névoas espessas encobrem movimentos, enquanto armadilhas ilusórias desviam ataques para direções erradas.',
    rank: 'Inferior 4'
  },
  {
    id: 27,
    nome: 'Rui',
    galeria: [Rui, RuiFundo],
    classes: ['fundo_rui', 'rui_detalhes'],
    kekkijutsu: ['manipulacao_de_fios', 'Manipulação de Fios'],
    paragrafo1:
      'Criança doente transformada em demônio por Muzan se tornando Lua inferior 5, Rui busca em sua "família" artificial o amor que nunca recebeu. Controla subordinados através de fios implantados em seus cérebros, simulando afeto.',
    paragrafo2:
      'Os fios da Manipulação dos Fios cortam moléculas individualmente, ignorando dureza de materiais. Tecelagem complexa cria redes que detectam vibrações, alertando sobre movimentos inimigos.',
    rank: 'Inferior 5'
  },
  {
    id: 28,
    nome: 'Kamanue',
    galeria: [Kamanue, KamanueFundo],
    classes: ['fundo_kamanue', 'kamanue_detalhes'],
    kekkijutsu: ['potencia_amplificada', 'Potência Amplificada'],
    paragrafo1:
      'Ex-ladrão transformado por acaso durante ataque demoníaco, Kamanue Lua inferior 6 via sua posição como direito de nascença. Arrogância e falta de tática o tornaram descartável para Muzan, sendo eliminado rapidamente.',
    paragrafo2:
      'A Potência Amplificada multiplica força física exponencialmente, custando massa óssea. Cada soco causa fraturas em seus próprios ossos, exigindo regeneração constante durante combates.',
    rank: 'Inferior 6'
  },
  {
    id: 29,
    nome: 'Kyogai',
    galeria: [Kyogai, KyogaiFundo],
    classes: ['fundo_kyogai', 'kyogai_detalhes'],
    kekkijutsu: ['manipulacao_dos_tambores', 'Manipulação dos Tambores'],
    paragrafo1:
      'Ex-escritor rejeitado que usava tambores para ritmar poesias, Kyogai buscou em Muzan reconhecimento. Sua degradação à Lua Inferior alimentou ódio contra humanos, expresso em batalhas caóticas.',
    paragrafo2:
      'Após falhar repetidamente, foi expulso das Doze Luas por Muzan. Os tambores da Manipulação dos Tambores rotacionam ambientes em 90° a cada batida. Inversões gravitacionais e paredes móveis transformam combates em quebra-cabeças tridimensionais letais.',
    rank: 'Antigo Inferior 6'
  }
]
