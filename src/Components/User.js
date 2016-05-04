import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.params.username,
      age: 10,
      userExist: false
    };
  }

  componentDidMount() {
    console.log('http://localhost:3000/api/user/' + this.props.params.username)
    fetch('http://localhost:3000/api/user/' + this.props.params.username)
      .then( res => {
        console.log(res);
        if (res.status === 200){
          return res.json();
        } else {
          throw Error();
        }
      })
      .then( (res) => {
        this.setState({
            name: res.name,
            age: res.age,
            userExist: true
          })
      })
      .catch( (res) => {console.log("no such name")})
  }

  renderInfo = () => {
    let { name, age } = this.state;
    if (this.state.userExist) {
      return (
        <div>
          <h1>{name}</h1>
          <h3>{age}</h3>
        </div>
      );
    } else {
      return (<h1>user not exist</h1>) ;
    };
  };

  render() {
    return (
      <div>
        {this.renderInfo()}
        <Link to="/">back to all user</Link>
      </div>
    );
  }
};

export default User;
