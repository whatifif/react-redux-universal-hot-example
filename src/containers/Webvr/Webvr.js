// import 'aframe-core';
// import 'babel-polyfill';
// import {Animation, Entity, Scene} from 'aframe-react';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Camera from './components/Camera';
// import Cursor from './components/Cursor';
// import Light from './components/Light';
// import Sky from './components/Sky';

// class BoilerplateScene extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: 'red'
//     };
//   }

//   changeColor = () => {
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
//     this.setState({
//       color: colors[Math.floor(Math.random() * colors.length)],
//     });
//   }

//   render() {
//     return (
//       <Scene>
//         <Camera><Cursor/></Camera>

//         <Sky/>

//         <Light type="ambient" color="#888"/>
//         <Light type="directional" intensity="0.5" position="-1 1 0"/>
//         <Light type="directional" intensity="1" position="1 1 0"/>

//         <Entity geometry="primitive: box" material={{color: this.state.color}}
//                 onClick={this.changeColor}
//                 position="0 0 -5">
//           <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
//         </Entity>
//       </Scene>
//     );
//   }
// }

// ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
//-------------------------------//
import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import { MiniInfoBar } from 'components';

export default class About extends Component {
  state = {
    showKitten: false
  }

  handleToggleKitten() {
    this.setState({showKitten: !this.state.showKitten});
  }

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <DocumentMeta title="React Redux Example: About Us"/>

        <p>This project was orginally created by Erik Rasmussen
          (<a href="https://twitter.com/erikras" target="_blank">@erikras</a>), but has since seen many contributions
          from the open source community. Thank you to <a
            href="https://github.com/erikras/react-redux-universal-hot-example/graphs/contributors"
            target="_blank">all the contributors</a>.
        </p>

        <h3>Mini Bar <span style={{color: '#aaa'}}>(not that kind)</span></h3>

        <p>Hey! You found the mini info bar! The following component is display-only. Note that it shows the same
          time as the info bar.</p>

        <MiniInfoBar/>

        <h3>Images</h3>

        <p>
          Psst! Would you like to see a kitten?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={::this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
