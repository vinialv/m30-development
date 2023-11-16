import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --white: #FFFFFF;
    --gray: #F3F3F3;
    --dark-gray: #1D1D1F;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Mukta', sans-serif;
  }

  .m {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arq30 {
    bottom: calc(50% - 34.25px);
    left: calc(50% + 2px);
    visibility: hidden;
    position: absolute;
    display: flex;
    width: 100px;
}

.m1,
.m3,
.m7,
.m9 {
  transform: rotate(-135deg);
}

.m2,
.m8 {
  transform: rotate(135deg);
}

.m4,
.m6 {
  transform: rotate(-90deg);
}


.m1 {
  animation: reverseRotate 1.25s linear 0.5s, slideInRightAndBottom 0.8s linear 1.75s forwards, m1Left 0.75s linear 2.55s forwards;
}

.m2 {
  animation: rotate 1.25s linear 0.5s, slideInBottom 0.8s linear 1.75s forwards, m2Left 0.75s linear 2.55s forwards;
}

.m3 {
  animation: reverseRotate 1.25s linear 0.5s, slideInLeftAndBottom 0.8s linear 1.75s forwards, m3Left 0.75s linear 2.55s forwards;
}

.m4 {
  animation: rotate90 1.25s linear 0.5s, slideInRight 0.8s linear 1.75s forwards, m4Left 0.75s linear 2.55s forwards;
}

.m5 {
  animation: m5Left 0.75s linear 2.55s forwards;
}

.m6 {
  animation: rotate90 1.25s linear 0.5s, slideInLeft 0.8s linear 1.75s forwards, m6Left 0.75s linear 2.55s forwards;
}

.m7 {
  animation: reverseRotate 1.25s linear 0.5s, slideInRightAndTop 0.8s linear 1.75s forwards, m7Left 0.75s linear 2.55s forwards;
}

.m8 {
  animation: rotate 1.25s linear 0.5s, slideInTop 0.8s linear 1.75s forwards, m8Left 0.75s linear 2.55s forwards;
}

.m9 {
  animation: reverseRotate 1.25s linear 0.5s, slideInLeftAndTop 0.8s linear 1.75s forwards, m9Left 0.75s linear 2.55s forwards;
}

.m5 {
  z-index: 999;
}

.arq30 {
  animation: show30arq 0s forwards 2.55s;
}

.m5 svg path {
  animation: changeColor 0s forwards 2.55s;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate90 {
  to {
    transform: rotate(360deg)
  }
}

@keyframes reverseRotate {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes slideInRightAndBottom {
  from {
    transform: translateX(0) translateY(0);
  }

  to {
    transform: translateX(100%) translateY(100%);
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}


@keyframes slideInRightAndTop {
  from {
    transform: translateX(0) translateY(0);
  }

  to {
    transform: translateX(100%) translateY(-100%);
  }
}


@keyframes slideInBottom {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}

@keyframes slideInTop {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}


@keyframes slideInLeftAndBottom {
  from {
    transform: translateX(0) translateY(0);
  }

  to {
    transform: translateX(-100%) translateY(100%);
  }
}


@keyframes slideInLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}


@keyframes slideInLeftAndTop {
  from {
    transform: translateX(0) translateY(0);
  }

  to {
    transform: translateX(-100%) translateY(-100%);
  }
}

@keyframes m1Left {
  to {
    transform: translateX(67.5%) translateY(100%);
  }
}

@keyframes m2Left {
  to {
    transform: translateX(-32.6%) translateY(100%);
  }
}

@keyframes m3Left {
  to {
    transform: translateX(-132.6%) translateY(100%);
  }
}


@keyframes m4Left {
  to {
    transform: translateX(67.5%) translateY(0);
  }
}


@keyframes m5Left {
  to {
    transform: translateX(-32.6%) translateY(0);
  }
}

@keyframes m6Left {
  to {
    transform: translateX(-132.6%) translateY(0);
  }
}

@keyframes m7Left {
  to {
    transform: translateX(67.5%) translateY(-100%);
  }
}

@keyframes m8Left {
  to {
    transform: translateX(-32.6%) translateY(-100%);
  }
}

@keyframes m9Left {
  to {
    transform: translateX(-132.6%) translateY(-100%);
  }
}

@keyframes moveAllToUp {
  to {
    transform: translateX(-132.6%) translateY(-100%);
  }
}

@keyframes changeColor {
  to {
    fill: #F3F3F3;
  }
}

@keyframes show30arq {
  to {
    visibility: visible;
  }
}

`
export default GlobalStyles
