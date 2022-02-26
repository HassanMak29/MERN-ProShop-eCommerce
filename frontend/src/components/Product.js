import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1, userInfo?.name));
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
      <Button
        type="button"
        className="btn-block"
        onClick={addToCartHandler}
        disabled={product.countInStock === 0}
      >
        Add To Cart
      </Button>
    </Card>
  );
};

export default Product;
