import styled, { keyframes } from 'styled-components'

const showContent = keyframes`
  to {
    visibility: visible;
  }
`

const moveUpLogo = keyframes`
  to {
    top: 32px;
  }
`

const changeLogoColor = keyframes`
  to {
    fill: #1d1d1f;
  }
`

export const Home = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  position: relative;
  background: #1d1d1f;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  header {
    margin-top: 35px;
  }

  header svg {
    position: absolute;
    visibility: hidden;
    top: calc(50% - 40.945px);
    right: calc(50% - 85.055px);
    animation:
      ${showContent} 0s linear 3.25s forwards,
      ${moveUpLogo} 1s cubic-bezier(0.77, 0, 0.175, 1) 4.35s forwards;
    -webkit-animation:
      ${showContent} 0s linear 3.25s forwards,
      ${moveUpLogo} 1s cubic-bezier(0.77, 0, 0.175, 1) 4.35s forwards;
  }

  header svg path {
    fill: white;
    animation: ${changeLogoColor} 0.15s linear 4.65s forwards;
    -webkit-animation: ${changeLogoColor} 0.15s linear 4.65s forwards;
  }

  main {
    color: #1d1d1f;
    font-size: 22px;
    font-weight: 300;
    visibility: hidden;
    position: relative;
    text-align: center;
    animation: ${showContent} 0s linear 4.75s forwards;
    -webkit-animation: ${showContent} 0s linear 4.75s forwards;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  footer {
    color: #1d1d1f;
    display: flex;
    position: relative;
    visibility: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    animation: ${showContent} 0s linear 4.35s forwards;
    -webkit-animation: ${showContent} 0s linear 4.35s forwards;

    p {
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    nav {
      gap: 16px;
      color: #1d1d1f;
      display: flex;
      margin: 4px 0 16px 0;
      justify-content: center;

      a {
        padding: 8px;
        display: flex;
      }

      a svg {
        color: #1d1d1f;
      }
    }
  }
`

const changeBackground = keyframes`
  to {
    clip-path: inset(0% 0 0 0);
  }
`

export const Brackground = styled.section`
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  clip-path: inset(100% 0 0 0);
  animation: ${changeBackground} 1.5s cubic-bezier(0.77, 0, 0.175, 1) 4s
    forwards;
  -webkit-animation: ${changeBackground} 1.5s cubic-bezier(0.77, 0, 0.175, 1) 4s
    forwards;
`
