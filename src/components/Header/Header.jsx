import PropTypes from 'prop-types'
import S from './style/header.module.scss'

import EllipseLaranja from '@public/icons/Ellipse.png'
import EllipseVerde from '@public/icons/EllipseVerde.png'
import logo from '@public/logo/logo.png'
import { Link } from 'react-router-dom'

export const Header = ({ paginaAtual }) => {
  return (
    <header>
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
            <div className={S.slayer + ' ' + S.ellipse_laranja}>
              <img src={EllipseLaranja} alt="icon" />
              <p>SLAYER</p>
            </div>
          ) : (
            <div className={S.slayer + ' ' + S.ellipse_verde}>
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
