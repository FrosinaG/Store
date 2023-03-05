import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import { addToCart, productsFetch, searchProduct } from "../actions";

const Shop = () => {
  const filteredProducts = useSelector(
    (state) => state.productsReducer.filteredProducts
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hendleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  useEffect(() => {
    dispatch(productsFetch());
  });

  const handleSearchProduct = (word) => {
    dispatch(searchProduct(word));
  };

  return (
    <div className="shop-container">
      <div>
        <div className="hederShop">
          <Typography variant="h4">
            If shopping doesn't make you happy, then you're in the wrong shop.
          </Typography>
        </div>
        <div>
          <div className="Search">
            <input
              type="text"
              className="search-in"
              placeholder="Search...."
              onChange={(e) => handleSearchProduct(e.target.value)}
            />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 allCard">
          {filteredProducts.map((product) => {
            return (
              <div className="card cartBox" key={product.id}>
                <Box width="100%">
                  <Card className="cartIn">
                    <div className="img-price">
                      <CardMedia className="imgProduct">
                        <img
                          src={product.images}
                          className="card-img-top productsImg"
                          alt={product.name}
                        />
                      </CardMedia>
                      <Typography variant="body2" className="price-shop">
                        {" "}
                        Price :{product.price} $
                      </Typography>
                    </div>
                    <CardContent>
                      <Typography variant="h5">{product.name}</Typography>
                      <Typography variant="body2">
                        <b>Description :</b> {product.description}
                      </Typography>
                      <Typography variant="body2">
                        <Link
                          to={`/singleproduct/${product.id}`}
                          className="card-link"
                        >
                          View more
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                  <div className="btnAdd">
                    <Button
                      variant="contained"
                      type="button"
                      className="btn btn-primary addTo"
                      onClick={(e) => hendleAddToCart(product)}
                    >
                      <ShoppingCartIcon size="large" />
                      Add To Cart
                    </Button>
                  </div>
                </Box>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
