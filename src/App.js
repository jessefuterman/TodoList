import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import { Checkbox } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     text: "",
      selectedOption: "",
      items: [],
      pushedUser:"",
      groupLatinJazz: this.props.passingLatinJazz,
      users: [
        "Jesse ",
        "Richard ",
        "Vince ",
        "KoolGuy22 ",
        "Amanda ",
        "Revolver Ocelot ",
        "Snake ",
        "Greg ",
        "Ben ",
        "Matt ",
        "Tito Puente ",
        "Braden ",
        "Adam ",
        "Alex ",
        "Nathan "
      ]
    };
  }


  
  

  onChange = event => {
   
    
    console.log(event)
  };


  handleChange = (event) => {
 
   
   
     this.onChange()
     this.setState({ selectedOption: event.target.value });
     console.log(event.target.value, "what is event target")
   
   
  };

  handleSubmit = (event, elem) => {
   console.log('is it in handlesubmit')
   
   this.setState({ pushedUser: elem })
   
   console.log(elem)
   
    this.triggerGroup()
  }

  triggerGroup = () => {
    if (this.state.selectedOption === "LatinJazzFans") {
      // this.passingGroup()
      // this.setState({
      //   groups: this.state.users[0].push(this.state.groupLatinJazz.LatinJazzFans)
      // });
      // console.log(this.state.users)
      this.LatinJazzFans();
    }

  
    if (this.state.selectedOption === "HouseHeads") {
      this.HouseHeads();
    }

    if (this.state.selectedOption === "FunkFans") {
      this.FunkFans();
    }
    if (this.state.selectedOption === "JazzCats") {
      this.JazzCats();
    }
  };

 LatinJazzFans = () => {
  
console.log("we gettin in latin?")

  




 }

 HouseHeads = () => {


 }

 FunkFans = () => {


 }

 JazzCats = () => {



 }
 
 



  listLogic = () => {
    //  let del = this.state.users.filter(x => x !== str);
    let mapOne = this.state.users.map(elem => (
      <ul>
        {elem}

          
       
         
        
      
        <button className = "buttonThree" onClick = {(event) => {this.handleSubmit(event,elem)}}>Add to Group</button>
        <Checkbox label='Add to LatinJazz Fans'   onChange={(event) => {this.handleChange(event,elem)}}  value="LatinJazzFans"  />
        <Checkbox label='Add to Funk Fans'   onChange={(event) => {this.handleChange(event,elem)}} value="FunkFans"/>
        <Checkbox label='Add to JazzCats' onChange={(event) => {this.handleChange(event,elem)}}  value = "JazzCats"/>
       <Checkbox label='Add to House Heads' onChange={(event) => {this.handleChange(event,elem)}}  value = "HouseHeads"/>
      </ul>
    ));

    return mapOne;
  };

  render() {
    return (
      <div className="NameList">
        <div>
          <Users passingUsers={this.state.users}  passingPushed={this.state.pushedUser} passingOption = {this.state.selectedOption} />
          <h4 className="App">Music Fans Unite</h4>
        </div>
        <div>
          <ul>{this.listLogic()}</ul>
        </div>
      </div>
    );
  }
}
export default App;
