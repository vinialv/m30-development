import { useEffect, useState } from 'react'

import M_SVG from '../M_SVG'
import Arquitetura30SVG from '../Arquitetura30SVG'

import * as S from 'components/LogoAnimation/styles'

export function LogoAnimation() {
  const [logoColor, setLogoColor] = useState('none')

  const numberElements = 9
  const elementsArray = Array.from({ length: numberElements }).map(
    (item, index) => (
      <M_SVG key={index} fill={logoColor} stroke={'#fff'} strokeWidth={'5'}/>
    )
  )

  useEffect(() => {
    const changeM_Color = setTimeout(() => {
      setLogoColor('#fff')
    }, 3250)

    return () => {
      clearTimeout(changeM_Color)
    }
  }, [])

  return (
    <S.Container>
      {elementsArray}
      <Arquitetura30SVG />
    </S.Container>
  )
}
