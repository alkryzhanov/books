import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import Routes from "./Components/Routes/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
