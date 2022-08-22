import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BackGround, Menu } from "./style";

function Modal({setModal}){

  const history = useHistory()

  const [isModalClosed, setIsModalClosed] = useState(false);

  function modalClose(){
    setIsModalClosed(true);

    setTimeout(() => {
      setModal(false)
    }, 1000);
  }

  function goList(){
    history.push("/list")
  }

  return(
      <BackGround handleCloseUser={isModalClosed} onClick={modalClose}>
        <Menu>
          <div>
            <h1>Home</h1>
            <h1 onClick={goList}>Listagem</h1>
          </div>
        </Menu>
      </BackGround>
    ) 
    
}

export default Modal