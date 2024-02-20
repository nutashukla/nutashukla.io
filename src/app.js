      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import Header from './components/Header';
      import Body from './components/body';
      import Footer from './components/Footer';

      const Foodie = () => {
         return(
          <>
          <Header/>
          <Body/>
          <Footer/>
          </>
          );
      }
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<Foodie/>);
