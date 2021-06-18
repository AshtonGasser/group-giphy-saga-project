import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledFavoriteItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Favorites() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getFavorites();
  }, []);

  // dispatch to watcherSaga to get favorites
  const getFavorites = () => {
    dispatch({
      type: "GET_FAVORITES",
    }); // end dispatch
  };

  // get favoritesReducer from store, carrying action.payload
  const favorites = useSelector((store) => store.favoritesReducer);

  console.log(favorites);
  // expect array of objects
  // keys: -id, -path

  return (
    <div>
      <div>
        {favorites?.map((favorite, id) => {
          return (
            <div key={id}>
              <img src={favorite?.path} alt="favorite" />
            </div>
          );
          {
            /* drop-down menu */
          }
        })}
      </div>




      <div>

        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          Open Favorites
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledFavoriteItem>
            <ListItemText primary="funny" />
          </StyledFavoriteItem>
          <StyledFavoriteItem>
            <ListItemText primary="category" />
          </StyledFavoriteItem>
          <StyledFavoriteItem>
            <ListItemText primary="cartoon" />
          </StyledFavoriteItem>
          <StyledFavoriteItem>
            <ListItemText primary="meme" />
          </StyledFavoriteItem>
        </StyledMenu>
        {/* <p>in Favorites</p> */}
      </div>






    </div>
  ); // end return
} // end Favorites fn

export default Favorites;
