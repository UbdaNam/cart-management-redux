import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({
  img, title, price, amount,
}) => (
  <article className="cart-item">
    <img src={img} alt={title} />
    <div>
      <h4>{title}</h4>
      <h4 className="item-price">
        $
        {price}
      </h4>
      <button type="button" className="remove-btn">
        remove
      </button>
    </div>
    <div>
      <button type="button" className="amount-btn">
        <ChevronUp />
      </button>
      <p className="amount">{amount}</p>
      <button type="button" className="amount-btn">
        <ChevronDown />
      </button>
    </div>
  </article>
);

CartItem.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
