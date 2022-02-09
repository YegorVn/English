import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Redux from 'react-redux'
// import ReactRedux from 'react-redux'
// import rootReducer from './redux/reducers';

// const {Provider, connect} = ReactRedux;
// const createStore = Redux.createStore

// const store = createStore(rootReducer);
// const ConnectedApp = connect((state) => {
//   console.log(state);
//   return state;
// })(App);
  
// export {store}

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById("root")
);

