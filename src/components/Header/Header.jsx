import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import S from './style/header.module.scss'

import EllipseLaranja from '@public/icons/Ellipse.png'
import EllipseVerde from '@public/icons/EllipseVerde.png'
import logo from '@public/logo/logo.png'

import audio from '@src/audio/music-demon-slayer.mp3'

export const Header = ({ paginaAtual }) => {
  const audioRef = useRef(null)
  const mensagem = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [mensagemExibida, setMensagemExibida] = useState(false)

  let click = 0
  const handlePlayAudio = () => {
    click++

    if (click == 2) {
      if (audioRef.current) {
        // Volta ao início do áudio
        audioRef.current.currentTime = 0
        audioRef.current.loop = true

        exibirMensagem()

        // Inicia o áudio
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const exibirMensagem = () => {
    if (!mensagemExibida && mensagem.current) {
      mensagem.current.style.display = 'flex'
      mensagem.current.classList.remove([S.sumir])

      setTimeout(() => {
        mensagem.current.classList.add([S.sumir])
      }, 3500)

      setTimeout(() => {
        if (mensagem.current) {
          mensagem.current.style.display = 'none'
        }
      }, 4000)

      setMensagemExibida(true) // Marca que a mensagem já foi exibida
    }
  }

  return (
    <header>
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mp3" />
      </audio>

      <div className={S.mensagem} ref={mensagem}>
        <p>Parabéns, você descobriu um Easter egg</p>
        <img
          src="https://i.pinimg.com/236x/3b/6c/2a/3b6c2a4460e1a74ddc1c12be9eb745ae.jpg"
          alt="Icone"
        />
      </div>

      <div className={S.container_header}>
        <div className={S.container_header__logo}>
          <img src={logo} alt="logo" />
        </div>

        <section className={S.container_header__menu}>
          <ul>
            <li>
              <Link className={paginaAtual === 'inicio' ? S.active : ''} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={paginaAtual === 'temporadas' ? S.active : ''}
                to="/emBreve"
              >
                Temporadas
              </Link>
            </li>
            {paginaAtual === 'personagem' ? (
              <li className={S.verde}>Detalhes</li>
            ) : (
              ''
            )}
          </ul>
        </section>

        <div className={S.container_header__slayer}>
          {paginaAtual === 'inicio' ? (
            <div
              className={S.slayer + ' ' + S.ellipse_laranja}
              onClick={isPlaying ? handlePauseAudio : handlePlayAudio}
            >
              <img src={EllipseLaranja} alt="icon" />
              <p>SLAYER</p>
            </div>
          ) : (
            <div
              className={S.slayer + ' ' + S.ellipse_verde}
              onClick={isPlaying ? handlePauseAudio : handlePlayAudio}
            >
              <img src={EllipseVerde} alt="icon" />
              <p>SLAYER</p>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  paginaAtual: PropTypes.string
}
