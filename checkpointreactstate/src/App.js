
import React from 'react'
import './App.css';
import img from './32.JPG'


export default class App extends React.Component {
  state = {
    fullName: "Mohamed jelassi",
    Bio: "i am",
    src: img,
    profession: "audio engineering",
    show: false,
    timer: 0,
  };
   
  handleClick = () => this.setState({show: !this.state.show , timer:0});

  componentDidMount(){
    setInterval( ()=> {
      this.setState({
        timer: this.state.timer +1
      })
    } ,1000  )
  }
  render() {
     return(
       
       
    <div>
   
    <div className={this.state.show ? "visible" : "hide"}>
      <h1> Greetings I'm <span>{this.state.fullName}</span></h1>
      <h2>my Bio: <span>{this.state.Bio}</span></h2>
      <img className="img" src={this.state.src} alt="something?"/>
      <h2> <span>I'm {this.state.profession}</span></h2>
      <h2>{this.state.timer}</h2>
     
    </div>
     <div className="visible">
       <button className="button" onClick={this.handleClick}>Show</button>
     </div>
    </div>
    )
  }
}


