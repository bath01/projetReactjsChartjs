import ZoZo from "./components/statcom";
import ZoZo2 from "./components/statpub";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Apps">
        <ZoZo />
        <ZoZo2/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
