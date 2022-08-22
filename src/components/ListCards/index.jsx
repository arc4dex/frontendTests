import { useEffect, useState } from "react"
import { Api } from "../../services"
import { ContainerImg } from "./styles"

function ListCards(){

  const [ cats, setCats ] = useState([])

  useEffect(() => {
    Api.get("")
      .then((response) => setCats(response.data))
      .catch((err) => console.log(err))
  }, [])

  return(
   <ContainerImg>
    <ul>
      {cats?.map((element) => {
        return <li key={element.id}>
            <img src={element.url} alt="" />
          </li>
        
      })}
    </ul>
   </ContainerImg>
  )
}

export default ListCards