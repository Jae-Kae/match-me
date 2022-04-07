import GlobalStyle from "./GlobalStyles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProfilePage from "./Profile";
import ChatScreen from "./Chat";
import Header from "./Header";
import HomePage from "./Homepage";
import SignIn from "./SignIn";
import MatchMeCards from "./MatchMeCards";
import ErrorPage from "./ErrorPage";
////=================================================================

const App = () => {
  return (<>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/signIn">
          <SignIn/>
        </Route>
        <Route exact path="/matchMeCards">
          <MatchMeCards/>
        </Route>
        <Route exact path="/profile/:id">
          <ProfilePage/>
        </Route>
        <Route exact path="/chat/:user">
          <ChatScreen/>
        </Route>
        <Route exact path="/*">
          <ErrorPage/>
        </Route>
      </Switch>
    </Router>
    <GlobalStyle/>
    </>
  );
}

export default App;
