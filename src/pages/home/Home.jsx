import S from './style/home.module.scss'

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { ButtonPrimary } from '@c/ButtonPrimary/ButtonPrimary'
import { Header } from '@c/Header/Header'
import { Tooltip } from '@c/Tooltip/Tooltip'

import { hashiras } from '@src/data/hashiras.js'
import { Onis } from '@src/data/onis.js'
import { personagens } from '@src/data/personagens.js'

export const Home = () => {
  const containerRef = useRef(null) // Referência para o container dos cards
  const cardsRef = useRef([])

  const [fadingOut, setFadingOut] = useState(false)
  const [modPersonagem, setModPersonagem] = useState(false)
  const [modOni, setModOni] = useState(false)
  const [animating, setAnimating] = useState(false)

  let personagensSerRenderizado = modOni
    ? Onis
    : modPersonagem
      ? hashiras
      : personagens

  const larguraTela = window.innerWidth

  // Adiciona os elementos à referência
  const setCardRef = (el) => {
    if (el) {
      el.classList.remove(S.visible) // Garante que começa com blur
      if (!cardsRef.current.includes(el)) {
        cardsRef.current.push(el)
      }
    }
  }

  useEffect(() => {
    if (!cardsRef.current.length) return

    const cards = cardsRef.current

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(S.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.7 }
    )

    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [modPersonagem, modOni])

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -250, // Quantidade de pixels para mover
        behavior: 'smooth' // Suaviza a rolagem
      })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 250, // Quantidade de pixels para mover
        behavior: 'smooth' // Suaviza a rolagem
      })
    }
  }

  const handleChange = () => {
    if (animating) return

    setAnimating(true)
    setFadingOut(true)

    setTimeout(() => {
      setModPersonagem((prev) => !prev)
      setFadingOut(false)
      setAnimating(false)
    }, 510)
  }

  const handleToggleOni = () => {
    if (animating) return

    setAnimating(true)
    setFadingOut(true)

    setTimeout(() => {
      setModOni((prev) => !prev)
      setModPersonagem(false)
      setFadingOut(false)
      setAnimating(false)
    }, 510)
  }

  return (
    <main className={S.inicio + ' ' + S[modOni ? 'onis' : 'cacadores']}>
      <Header paginaAtual="inicio" />

      <div className={S.container_main}>
        <div className={S.header_section}>
          <h1
            className={
              modOni
                ? `${S.title} ${S.oni}`
                : modPersonagem
                  ? `${S.title} ${S.hashiras}`
                  : S.title
            }
          >
            {modOni ? (
              <Tooltip booleanOniHashira={true} />
            ) : modPersonagem ? (
              <Tooltip booleanOniHashira={false} />
            ) : (
              ''
            )}

            {modOni ? '12 Kizukis' : modPersonagem ? 'Hashiras' : 'Personagens'}
          </h1>

          <button
            onClick={handleToggleOni}
            className={`
              ${S.button_toggle} 
              ${modOni ? S.oni : S.slayer}
            `}
          >
            {modOni ? 'Caçadores' : 'Onis'}
          </button>
        </div>

        <section
          className={
            modPersonagem
              ? S.container_main__characters_hashiras
              : modOni
                ? S.container_main__onis
                : S.container_main__characters
          }
          ref={containerRef}
        >
          {personagensSerRenderizado.map((personagem) => (
            <Link key={personagem.id} to={`/personagem/${personagem.id}`}>
              <article
                className={`${S[personagem.classes[0]]} ${fadingOut ? S.fade_out : S.fade_in}`}
                ref={setCardRef}
              >
                <h2>{personagem.nome}</h2>
                <div className={S.container_img}>
                  <img
                    src={personagem.galeria[0]}
                    alt={`Personagem ${personagem.nome}`}
                    loading="lazy"
                  />
                </div>
              </article>
            </Link>
          ))}
        </section>

        <section
          className={
            modPersonagem
              ? S.container_buttons + ' ' + S.active
              : S.container_buttons
          }
        >
          <div
            className={S.container_buttons_controles}
            style={{ display: 'flex' }}
          >
            {larguraTela <= 800 || modOni ? (
              <>
                <ButtonPrimary
                  onClick={scrollLeft}
                  texto="Anterior"
                  setaInvertida={true}
                />

                <ButtonPrimary onClick={scrollRight} texto="Próximo" />
              </>
            ) : (
              modPersonagem && (
                <>
                  <ButtonPrimary
                    onClick={scrollLeft}
                    texto="Anterior"
                    setaInvertida={true}
                  />

                  <ButtonPrimary onClick={scrollRight} texto="Próximo" />
                </>
              )
            )}
          </div>

          {!modOni && (
            <div className={S.container_button_hashira}>
              <ButtonPrimary
                onClick={handleChange}
                texto={modPersonagem ? 'Personagens' : 'Hashiras'}
              />
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
