import './style.css';

export const Product = ({ image, name, price, onSelectPrice }) => {
  return (
    <div className="product">
      <img src={image} className="product__image" onClick={()=> onSelectPrice(price)}/>
      <div className="product__body">{name}: {price} Kč</div>
    </div>
  );
};
