import { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class DefaultFooter extends Component {
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

export default withRouter(DefaultFooter);
