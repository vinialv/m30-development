import Link from 'next/link'
import Image from 'next/image'
import * as S from '@/styles/teste'
import { WhatsappLogo, InstagramLogo, EnvelopeSimple } from 'phosphor-react'

export default function Teste() {
  return (
    <S.Home>
      <header>
        <Image
          src={`/m30-black.png`}
          width={170.11}
          height={81.9}
          quality={100}
          alt="Logo da empresa M30 Arquitetura"
        />
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
