import "./App.css";
import Layout from "./Hoc/Layout/Layout";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/services" component={Home} />
            <Route path="/rates" component={Home} />
            <Route path="/contact" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
