import S from './style/personagemNaoEncontrado.module.scss'

import { Link } from 'react-router-dom'

import EllipseVermelha from '@public/icons/EllipseVermelha.png'

export const PersonagemNaoEncontrado = () => {
  return (
    <main className={S.nao_encontrado_container}>
      <img src={EllipseVermelha} alt="Icone" />
      <h1 className={S.titulo}>Personagem não encontrado</h1>
      <p className={S.mensagem}>
        O personagem que você está procurando não existe ou não está disponível.
      </p>
      <Link to="/" className={S.botao_voltar}>
        Voltar para a página inicial
      </Link>
    </main>
  )
}
