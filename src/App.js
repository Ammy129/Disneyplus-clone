import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Home";

function App() {
  const getUser = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "";
  };

  const [isLogin, setIsLogin] = useState(getUser());
  const [searchTitle, setSearchTitle] = useState("");

  if (!isLogin) {
    return <Login setIsLogin={setIsLogin} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        setIsLogin={setIsLogin}
        setSearchTitle={setSearchTitle}
        searchTitle={searchTitle}
      />
      <Switch>
        <Route path="/" exact>
          <Home searchTitle={searchTitle} />
        </Route>
        <Route path="/detail/:id" exact component={Detail} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
