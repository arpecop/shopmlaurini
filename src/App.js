import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import Cart from './components/Cart'
import About from './components/About'
//container
import Layout from './components/Layout'

export default function App () {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path='/about' exact render={props => <About />} />
          <Route
            path='/product/:id'
            exact
            render={props => <Product id={props.match.params.id} />}
          />
          <Route
            path='/cart/:id'
            exact
            render={props => <Cart id={props.match.params.id} />}
          />
          <Route path='/'>
            <ProductsList page={1} />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}
