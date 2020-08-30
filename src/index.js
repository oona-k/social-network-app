import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import {
  createStore,
  applyMiddleware, // new
  compose, // new
} from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducers/rootReducers";
import thunk from "redux-thunk"; // new
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore"; // new
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase"; // new
import firebase from "firebase/app"; // new
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig"; // new

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), // new
    reduxFirestore(firebase, firebaseConfig) // new
  )
);

  ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider // new
      firebase={firebase} // new
      config={firebaseConfig} // new
      dispatch={store.dispatch} // new
      createFirestoreInstance={createFirestoreInstance} // new
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
