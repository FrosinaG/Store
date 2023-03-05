import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT } from "../actions/actionTypes";

const SingleProducts = () => {
  let { id } = useParams();
  const singleProduct = useSelector(
    (state) => state.productsReducer.singleProduct
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: PRODUCT, id });
  });
  if (!singleProduct) return null;

  const hendleNextCard = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <div key={singleProduct.id} className="singleCont">
      <div className="singleBox">
        <div className="textBox part">
          <Typography variant="h3">{singleProduct.name}</Typography>
          <Typography variant="body2">
            <b>Description :</b> {singleProduct.description}
          </Typography>
          <StarBorderIcon size="small" />
          <StarBorderIcon size="small" />
          <StarBorderIcon size="small" />
          <StarBorderIcon size="small" />
          <StarBorderIcon size="small" />
          <Typography variant="body2">
            <b> {singleProduct.rating}</b>
          </Typography>
        </div>
        <div className="part-img">
          <img
            src={singleProduct.images}
            className="card-img-top productsimg singT"
            alt="products"
          />
        </div>
      </div>
      <div className="btnSingleProduct">
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SettingsBackupRestoreIcon />}>
            <Link to={"/shop"} className="link-btn">
              Back
            </Link>
          </Button>
          <Button
            variant="contained"
            startIcon={<KeyboardDoubleArrowLeftIcon />}
            onClick={(e) => hendleNextCard(parseInt(id) - 1)}
          >
            Preview
          </Button>
          <Button
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightIcon />}
            onClick={(e) => hendleNextCard(parseInt(id) + 1)}
          >
            Next
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default SingleProducts;
