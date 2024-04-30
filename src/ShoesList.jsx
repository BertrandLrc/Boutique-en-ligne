import React from 'react';
import ShoesArticle from './ShoesArticle';

function ShoesList({ carts, handleShoes }) {
  return (
    <>
      {carts.map((cart) => {
        return (
          <ShoesArticle
            key={cart.id}
            id={cart.id}
            name={cart.itemName}
            description={cart.description}
            image={cart.image}
            price={cart.price}
            handleShoes={handleShoes}
            number={cart.number}
           />
        );
      })}
    </>
  )
}

export default ShoesList

