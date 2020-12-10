import "./App.css";
import Hero from "./components/Hero/Hero";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/experience">
          <Hero route={"Experience"} />
        </Route>
        <Route exact path="/projects">
          <Hero route={"Projects"} />
        </Route>
        <Route exact path="/Intro">
          <Hero route={"Intro"} />
        </Route>
        <Route path="/">
          <Hero route={"Intro"} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
