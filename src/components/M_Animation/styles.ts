import styled, { keyframes } from 'styled-components'

const elementHeight = '100px'

// Animações para rotação do elemento
const rotate01 = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const rotate02 = keyframes`
  to {
    transform: rotate(360deg)
  }
`
const rotate03 = keyframes`
  to {
    transform: rotate(-360deg);
  }
`

// Animações para movimentar o elemento ao centro da GRID
const moveRightDown = keyframes`
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(${elementHeight}) translateY(${elementHeight});
  }
`
const moveRightUp = keyframes`
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(${elementHeight}) translateY(-${elementHeight});
  }
`
const moveRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(${elementHeight});
  }
`
const moveLeftDown = keyframes`
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(-${elementHeight}) translateY(${elementHeight});
  }
`
const moveLeftUp = keyframes`
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(-${elementHeight}) translateY(-${elementHeight});
  }
`
const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${elementHeight});
  }
`
const moveDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(${elementHeight});
  }
`
const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-${elementHeight});
  }
`

// Animação para o M ir a esquerda para se alinhar com o "30 Arquitetura"
const alignLogo = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(0.44 * -${parseInt(elementHeight)}px));
  }
`

// Ocultar 8 M e deixar apenas o 5º visivel
const hideM = keyframes`
  to {
    visibility: hidden;
  }
`

// Pintar o M com a mesma cor do stroke ao final da animação de unir os "M"
const changeColor = keyframes`
  to {
    fill: #fff;
  }
`

export const Container = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  justify-items: center;
  width: calc(3 * ${elementHeight});
  height: calc(3 * ${elementHeight});
  grid-template-columns: repeat(3, 1fr);
`

export const Items = styled.svg`
  height: calc(0.65 * ${elementHeight});

  path {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      -webkit-animation:
        ${changeColor} 0s forwards 3.25s
    }
  }
  &:nth-child(1) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(-135deg);
      -webkit-animation:
        ${rotate03} 1.25s linear 1.25s,
        ${moveRightDown} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(2) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(135deg);
      -webkit-animation:
        ${rotate01} 1.25s linear 1.25s,
        ${moveDown} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(3) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(-135deg);
      -webkit-animation:
        ${rotate03} 1.25s linear 1.25s,
        ${moveLeftDown} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(4) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(-90deg);
      -webkit-animation:
        ${rotate02} 1.25s linear 1.25s,
        ${moveRight} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(5) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      -webkit-animation: ${alignLogo} 0.75s linear 3.25s forwards;
    }
  }
  &:nth-child(6) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(-90deg);
      -webkit-animation:
        ${rotate02} 1.25s linear 1.25s,
        ${moveLeft} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(7) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(-135deg);
      -webkit-animation:
        ${rotate03} 1.25s linear 1.25s,
        ${moveRightUp} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(8) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(135deg);
      -webkit-animation:
        ${rotate01} 1.25s linear 1.25s,
        ${moveUp} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
  &:nth-child(9) {
    @media all and (-webkit-min-device-pixel-ratio: 0) {
      transform: rotate(-135deg);
      -webkit-animation:
        ${rotate03} 1.25s linear 1.25s,
        ${moveLeftUp} 0.8s ease-in 2.5s forwards,
        ${hideM} 0s linear 3.25s forwards;
    }
  }
`