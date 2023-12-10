import Link from 'next/link'
import * as S from '@/styles'
import M30SVG from '../components/M30SVG'
import { useEffect, useState } from 'react'
import { StyleSheetManager } from 'styled-components'
import { LogoAnimation } from '@/components/LogoAnimation'
import { WhatsappLogo, InstagramLogo, EnvelopeSimple } from 'phosphor-react'

export default function Index() {
  const [splashScreen, setSplashScreen] = useState(true)
  const [ariaLiveMessage, setAriaLiveMessage] = useState('')

  useEffect(() => {
    const timeoutIdInicial = setTimeout(() => {
      setSplashScreen(false)
    }, 4000)

    return () => {
      clearTimeout(timeoutIdInicial)
    }
  }, [])

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'splashScreen'}>
      <S.Home splashScreen={splashScreen} aria-live="polite">
        <S.Background />
        {splashScreen && <LogoAnimation />}
        <header tabIndex={1}>
          <M30SVG
            fill={'white'}
            alt={'Imagem da logotipo da empresa M30 Arquitetura'}
          />
        </header>
        <main tabIndex={2} aria-label="Mensagem informativa que o site está em desenvolvimento">
          Nosso site está em desenvolvimento.
        </main>
        <footer>
          <p tabIndex={3} aria-label="Meios de contato com a empresa M30 Arquitetura">
            Entre em contato conosco!
          </p>
          <nav className="Contatos">
            <Link
              href="https://wa.me/5516982149970"
              target="_blank"
              aria-label="Link para WhatsApp"
              tabIndex={4}
            >
              <WhatsappLogo size={32} weight="thin" />
            </Link>
            <Link
              href="https://www.instagram.com/m30.arq/"
              target="_blank"
              aria-label="Link para Instagram"
              tabIndex={5}
            >
              <InstagramLogo size={32} weight="thin" />
            </Link>
            <Link
              href="mailto:muriloalves@m30.arq.br"
              target="_blank"
              aria-label="Link para e-mail"
              tabIndex={6}
            >
              <EnvelopeSimple size={32} weight="thin" />
            </Link>
          </nav>
        </footer>
      </S.Home>
    </StyleSheetManager>
  )
}
