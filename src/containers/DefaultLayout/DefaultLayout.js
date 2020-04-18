import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { userActions, alertActions } from '../../actions';

import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayoutPage extends Component {
  render() {
    return (
      <div className="app">
        <Suspense fallback={null}>
          <DefaultHeader/>
          <div className="app-body esans">
            <main className="main">
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
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyBmZNIuhEjfHxZf6ZNmCvJnXI_AIfxZ-no&libraries=geometry,drawing,places"}
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

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.authentication.isLoginPending,
    isLoginSuccess: state.authentication.isLoginSuccess,
    loginError: state.authentication.loginError,
    errorMessage: state.alert.message,
    signUp: state.authentication.signUp,
    human: state.authentication.human,
    latestAction: state.authentication.latestAction,
  };
}

const mapDispatchToProps = (dispatch, history) => {
  return {
    errorVisible: (show) => dispatch(alertActions.visible(show)),
    error: (errorMessage) => dispatch(alertActions.error(errorMessage)),
    authentication: (email, password, history, document) => dispatch(userActions.login(email, password, history, document)),
    signupEmail: (email, username, password, history, document) => dispatch(userActions.register(email, username, password, history, document)),
    forgotPassword: (email, document) => dispatch(userActions.forgotPassword(email, document)),
    reset: () => dispatch(userActions.reset()),
    googleLogin: (history) => dispatch(userActions.googleLogin(history)),
    facebookLogin: (history) => dispatch(userActions.facebookLogin(history)),
    loginFailure: (loginError, error, user, userData) => dispatch(userActions.loginFailure(loginError, error, user, userData)),
    reCaptchaUpdate: (human, signUp, latestAction) => dispatch(userActions.reCaptchaUpdate(human, signUp, latestAction)),
  };
}

const DefaultLayout = connect(mapStateToProps, mapDispatchToProps)(DefaultLayoutPage);
export default DefaultLayout;
