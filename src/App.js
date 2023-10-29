import React from 'react';
import router from './Routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
