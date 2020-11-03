import "./App.css";
import Layout from "./Hoc/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Rates from "./Components/Rates/Rates";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Utility/ScrollToTop";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/rates" component={Rates} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
