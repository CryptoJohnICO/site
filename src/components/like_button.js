import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick = () => {
    this.setState({
      liked: true
    });
  }

  render() {
    if (this.state.liked) {
      return 'You liked thisss.';
    }

    return (
      <Button onClick={this.handleClick}>Like</Button>
    );
  }
}

export default LikeButton;