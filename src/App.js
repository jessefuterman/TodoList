import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Checkbox } from 'semantic-ui-react'
import Groups from "./Groups";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     text: "",
      selectedOption: "",
      items: [],
      pushedUser:[],
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
    
    
   let filterResult = this.state.pushedUser.filter(elem => {
     if(elem !== event.target.name){
       return true
     }else{
       return false
     }
   }) 

   if(filterResult.length < this.state.pushedUser.length){
    this.setState({ pushedUser: filterResult })
   }else{
    this.setState({ pushedUser: this.state.pushedUser.concat(event.target.name) })
   }
    
    
    this.setState({ pushedUser: event.target.name });

    console.log(this.state.pushedUser)
    console.log(event.target.name)
  };


  handleChange = (event) => {
  
   
   
     
     this.setState({ selectedOption: event.target.value });
     console.log(this.state.selectedOption, "what is selected option")
   
   
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

 pushedUserLogic = (elem) => {
    
  let result = this.state.pushedUser.find(x => {
   return elem === x
    })   
    if(result !== undefined){
      return true
    }else{
      return false 
    }

    

 }
 
 



  listLogic = () => {
    //  let del = this.state.users.filter(x => x !== str);
    let mapOne = this.state.users.map(elem => (
      <li className = "listLine">
    <input type= "Checkbox" name = {elem}  onChange ={this.onChange}   /> 
        {elem}

          
       
         
        
      
        <button className = "buttonThree" onClick = {(event) => {this.handleSubmit(event,elem)}}>Add to Group</button>
       
        
      </li>
    ));

    return mapOne;
  };

  render() {
    return (
      <div className="NameList">
        <div>
          <Groups passingUsers={this.state.users}  passingPushedUsers={this.state.pushedUser} passingGroup = {this.state.selectedOption} />
          <h4 className="App">Music Fans Unite</h4>
        </div>
        <div>
          <ul>{this.listLogic()}</ul>
          <select value= {this.state.selectedOption}  onChange={this.handleChange}  >
        <option value='LatinJazz' > Add to LatinJazz Fans  </option>
        <option value='FunkFans'  >Add to Funk Fans</option> 
        <option value='JazzCats'>Add to Jazz Cats</option>
       <option value='HouseHeads'>Add to House Heads</option>

       </select>
        </div>
      </div>
    );
  }
}
export default App;
