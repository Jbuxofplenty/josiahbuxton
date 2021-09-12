import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import DefaultLayout from './containers/DefaultLayout';
import $ from 'jquery';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Pages
const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});


class App extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $('input').blur(function() {
        // check if the input has any value (if we've typed into it)
        if ($(this).val())
          $(this).addClass('used');
        else
          $(this).removeClass('used');
      });

    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
