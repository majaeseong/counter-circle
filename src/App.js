import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import reducer from './Reducer/reducer'
import Main from './Counter/index';

let store = createStore(reducer,
  window.devToolsExtension && window.devToolsExtension());
console.log(store.getState());
class App extends Component {
  render() {
    return (
      <div>
       
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    )
  }
}

export default App;
