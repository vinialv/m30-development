import styled from 'styled-components'

type MProps = {
  showGraf: boolean
}

const elementHeight = '100px'

export const M = styled.svg`
  width: auto;
  height: calc(0.65 * ${elementHeight});
`

export const a30 = styled.svg`
  height: calc(0.65 * ${elementHeight});
`

export const Grafismo = styled.div<MProps>`
  display: ${(props) => (props.showGraf ? 'grid' : 'flex')};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: calc(3 * ${elementHeight});
  height: calc(3 * ${elementHeight});
`
