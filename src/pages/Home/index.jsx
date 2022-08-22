import { Button } from "@mui/material";
import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { ContainerHome, MainSection } from "./styles";
import CatLogo from "../../img/CATe Logo 2.png"
import { useHistory } from "react-router-dom";

function Home(){

  const history = useHistory()

  function goToList(){
    history.push("/list")
  }

  return(
    <>
      <HeaderMobile goToList={goToList}/>
      <HeaderDesktop goToList={goToList}/>
      <MainSection>
        <ContainerHome>
          <div>
            <h1>THE CATS</h1>
            <p>
             Todos os gatos da galáxia CAT-5721, tem o mesmo objetivo, embarcar em suas naves e chegar até a galáxia vizinha, a via láctea, e nela chegar até o planeta Terra, para o treinamento no CATE - Centro de Ambientação Tecnológica Espacial
            </p>
            <section>
              <Button variant="contained">
                Conheça a lista de raças
              </Button>
            </section>
          </div>
          <figure>
            <img src={CatLogo} alt="Logo marcar" />
          </figure>
        </ContainerHome>
      </MainSection>
    </>
  )
}

export default Home