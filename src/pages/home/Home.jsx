import { Header } from '@c/Header/Header'
import iconHashira from '@public/icons/seta-direita.png'
import { personagens } from '@src/data/personagens.js'
import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import S from './style/home.module.scss'

export const Home = () => {
  const containerRef = useRef(null) // Referência para o container dos cards
  const cardsRef = useRef([])

  const navigate = useNavigate()

  const redirecionar = () => {
    navigate('/emBreve')
  }

  // Adiciona os elementos à referência
  const setCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  useEffect(() => {
    const cards = cardsRef.current

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(S.visible) // Remove o blur quando o card entrar na tela
            observer.unobserve(entry.target) // Para de observar o card após ele entrar
          }
        })
      },
      { threshold: 0.7 }
    )

    cards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card) // Limpa a observação ao desmontar o componente
      })
    }
  }, [])

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -250, // Ajuste conforme necessário para mover a quantidade certa de cards
        behavior: 'smooth' // Suaviza a rolagem
      })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 250, // Ajuste conforme necessário para mover a quantidade certa de cards
        behavior: 'smooth' // Suaviza a rolagem
      })
    }
  }

  return (
    <main className={S.inicio}>
      <Header paginaAtual="inicio" />

      <div className={S.container_main}>
        <h1 className={S.title}>Personagens</h1>

        <section className={S.container_main__characters} ref={containerRef}>
          {personagens.map((personagem) => (
            <Link key={personagem.id} to={`/personagem/${personagem.id}`}>
              <article className={S[personagem.classes[0]]} ref={setCardRef}>
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

        <section className={S.container_buttons}>
          <div className={S.container_buttons_controles}>
            <button onClick={scrollLeft} className={S.button_hashira}>
              <img src={iconHashira} alt="Icone" />
              <p>Anterior</p>
            </button>

            <button onClick={scrollRight} className={S.button_hashira}>
              <p>Próximo</p>
              <img src={iconHashira} alt="Icone" />
            </button>
          </div>

          <div className={S.container_button_hashira}>
            <button className={S.button_hashira} onClick={redirecionar}>
              <p>Hashiras</p>
              <img src={iconHashira} alt="Icone" />
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
