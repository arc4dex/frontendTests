import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";


function Routes(){

  return(
    <Switch>
      <Route exact path={"/"}>
        <Home/>
      </Route>
      <Route path={"/list"}>
        <List/>
      </Route>
    </Switch>
  )
}

export default Routes