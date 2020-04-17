import { Component } from 'react';
import { userActions, alertActions } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class FooterPage extends Component {
  constructor(props) {
    super(props);

    var dt = new Date();

    this.state = {
      currentYear: dt.getFullYear(),
    }

    this.home = this.home.bind(this);
  }

  home() {
    this.props.history.push('/home');
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user, userData } = authentication;
  return {
    user,
    userData,
  };
}

const mapDispatchToProps = (dispatch, history) => {
  return {
    errorVisible: (show) => dispatch(alertActions.visible(show)),
    error: (errorMessage) => dispatch(alertActions.error(errorMessage)),
    logout: () => dispatch(userActions.logout()),
    reset: () => dispatch(userActions.reset())
  };
}

const DefaultFooter = connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterPage));
export default DefaultFooter;
