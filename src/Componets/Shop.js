import { Link, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../Redux/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { SearchProduct } from "../Redux/productsSliece";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Shop = () => {
  const { filteredItms } = useSelector((state) => state.products);
  const { error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hendleAddTocart = (products) => {
    dispatch(addToCart(products));
    navigate("/cart");
  };
  const handleSearchProduct = word => {
    dispatch(SearchProduct(word));
  };

  return (
    <div className="shop-container">
      {isLoading ? (
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
          <div className="hedershop">
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

          <div className="row row-cols-1 row-cols-md-2 g-4 allcard">
            {filteredItms.map((products) => {
              return (
                <div className="card cardbox" key={products.id}>
                  <Box width="100%">
                    <Card className="cartIn">
                      <div className="img-price">
                        <CardMedia className="imgProduct">
                          <img
                            src={products.images}
                            className="card-img-top productsimg"
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
                      <button
                        onClick={() => hendleAddTocart(products)}
                        type="button"
                        className="btn btn-primary addto"
                      >
                        <ShoppingCartIcon size="large" />
                        Add To Cart
                      </button>
                    </div>
                  </Box>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;