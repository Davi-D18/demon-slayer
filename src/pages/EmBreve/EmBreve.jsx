import { Link } from 'react-router-dom'
import S from './style/emBreve.module.scss'

export const EmBreve = () => {
  return (
    <main className={S.container}>
      <h1 className={S.title}>🚧 Em Breve 🚧</h1>
      <p className={S.description}>
        Essa página ainda está em desenvolvimento e será adicionado em breve. :)
      </p>
      <Link to="/" className={S.button}>
        Voltar para a página inicial
      </Link>
    </main>
  )
}
