import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./Profile";
import Header from "./Header";
import SignIn from "./SignIn";
import ErrorPage from "./ErrorPage";
import { useCurrentUserContext } from "./CurrentUserContext";
import MatchMeCards from "./MatchMeCards";
import UserProfile from "./Profile/UserProfile";
import EditProfile from "./Profile/EditProfile";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";

// import ChatScreen from "./Chat";
// import HomePage from "./Homepage";

////=================================================================

const App = () => {
  const { loading, currentUser } = useCurrentUserContext();

  return (
    <>
      <Router>
        <Header />
        <Page>
          {loading ? (
            <LoadingPage />
          ) : (
            <Switch>
              <Route exact path="/">
                {currentUser ? <ProfilePage /> : <SignIn />}
              </Route>
              <Route exact path="/profile/:id">
                <UserProfile />
              </Route>
              <Route exact path="/edit">
                <EditProfile />
              </Route>
              <Route exact path="/matchMeCards">
                <MatchMeCards />
              </Route>

              <Route exact path="/*">
                <ErrorPage />
              </Route>
            </Switch>
          )}
        </Page>
      </Router>
      <GlobalStyle />
    </>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  flex-direction: column;
`;

export default App;

{
  /* <Route exact path="/profile/:id">
<ProfilePage/>
</Route>
<Route exact path="/chat/:user">
<ChatScreen/>
</Route>
 */
}

{
  /* <Route exact path="profile">
<ProfilePage />
</Route>

<Route exact path="/matchMeCards">
<MatchMeCards />
</Route> */
}
