import React from "react";
import { useHistory } from "react-router-dom";

import Shopee from "../../assets/images/Shopee.png";

import {
  Container,
  ShopeeLink,
  SearchForm,
  SearchButton,
  SearchIcon,
  CartButton,
  ShoppingCart,
  ItemsNumber,
} from "./styles";

function Header(props) {
  let { itemsInCart } = props;
  itemsInCart = 6;

  const history = useHistory();

  const handleGoToCart = () => {
    history.push("/cart");
    console.log(props);
  };

  return (
    <Container>
      <ShopeeLink to="/">
        <img src={Shopee} alt={"Shoppe"} />
      </ShopeeLink>
      <SearchForm>
        <input type="text" placeholder="Buscar...." />
        <SearchButton onClick={(e) => e.preventDefault()}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      <CartButton onClick={handleGoToCart}>
        <ShoppingCart />
        {itemsInCart >= 1 && itemsInCart && (
          <ItemsNumber>
            <span>{itemsInCart}</span>
          </ItemsNumber>
        )}
      </CartButton>
    </Container>
  );
}

export default Header;
