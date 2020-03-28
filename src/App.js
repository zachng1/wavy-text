import React from 'react';
import './App.css';
import GraphemeSplitter from 'grapheme-splitter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate_text: "Hello Sakura, Hugo, & Jack!",
      colour: "black",
      wave: "woff",
      rotate: "roff"
    };
  }

  searchChange = (event) => {
    this.setState({animate_text: event.target.value});
  }

  colourChange = (event) => {
    this.setState({colour: event.target.value});
  }

  waveChange = (event) => {
    this.setState({wave: event.target.value});
  }

  rotateChange = (event) => {
    this.setState({rotate: event.target.value});
  }

  render() {
    return (
      <div>
        <div className = {"top-centre"}>
          <TextBox 
          animate_text={this.state.animate_text}
          onChange = {this.searchChange}/>
          <Options 
          colourChange={this.colourChange}
          waveChange={this.waveChange}
          rotateChange={this.rotateChange}/>
        </div>
        <div className = {"centre-screen"}>
          <AnimationBox
          animate_text = {this.state.animate_text}
          colour = {this.state.colour}
          wave = {this.state.wave}
          rotate = {this.state.rotate} 
          />
        </div>
      </div>
    )
  }
}

const Options = ({colourChange, waveChange, rotateChange}) => {
  return (
    <form className={"options-row"}>
      <label>Colour
        <select onChange={colourChange}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="rainbow">Rainbow</option>
        </select>
      </label>
      <label>Wave
        <select onChange={waveChange}>
          <option value="woff">Off</option>
          <option value="won">On</option>
        </select>
      </label>
      <label>Rotate
        <select onChange={rotateChange}>
          <option value="roff">Off</option>
          <option value="ron">On</option>
        </select>
      </label>
      
    </form>
  )
}

const AnimationBox = ({animate_text, colour, wave, rotate}) => {
  const splitter = new GraphemeSplitter();
  const splittext = splitter.splitGraphemes(animate_text);
  return (
    <div id="defaultdiv" className = "default">
      <div id="rotatediv" className = {"rotatecontainer " + rotate}>
        <div id="colourdiv" className = {colour}>
          <div id="wavediv" className = "wavecontainer">
            {splittext.map((letter, index)=> {
              if (letter === ' ') return <div className = {wave} style={{"animation-delay": index/10+'s'}}>&#160;</div>;
              else return <div className = {wave} style={{"animation-delay":index/10+'s'}}>{letter}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


const TextBox = ({animate_text, onChange}) => {
  return (
      <input 
      type= "text"
      value = {animate_text}
      onChange = {onChange}/>
  )
}

export default App;