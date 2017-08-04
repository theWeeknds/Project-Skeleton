import React from 'react';
import {connect} from 'react-redux';
import {getUser} from './ducks/user.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log( this.props.user)
    return(
      <div>
        <button onClick={ ()=> this.props.getUser()}>button</button>
        <a href="http://localhost:3001/auth/callback">Log In</a>
      </div>
    );
  }
}

export default connect(state => ({
	user: state.user.user
}), {getUser})(Nav)
