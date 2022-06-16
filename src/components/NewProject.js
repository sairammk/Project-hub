import React, {Component} from 'react'
import "./CSS/NewProject.css"

class NewProject extends Component{

    constructor(props){
     super(props);
    
     this.state = {  projectname: "",
         clientname: "",
         teamname : "",
         projectdetails : "",
         projectobjectives : "",
         designconsideration : ""
    
      }
    }
    
    handlechangeall = (event) =>{
     this.setState ( { [event.target.name] :event.target.value  } )
    }
    
    handlesubmit = (event) => {
     alert ("Project Added Successfully...");
    }
    
    render(){
    return(      
    <div className="entireForm">
      <form onSubmit = {this.handlesubmit} className="sign-up">
        <label> Project Name </label> <br/>
        <input  type="text" name="projectname" placeholder="Enter Project Name..." value={this.state.projectname}  
          onChange={this.handlechangeall} /> <br/>
    
        <label> Client Name </label><br/>
        <input  type="text" name="clientname" placeholder="Enter Client Name.." value= {this.state.clientname} 
          onChange={this.handlechangeall} /> <br/>
    
        <label> Team Name </label><br/>
        <input  type="text" name="teamname" placeholder="Enter Team Name.." value= {this.state.teamname}   
        onChange={this.handlechangeall} /> <br/>
    
        <label> Project Details </label> <br />
        <textarea  value= {this.state.projectdetails}  name="projectdetails" placeholder="Enter Project Details.."
        onChange={this.handlechangeall} />   <br/>

        <label> Project Objectives </label> <br />
        <textarea  value= {this.state.projectobjectives}  name="projectobjectives" placeholder="Enter Project Objectives.."
        onChange={this.handlechangeall} />   <br/>
    
        <label> Deisgn Consideration </label> <br />
        <textarea  value= {this.state.deisgnconsiderations}  name="deisgnconsiderations" placeholder="Project Design considerations.." onChange={this.handlechangeall} />   <br/>

        <input type="submit" value="Add Project" />
      </form>
    </div>
   )
}}

export default NewProject