import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import createSagaMiddleware from "redux-saga";


// saga generator/watcher⬇

function* rootSaga() {
    yield takeEvery('GET_FAVORITES', getFavorites);
    yield takeEvery('ADD_FAVORITE', postFavorite);
    yield takeEvery('GET_SEARCH', getSearch);
}



//Reducers⬇

const giphyReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_SEARCH":
            return action.payload;
        default:
            return state;
    }
}

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FAVORITES":
      return action.payload;
    default:
      return state;
  }
};

//SAGAS⬇

// get saga ⬇

function* getFavorites() {
  try {
    const response = yield axios.get("/api/favorite");
    yield put({ type: "FETCH_FAVORITES", payload: response.data });
  } catch (error) {
    console.log(`oh noo ${error} in GET FAVORITES`);
  }
}
// we are only getting info from giphy so we dont need to call our get to refresh

function* getSearch(action) {
    try {
        const response = yield axios.post("/api/giphy", action.payload);
        yield put({ type: "FETCH_SEARCH", payload: response.data?.data });
        console.log('in getSearch response.data', response.data);
      } catch (error) {
        console.log(`oh noo ${error} in GET GIPHY`)
    }
}
// post saga ⬇

function* postFavorite() {
    try{
        yield axios.post('/api/favorite', action.payload)
        yield put({ type: 'GET_FAVORITES'})
    }catch(error) {
        console.error(`oh noo ${error} in POST FAVORITE`)
      }
    
}





const sagaMiddleware = createSagaMiddleware();

// store ⬇

const store = createStore(
    combineReducers({
        favoriteReducer,
        giphyReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));
