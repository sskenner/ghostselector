import React, {Component} from 'react';
import Ghost from './Ghost';
import ghost1 from './Images/ghost1.png';
import casper from './Images/casper.jpeg';
import marshmallowghost from './Images/marshmallowghost.jpeg';
// https://www.freecodecamp.org/forum/t/importing-images-in-react/206974/4

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedGhost: 'casper',
    };
  };

  selectGhost = (ghostName) => {
    this.setState({
      selectedGhost: ghostName
    })
  }

  render () {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected:</div>
          <div>{this.state.selectedGhost}</div>
        </div>
        <div className="ghost-list">
          <Ghost ghost={ghost1} selectGhost={this.selectGhost}/>
          <Ghost ghost={casper} selectGhost={this.selectGhost}/>
          <Ghost ghost={marshmallowghost} selectGhost={this.selectGhost}/>
          <Ghost />
          <Ghost />
        </div>
      </div>
    )
  }
}

export default Selector;
