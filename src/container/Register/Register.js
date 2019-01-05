import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
class ERegister extends React.Component{
  state ={
    name:'',
    email:'',
    gender:'',
    city:'',
    password:''
}
changeval=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    });
 
       
    
  }
  addemp=(event)=>{
    const data={
      name:this.state.name,
      email:this.state.email,
      gender:this.state.gender,
      city:this.state.city,
      password:this.state.password
    }
    console.log(data);
    axios.post("http://localhost:3000/ssave",data).then(res=>{
      //if(res.status===200){
      //console.log('Inserted Successfully!!!');
      //}\
      console.log(res);
      }).catch(e=>{
        console.log(e);
      })
  }
render(){
    return(
        <div>
            <Form >
            <FormGroup>
          <Label for="exampleNAme">Name</Label>
          <Input type="text" name="name" id="exampleNAme" placeholder="Name" onBlur={this.changeval} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" onBlur={this.changeval} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePAss">Email</Label>
          <Input type="password" name="password" id="examplePAss" placeholder="password" onBlur={this.changeval} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">City</Label>
          <Input type="select" name="city" id="exampleSelect" onChange={this.changeval}>
            <option value="surat">surat</option>
            <option value="wapi">wapi</option>
            <option value="Bharuch">Bharuch</option>
            <option value="Ank">Ankleshwar</option>
            
          </Input>
        </FormGroup>
        
       
        
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" value='M' onChange={this.changeval}/>{' '}
            Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender"  value='F' onChange={this.changeval}/>{' '}
              Fremale
            </Label>
          </FormGroup>
          
        </FormGroup>
        
        <Button name="registeremp" onClick={this.addemp}>Submit</Button>
      </Form>
        </div>
    );
}
}
export default ERegister;
