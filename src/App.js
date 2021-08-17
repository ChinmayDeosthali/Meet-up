import { Route } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" >
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" >
          <FavoritesPage />
        </Route>
      </switch>
    </Layout>
  );
}

export default App;
