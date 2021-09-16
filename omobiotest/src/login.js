import React, { Component } from 'react';
import "./login.css"

export default class LoginPage extends Component {
 constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  signIn=()=>{
    var email = this.state.email;
    var password = this.state.password;

    if ((email.length==0) || (password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "http://10.0.2.2:80/DB/api.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
      var Data ={
        email: email,
        password: password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          console.log("true")
        //   this.props.navigation.navigate("HomeScreen");
            this.props.history.push('/home')
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
    }
  }

  render(){
    return (
      <div>
      <h2 className="heading">Welcome to Login Page</h2>

      <div id="email-row">
        <label for="email" id="email-lbl"><b>Email</b></label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="email"
          onChange={email=>this.setState({email})}
        //   value={this.state.data.email}
          placeholder="Enter your email"/>
      </div>

      <div id="pw-row">
        <label for="name" id="pw-lbl"><b>Password</b></label>
        <input
          name="password"
          type="password"
          class="form-control"
          id="pw"
          placeholder="Enter your password"
          minlength="8"
          onChange={password=>this.setState({password})}
        //   value={this.state.data.password}
                    required />
            </div>
            
            <div className="submit">
            <button 
                type="submit" 
                class="signup" 
                    id="signup-btn"
                onClick={()=>{
                      this.signIn()
                    }}>
                    Sign Up
                </button>
            </div>
    </div> 
  )
}
}