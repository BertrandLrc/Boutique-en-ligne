import { useState } from "react";

function Cart({ carts, resetCarts, }) {
  const articlePrice = carts.reduce(
    (total, cart) => total + cart.number * cart.price,
    0
  );
  const [isOpen, setIsOpen] = useState(false)
  

  return isOpen ? (
      <div className='cart'>
          <button onClick={() => setIsOpen(false)}>Fermer</button>
          <h2>Panier</h2>
          <h3>Total : {articlePrice}€</h3>
          <button onClick={() => resetCarts()}>Vider le panier</button>
      </div>
  ) : (
      <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  )
}

export default Cart