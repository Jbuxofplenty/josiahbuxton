import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import MenuButton from '../../components/MenuButton';

import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <Suspense fallback={null}>
          <DefaultHeader/>
          <div className="app-body esans">
            <main className="main">
              <MenuButton />
              <Container fluid>
                <Switch className="esans">
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component
                            {...props}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                          />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/home" />
                </Switch>
              </Container>
            </main>
          </div>
          <DefaultFooter />
        </Suspense>
      </div>
    );
  }
}

export default DefaultLayout;
