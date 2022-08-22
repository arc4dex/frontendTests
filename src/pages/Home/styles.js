import styled from "styled-components";

export const MainSection = styled.main`
  width: 100vw;
  padding: 2rem;

  @media(min-width: 768px){
    height: 35rem;
    display: flex;

    align-items: center;
    justify-content: center;
  }

`

export const ContainerHome = styled.section`
  width: 100%;

  div{
    gap: 3rem;

    h1{
      width: 100%;

      text-align: center;

      font-size: 2.5rem;

      margin-bottom: 1rem;
    }

    p{
      text-align: center;
      font-size: 1.5rem;
    }

    button{
      width: 100%;
      height: 3rem;

      margin-top: 2rem;

      font-size: 1.2rem;

      border-radius: 1rem;
    }
  }

  figure{
    width: 100%;

    margin-top: 3rem;

    display: flex;
    justify-content: center;

    img{
      width: 16.5rem;
      height: 21rem;
    }
  }

  @media(min-width: 768px){
    display: flex;
   
    width:70%;

    margin-top: 3rem;

    div{
      margin: 0;
      h1{
        text-align: right;
      }
      p{
        text-align: right;
      }
      section{
        width: 100%;

        display: flex;
        justify-content: flex-end;

        button{
          width: 45%;

          font-size: 0.8rem;
        }
      }  
    }
    figure{
      margin-left: 3rem;
      margin-top: 0;
    }
  }
  
`