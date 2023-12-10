import M_SVG from '../M_SVG'
import { useEffect, useState } from 'react'
import Arquitetura30SVG from '../Arquitetura30SVG'
import * as S from 'components/LogoAnimation/styles'
import { StyleSheetManager } from 'styled-components'

export function LogoAnimation() {
  const [logoColor, setLogoColor] = useState(false)
  const [startAnimation, setStartAnimation] = useState(true)

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
    const changeM_Color = setTimeout(() => {
      setLogoColor(true)
    }, 3250)

    return () => {
      clearTimeout(changeM_Color)
    }
  }, [])

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'startAnimation'}>
      <S.Container startAnimation={startAnimation}>
        {elementsArray}
        <Arquitetura30SVG />
      </S.Container>
    </StyleSheetManager>
  )
}
