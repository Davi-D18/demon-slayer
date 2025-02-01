import { Header } from '@c/Header/Header'
import iconHashira from '@public/icons/seta-direita.png'
import { personagens } from '@src/data/personagens.js'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { hashiras } from '../../data/hashiras'
import S from './style/home.module.scss'

export const Home = () => {
  const containerRef = useRef(null) // Referência para o container dos cards
  const cardsRef = useRef([])
  const [fadingOut, setFadingOut] = useState(false)
  const [modPersonagem, setModPersonagem] = useState(false)
  const [animating, setAnimating] = useState(false)

  let personagensSerRenderizado = modPersonagem ? hashiras : personagens

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
  }, [modPersonagem])

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

  return (
    <main className={S.inicio}>
      <Header paginaAtual="inicio" />

      <div className={S.container_main}>
        <h1 className={S.title}>
          {modPersonagem ? 'Hashiras' : 'Personagens'}
        </h1>

        <section
          className={
            modPersonagem
              ? S.container_main__characters_hashiras
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
          {larguraTela <= 800 ? (
            <div
              className={S.container_buttons_controles}
              style={{ display: 'flex' }}
            >
              <button onClick={scrollLeft} className={S.button_hashira}>
                <img src={iconHashira} alt="Icone" />
                <p>Anterior</p>
              </button>

              <button onClick={scrollRight} className={S.button_hashira}>
                <p>Próximo</p>
                <img src={iconHashira} alt="Icone" />
              </button>
            </div>
          ) : (
            modPersonagem && (
              <div
                className={S.container_buttons_controles}
                style={{ display: 'flex' }}
              >
                <button onClick={scrollLeft} className={S.button_hashira}>
                  <img src={iconHashira} alt="Icone" />
                  <p>Anterior</p>
                </button>

                <button onClick={scrollRight} className={S.button_hashira}>
                  <p>Próximo</p>
                  <img src={iconHashira} alt="Icone" />
                </button>
              </div>
            )
          )}

          <div className={S.container_button_hashira}>
            <button className={S.button_hashira} onClick={handleChange}>
              <p>{modPersonagem ? 'Personagens' : 'Hashiras'}</p>
              <img src={iconHashira} alt="Icone" />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
