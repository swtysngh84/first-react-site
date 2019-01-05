import React from 'react'
import {Form,FormGroup,Label,Input} from 'reactstrap'

//import axios from 'axios'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as authAction from '../../Action/auth'
class Login extends React.Component{
state={
    email:"",
    password:""
}
getvalue=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
   
}
    user_login(e){
        
      e.preventDefault();
        this.props.action.log.logauth({
            "email": this.state.email,
            "password": this.state.password
        });
      //  console.log(this.props.auth.token);
       
    }
    
    render(){
    return(
        <div>
        <Form>
            <FormGroup >
            <Label>Email:</Label>
            <Input type="email" name="email" onBlur={this.getvalue}/>
            </FormGroup>
            <FormGroup>
            <Label>Password:</Label>
            <Input type="password" name="password" autoComplete="true"  onBlur={this.getvalue}/>
            

            </FormGroup>
            <button onClick={this.user_login.bind(this)}>Login</button> 
        </Form></div>
    );}
}
const mapStateToPro=(state)=>{
    const {auth} =state;
    return{
        auth:auth
    }
};
const mapDispatchToProps=dispatch=>({
    action:{
        log:bindActionCreators(authAction,dispatch)
    }
        

  
})
export default connect(mapStateToPro,mapDispatchToProps)(Login)