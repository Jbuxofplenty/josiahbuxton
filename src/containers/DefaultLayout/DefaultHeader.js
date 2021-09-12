import { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.home = this.home.bind(this);
  }

  home() {
    this.props.history.push('/home');
  }
  render() {
    return null;
  }
}

export default withRouter(DefaultHeader);
