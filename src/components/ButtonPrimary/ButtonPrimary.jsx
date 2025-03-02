import IconSeta from '@public/icons/seta-direita.png'
import propTypes from 'prop-types'
import S from './style/button.module.scss'

export function ButtonPrimary({ onClick, texto, setaInvertida = false }) {
  return (
    <button
      className={
        S.button_primary + '' + (setaInvertida ? ' ' + S.inverter : '')
      }
      onClick={onClick}
    >
      <p>{texto}</p>
      <img
        src={IconSeta}
        alt="Icone"
        className={setaInvertida ? S.seta_invertida : ''}
      />
    </button>
  )
}

ButtonPrimary.propTypes = {
  texto: propTypes.string.isRequired,
  setaInvertida: propTypes.bool,
  onClick: propTypes.func
}
