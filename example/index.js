import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'


const Button = ({ children, onClick }) => (
  <div role="button" onClick={onClick} focusable>
    {children}
  </div>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: null,
  onClick: null,
}

class Page extends Component {
  state = { count: 0 }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <Button onClick={this.increment}>
          Increment: {this.state.count}
        </Button>
      </div>
    )
  }
}

// eslint-disable-next-line react/no-multi-comp
class Example extends PureComponent {
  static propTypes = {
    onUpdate: PropTypes.func,
  }

  static defaultProps = {
    onUpdate: null,
  }

  resolveUpdate = (event) => {
    if (this.props.onUpdate) {
      this.props.onUpdate(event.target)
    }
  }

  render() {
    return (
      <Button onClick={this.resolveUpdate}>Update</Button>
    )
  }
}

module.exports = {
  Button,
  Page,
  Example,
}
