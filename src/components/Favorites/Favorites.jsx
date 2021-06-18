import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function Favorites() {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect (() => {
        getFavorites();
    }, []);

    // dispatch to watcherSaga to get favorites
    const getFavorites = () => {

        dispatch({
            type: 'GET_FAVORITES'
        }); // end dispatch

    };

    // get favoritesReducer from store, carrying action.payload
    const favorites = useSelector(store => store.favoritesReducer);

    console.log(favorites);
    // expect array of objects
    // keys: -id, -path

    return (

        <div>

            <div>
                {favorites?.map((favorite, id) => {

                    return(

                        <div key={id} >
                            <img src = {favorite?.path} alt="favorite" />
                            {/* drop-down menu */}
                        </div>

                    )

                })}
            </div>

        </div>

    ) // end return

} // end Favorites fn

export default Favorites;