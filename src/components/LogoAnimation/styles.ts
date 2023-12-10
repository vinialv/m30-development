import styled, { css, keyframes } from 'styled-components'

type LogoProps = {
  startAnimation: boolean
}

const elementHeight = '100px'

const showContainer = keyframes`
  to {
    visibility: visible;
  }
`

export const Container = styled.div<LogoProps>`
  display: grid;
  margin-bottom: 16px;
  visibility: hidden;
  position: relative;
  align-items: center;
  justify-items: center;
  width: calc(3 * ${elementHeight});
  height: calc(3 * ${elementHeight});
  grid-template-columns: repeat(3, 1fr);
  ${(props) =>
    props.startAnimation
      ? css`
          animation: ${showContainer} 0s linear 1.25s forwards;
          -webkit-animation: ${showContainer} 0s linear 1.25s forwards;
        `
      : ''};
`
