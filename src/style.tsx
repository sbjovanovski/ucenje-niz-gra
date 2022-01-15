import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    /* stylelint-disable property-no-vendor-prefix, declaration-property-unit-whitelist */
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* stylelint-enable */
  }

  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  main,
  li {
    display: block;
  }

  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
  }

  strong {
    font-weight: 700;
  }

  a,
  button {
    color: inherit;
    transition: .3s;
  }

  a {
    text-decoration: none;
  }

  button {
    overflow: visible;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  :focus {
    outline: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }

  body {
    min-height: 100%;
  }

  /* stylelint-disable selector-max-id */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100%;

    @supports (display: grid) {
      height: initial;
    }
  }

  /* stylelint-enable selector-max-id */
`

export default GlobalStyles
