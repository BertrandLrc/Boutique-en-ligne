import shoesItems from "./Data/shoesItems";
import ShoesList from "./ShoesList";
import Cart from "./cart";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import { useState } from "react";

function App() {

  const [carts, updateCarts] = useState(shoesItems);

  const handleShoes = (id) => {
    const updatedItems = carts.map((element) =>
      element.id === id ? { ...element, number: element.number + 1 } : element
    );
    updateCarts(updatedItems);
  };

  const resetCarts = () => {
    const resetItems = carts.map((element) => ({ ...element, number: 0}));
    updateCarts(resetItems);
  }


  return (
    <>
      <section className="header">
      <Header/>
      <Cart 
      carts={carts} 
      resetCarts={resetCarts}
      />
      </section>
      <h1>Articles</h1>
      <article>
        <ShoesList 
        carts={carts} 
        handleShoes={handleShoes}
        />
      </article>
      <Footer/>
    </>
  )
}

export default App