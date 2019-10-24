import styled, { css } from 'styled-components'

const Header = styled.header`
  height: 500px;
  background: silver;
  border-bottom: 2px solid transparent;
  transition: all 300ms ease-out;

  ${({ type }) => {
    switch (type) {
      case 1:
        return css`
          height: 300px;
          background: lightblue;
        `
      case 2:
        return css`
          height: 200px;
          background: coral;
        `
      case 3:
        return css`
          height: 100px;
          background: mediumseagreen;
        `
    }
  }}
`

export default ({ headerType }) => <Header type={headerType}>Header</Header>
