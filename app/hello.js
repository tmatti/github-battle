import React from 'react'

class Hello extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.header} {this.props.username}

        {this.props.authed ? <button onClick={this.props.logout}>Logout</button> : null}
      </div>
    )
  }
}

export default Hello