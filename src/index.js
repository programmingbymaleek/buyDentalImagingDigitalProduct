import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './contextapi/context';
import { CategoriesProvider } from './context.apis/categories_context/categories_context';
import { CartUserProviderContext } from './context.apis/cart_context/cart_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <UserProvider>
    <CategoriesProvider>
      <CartUserProviderContext>
        <App />
      </CartUserProviderContext>
    </CategoriesProvider>
  </UserProvider>
</BrowserRouter>)

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
