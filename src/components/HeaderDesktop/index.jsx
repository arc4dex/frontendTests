import { useHistory } from "react-router-dom"
import { NavDesk } from "./styles"

function HeaderDesktop(){

  const history = useHistory()

  function goToList(){
    history.push("/list")
  }
  
  function goToHome(){
    history.push("/")
  }

  return(
    <NavDesk>
      <div>
        <h1 onClick={goToHome}>Home</h1>
        <h1 onClick={goToList}>List</h1>
      </div>
    </NavDesk>
  )
}

export default HeaderDesktop