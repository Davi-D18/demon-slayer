import S from './style/personagemDetalhes.module.scss'

import { useParams } from 'react-router-dom'

import { Header } from '@c/Header/Header'

import { hashiras } from '@src/data/hashiras.js'
import { Onis } from '@src/data/onis.js'
import { personagens } from '@src/data/personagens.js'

import { PersonagemNaoEncontrado } from '@c/PersonagemNaoEncontrado/PersonagemNaoEncontrado'

export const PersonagemDetalhes = () => {
  const { id } = useParams() // Obtém o ID da URL
  const dados = id > 4 && id < 14 ? hashiras : id > 13 ? Onis : personagens
  const personagem = dados.find((personagem) => personagem.id == id)

  const respiracaoOuKekijjutsu = personagem.respiracao1
    ? personagem.respiracao1
    : personagem.kekkijutsu

  if (!personagem) {
    return <PersonagemNaoEncontrado />
  }

  const getTituloRespiracao = (personagem) => {
    if (personagem.nome === 'Nezuko Kamado') return 'Kekkijutsu'
    if (personagem.respiracao2) return 'Estilos de Respirações'
    if (personagem.id > 13) return 'Kekkijutsu'
    return 'Estilo de Respiração'
  }

  return (
    <main className={S.personagem_detalhes + ' ' + S[personagem.classes[1]]}>
      <Header paginaAtual="personagem" />

      <div className={S.container_main}>
        <div className={S.container_main__informacoes}>
          <section className={S.container_main__description}>
            <h1 className={S.title}>{personagem.nome}</h1>
            <p>{personagem.paragrafo1}</p>
            <p>{personagem.paragrafo2}</p>
          </section>

          <section className={S.container_main__respiracoes}>
            <h2>{getTituloRespiracao(personagem)}</h2>

            <div className={S.respiracoes__items_container}>
              <div
                className={`${S.container__item} ${S[respiracaoOuKekijjutsu[0]]}`}
              >
                <p>{respiracaoOuKekijjutsu[1]}</p>
              </div>
              {personagem.respiracao2 && (
                <div
                  className={`${S.container__item} ${S[personagem.respiracao2[0]]}`}
                >
                  <p>{personagem.respiracao2[1]}</p>
                </div>
              )}
            </div>
          </section>
        </div>

        <section className={S.container_main__imagem_personagem}>
          <img
            src={
              personagem.galeria[2]
                ? personagem.galeria[2]
                : personagem.galeria[0]
            }
            alt={`Personagem ${personagem.nome}`}
          />
        </section>
      </div>
    </main>
  )
}
