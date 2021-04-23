import React from 'react';
import AddProduct from './views/AddProduct';
import ProductList from './views/ProductList';
import { Switch, Route } from 'react-router-dom';

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/add" component={AddProduct} />
    </Switch>
  );
};

export default routes;
