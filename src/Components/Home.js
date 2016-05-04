import React from "react"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>test app</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
