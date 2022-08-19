import "./App.css";
import ProductL from "./Components/ProductL";
import { Data } from "./Data";
import { useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import Panier from "./Components/Panier";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const [list, setList] = useState(Data);
  const [total, setTotal] = useState(0);
  const pantotal = (price) => {
    setTotal(total + price);
  };
  const [panier, setPanier] = useState([]);
  const HundleAdd = (newpr) => {
    const exist = panier.find((el) => el.id === newpr.id);

    if (exist) {
      alert(`the ${newpr.title} is added to the Cart`);
    } else {
      setPanier([newpr, ...panier]);
      pantotal(newpr.price);
    }
  };
  const remove = (id) => {
    setPanier(panier.filter((el) => el.id !== id));
  };
  return (
    <div className="container">
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<ProductL list={list} HundleAdd={HundleAdd} />}
          />
          <Route
            path="/panier"
            element={
              <Panier
                pn={panier}
                pantotal={pantotal}
                dl={remove}
                total={total}
              />
            }
          />
          <Route path="/review/:idprod" element={<ProductDetails list={list} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
