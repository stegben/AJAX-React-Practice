import React from 'react';
import { Link } from 'react-router';

class AllUsers extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/user')
      .then( res => {
        console.log(res);
        if (res.status === 200){
          return res.json();
        } else {
          throw Error();
        }
      })
      .then((res) => {
        console.log(res)
        this.setState({
            data: res.users,
          })
      })
      .catch( (res) => {console.log("sth wrong")})
  };

  renderUsers = () => {
    return this.state.data.map((user) =>
      <li><Link to={'/users/' + user.name}>{user.name}</Link></li>
    );
  };

  render() {
    return (
      <ul>
        {this.renderUsers()}
      </ul>
    );
  }
}

export default AllUsers;
