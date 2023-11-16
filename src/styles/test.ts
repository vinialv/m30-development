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

// Animação para alinhar o "M" para entrar o "30" e ambos ficarem alinhado ao centro
const alignLogo = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(0.44 * -${parseInt(elementHeight)}px));
  }
`
const hideM = keyframes`
  to {
    visibility: hidden;
  }
`
const showContainer = keyframes`
  to {
    visibility: visible;
  }
`
const show30arquitetura = keyframes`
  to {
    visibility: visible;
  }
`

// Alteração de cores
const changeBackground = keyframes`
  to {
    clip-path: inset(0% 0 0 0);
  }
`
const changeColor = keyframes`
  to {
    fill: #F3F3F3;
  }
`
const changeLogoColor = keyframes`
  to {
    fill: #1D1D1F;
    stroke: #1D1D1F;
  }
`

const moveUpLogo = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-40dvh));
  }
`
const showSocials = keyframes`
  to {
    visibility: visible;
  }
`

export const Container = styled.div`
  display: grid;
  visibility: hidden;
  animation:
    ${showContainer} 0s linear 1.25s forwards,
    ${moveUpLogo} 1s cubic-bezier(0.77, 0, 0.175, 1) 4.15s forwards;
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
    animation:
      ${changeColor} 0s forwards 3.25s,
      ${changeLogoColor} 0.2s linear 4.25s forwards;
  }

  &:nth-child(1) {
    transform: rotate(-135deg);
    animation:
      ${rotate03} 1.25s linear 1.25s,
      ${moveRightDown} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(2) {
    transform: rotate(135deg);
    animation:
      ${rotate01} 1.25s linear 1.25s,
      ${moveDown} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(3) {
    transform: rotate(-135deg);
    animation:
      ${rotate03} 1.25s linear 1.25s,
      ${moveLeftDown} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(4) {
    transform: rotate(-90deg);
    animation:
      ${rotate02} 1.25s linear 1.25s,
      ${moveRight} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(5) {
    animation: ${alignLogo} 0.75s linear 3.25s forwards;
  }
  &:nth-child(6) {
    transform: rotate(-90deg);
    animation:
      ${rotate02} 1.25s linear 1.25s,
      ${moveLeft} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(7) {
    transform: rotate(-135deg);
    animation:
      ${rotate03} 1.25s linear 1.25s,
      ${moveRightUp} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(8) {
    transform: rotate(135deg);
    animation:
      ${rotate01} 1.25s linear 1.25s,
      ${moveUp} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
  &:nth-child(9) {
    transform: rotate(-135deg);
    animation:
      ${rotate03} 1.25s linear 1.25s,
      ${moveLeftUp} 0.8s ease-in 2.5s forwards,
      ${hideM} 0s linear 3.25s forwards;
  }
`

export const Arquitetura30 = styled.svg`
  right: 22%;
  top: 39.25%;
  position: absolute;
  visibility: hidden;
  height: calc(0.819 * ${elementHeight});
  animation: ${show30arquitetura} 0s linear 3.25s forwards;

  path {
    animation: ${changeLogoColor} 0.2s linear 4.25s forwards;
  }
`

export const Home = styled.section`
  width: 100vw;
  display: flex;
  height: 100dvh;
  color: #f3f3f3;
  background: #1d1d1f;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Msg = styled.p`
  width: 100%;
  height: 30px;
  color: #1d1d1f;
  font-size: 18px;
  font-weight: 300;
  visibility: hidden;
  position: absolute;
  text-align: center;
  top: calc(50% - 15px);
  animation: ${showSocials} 0s linear 4.5s forwards;
`

export const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  visibility: hidden;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: ${showSocials} 0s linear 4.25s forwards;
`

export const Socials = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: row;
  
  a svg{
    display: flex;
    color: #1d1d1f;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
`

export const Span = styled.span`
  color: #1d1d1f;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 8px;
`

export const Brackground = styled.div`
  animation: ${changeBackground} 1s cubic-bezier(0.77, 0, 0.175, 1) 4s forwards;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  clip-path: inset(100% 0 0 0);
`
