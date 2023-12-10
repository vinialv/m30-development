import { useEffect, useState } from 'react'

import M_SVG from '../M_SVG'
import Arquitetura30SVG from '../Arquitetura30SVG'

import * as S from 'components/LogoAnimation/styles'

export function LogoAnimation() {
  const [logoColor, setLogoColor] = useState(false)

  const numberElements = 9
  const elementsArray = Array.from({ length: numberElements }).map(
    (item, index) => (
      <M_SVG
        key={index}
        fill={logoColor ? '#fff' : 'none'}
        stroke={'#fff'}
        strokeWidth={'5'}
      />
    )
  )

  useEffect(() => {
    const tempoInicial = new Date().getTime()

    const changeM_Color = setTimeout(() => {
      setLogoColor(true)
    }, 3250)

    return () => {
      const tempoFinal = new Date().getTime()
      const tempoTotal = tempoFinal - tempoInicial

      const tempoRestante = Math.max(0, 3250 - tempoTotal)

      clearTimeout(changeM_Color)
      setTimeout(() => {
        setLogoColor(true)
      }, tempoRestante)
    }
  }, [])

  return (
    <S.Container>
      {elementsArray}
      <Arquitetura30SVG />
    </S.Container>
  )
}
