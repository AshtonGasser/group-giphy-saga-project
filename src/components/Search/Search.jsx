import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Search() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [search, setSearch] = useState('')
    useEffect(() => {
   
        // dispatch({

        //     type : 'GET_SEARCH'

        // }) // end dispatch

    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'GET_SEARCH',
            payload: {search: search}
        })
        setSearch('');
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value); 
    }


    const giphySearch = useSelector( store => store.giphyReducer);

    console.log('trying stuff', giphySearch?.data?.[0]);

    return(

        <>
            <header>WOWEEE</header>
            <p>in Search</p>
            <form onSubmit={handleSubmit}>
            <input onChange={handleSearchChange} placeholder="search" value={search} />
            <button type="submit">Search</button>
            {/* <img src = {giphySearch?.data?.[0].images?.original.url} alt="" /> */}
            </form>

            <div>

                    {giphySearch?.data?.map((gif, i) => {

                        return(
                            
                            <div key={i} >
                                <img src = {gif?.images?.original.url} alt="yikes" />
                                {/* on click */}
                            </div>

                        )

                    })}

            </div> 

        </>

    ) // end return

} // end Search fn

export default Search;