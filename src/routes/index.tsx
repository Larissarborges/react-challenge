import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Repositories } from "../pages/Repositories";
import { Followers } from "../pages/Followers";
import { Following } from "../pages/Following";
import { UserProfile } from "../pages/UserProfile";
import { Template } from "../components/Template"

export function Routes() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact component={Login} />  
      <Template>
        <Route path="/home" exact component={Home} />  
        <Route path="/repos" exact component={Repositories} />  
        <Route path="/followers" exact component={Followers} />
        <Route path="/followers/:username" exact component={UserProfile} />
        <Route path="/following" exact component={Following} />
        <Route path="/following/:username" exact component={UserProfile} />
      </Template>
    </Switch>    
  </Router>  
  )
}