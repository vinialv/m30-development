import styled, { keyframes } from 'styled-components'

export const Home = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  
  img {
    margin-top: 32px;
  }
  
  main {
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 18px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    nav {
      gap: 16px;
      display: flex;
      justify-content: center;
      margin: 4px 0 16px 0;

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
