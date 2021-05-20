import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact,Post, Author, User} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/author" exact component={() => <Author />} />
          <Route path="/post" exact component={() => <Post />} />
          <Route path="/user" exact component={() => <User />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/footer" exact component={() => <Footer />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
