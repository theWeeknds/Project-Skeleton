import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './Nav';
import Home from './routes/Home';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route render={() => <h2>Page not found!</h2>} />
          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}
