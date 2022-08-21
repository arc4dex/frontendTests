import { createGlobalStyle } from 'styled-components'
import background from '../img/background.png'
import { css } from 'styled-components'

const Luckiest = css`
  @font-face {
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/luckiest-guy-v18-latin-regular.eot'); 
    src: local(''),
        url('../fonts/luckiest-guy-v18-latin-regular.eot?#iefix') format('embedded-opentype'), 
        url('../fonts/luckiest-guy-v18-latin-regular.woff2') format('woff2'),
        url('../fonts/luckiest-guy-v18-latin-regular.woff') format('woff'), 
        url('../fonts/luckiest-guy-v18-latin-regular.ttf') format('truetype'), 
        url('../fonts/luckiest-guy-v18-latin-regular.svg#LuckiestGuy') format('svg'); 
  }
`

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
     
      :root{
        --blue: #6D4BF8;
        --white: ##FFFFFF;
        --black: #000000;
      }
    
      body{
        background-image: url(${background});
        color: #ffffff;

        width: 1280px;
        height: auto;
        display: flex;
      }

      h1,h2, h3, p, label{
        font-family: ${Luckiest};
      }

      button{
        cursor: pointer;
      }

      li,ul {
        list-style: none;
      }
    }
`
