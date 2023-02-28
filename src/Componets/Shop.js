import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getProducts, productSearch } from "../actions";
import productsReducer from "../reducers/reducerProducts";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  const fetchdata = () => {
    dispatch(getProducts());
  };

  // const { error, isLoading } =

  return (
    <div className="shop-container">
      {/* {isLoading ? (
      <div className="d-flex align-items-center loading">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    ) : error ? (
      <p>An error occured...</p>
    ) : (
      <div>
        <div className="hederShop">
          <Typography variant="h4">
            If shopping doesn't make you happy, then you're in the wrong shop.
          </Typography>
        </div> */}
      <div>
        <div className="Search">
          <input
            type="text"
            className="search-in"
            placeholder="Search...."
            onChange={(event) => dispatch(productSearch(event.target.value))}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 allCard">
        {products.map((products) => {
          console.log(products, "test");
          return (
            <div className="card cartBox" key={products.id}>
              <Box width="100%">
                <Card className="cartIn">
                  <div className="img-price">
                    <CardMedia className="imgProduct">
                      <img
                        src={products.images}
                        className="card-img-top productsImg"
                        alt={products.name}
                      />
                    </CardMedia>
                    <Typography variant="body2" className="price-shop">
                      {" "}
                      Price :{products.price} $
                    </Typography>
                  </div>
                  <CardContent>
                    <Typography variant="h5">{products.name}</Typography>
                    <Typography variant="body2">
                      <b>Description :</b> {products.description}
                    </Typography>
                    <Typography variant="body2">
                      <Link
                        to={`/singelproduct/${products.id}`}
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
                    // onClick={() => hendleAddTocart(products)}
                    type="button"
                    className="btn btn-primary addTo"
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
      {/* </div> */}
      {/* )} */}
    </div>
  );
};

export default Shop;
