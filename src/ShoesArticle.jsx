function ShoesArticle(props) {
  return (
    <section className="itemContainer">
      <div className="imgContainer">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="price">
        <span>Prix {props.price} EUR</span>
        <span>Quantité(s) {props.number}</span>
        <button onClick={() => props.handleShoes(props.id)}>Ajouter au panier</button>
      </div>
    </section>
  )
}

export default ShoesArticle;