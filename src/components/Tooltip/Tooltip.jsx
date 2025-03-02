import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import S from './style/tooltip.module.scss'

export const Tooltip = ({ booleanOniHashira }) => {
  const textosParaSerUsado = {
    oni: 'Os Kizukis são os demônios mais poderosos servindo a Muzan Kibutsuji',
    hashira:
      'Hashiras são os espadachins de elite do Corpo de Caçadores de Demônios'
  }

  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef(null)

  // Se o tooltip estiver ativo, remove-o automaticamente após 3 segundos.
  useEffect(() => {
    if (isActive) {
      timerRef.current = setTimeout(() => {
        setIsActive(false)
      }, 4000)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isActive])

  // Ativa o tooltip (para mobile via clique e para desktop via hover)
  function handleTooltip() {
    setIsActive(true)
  }

  // Em desktop, ao tirar o mouse do ícone, desativa o tooltip imediatamente.
  function handleMouseLeave() {
    setIsActive(false)
  }

  return (
    <div className={S.tooltip_container}>
      <div
        className={S.icon}
        onClick={handleTooltip}
        onMouseEnter={handleTooltip}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={50}
          height={50}
          className={isActive ? S.active : ''}
        >
          <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.518 0-10-4.482-10-10s4.482-10 10-10 10 4.482 10 10-4.482 10-10 10zm-1-16h2v6h-2zm0 8h2v2h-2z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className={`${S.tooltip} ${isActive ? S.active : ''}`}>
        <p>
          {booleanOniHashira
            ? textosParaSerUsado.oni
            : textosParaSerUsado.hashira}
        </p>
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  booleanOniHashira: PropTypes.bool.isRequired
}
