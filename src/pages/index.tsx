import Link from 'next/link'
import * as S from '@/styles'
import M30SVG from '../components/M30SVG'
import { useEffect, useState } from 'react'
import { LogoAnimation } from '@/components/LogoAnimation'
import { WhatsappLogo, InstagramLogo, EnvelopeSimple } from 'phosphor-react'

export default function Index() {
  const [splashScreen, setSplashScreen] = useState(true)

  useEffect(() => {
    const timeoutIdInicial = setTimeout(() => {
      setSplashScreen(false)
    }, 4000)
    return () => {
      clearTimeout(timeoutIdInicial)
    }
  }, [])

  return (
    <S.Home splashScreen={splashScreen}>
      <S.Background />
      {splashScreen && <LogoAnimation />}
      <header>
        <M30SVG fill={'white'} />
      </header>
      <main>Nosso site está em desenvolvimento.</main>
      <footer>
        <p>Entre em contato conosco!</p>
        <nav className="Contatos">
          <Link href="https://wa.me/5516982149970" target="_blank">
            <WhatsappLogo size={32} weight="thin" />
          </Link>
          <Link href="https://www.instagram.com/m30.arq/" target="_blank">
            <InstagramLogo size={32} weight="thin" />
          </Link>
          <Link href="mailto:muriloalves@m30.arq.br" target="_blank">
            <EnvelopeSimple size={32} weight="thin" />
          </Link>
        </nav>
      </footer>
    </S.Home>
  )
}
