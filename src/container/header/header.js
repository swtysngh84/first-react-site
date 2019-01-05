import React from 'react'
import {Navbar,NavbarBrand,Nav,NavItem,NavLink,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as authAction from '../../Action/auth'
class  Header extends React.Component{
    btnlogout_Click(e){
            e.preventDefault();
            this.props.action.log.logout();
    }
    render(){
       
    return(
        <Navbar color="light" light expand="md">
          <NavbarBrand href='/'>Employee Mgt</NavbarBrand>
        
          
            <Nav className="ml-auto" navbar>
              
              <NavItem>
             <NavLink tag={Link} to="/register">Register</NavLink>
              </NavItem>
              <NavItem>
               <NavLink tag={Link} to="/view">View</NavLink>
               
              </NavItem>
              <NavItem>
             <Button onClick={this.btnlogout_Click.bind(this)}> Logout</Button>
               
              </NavItem>
              </Nav>
          
        </Navbar>
    )
}
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
export default connect(mapStateToPro,mapDispatchToProps)(Header)

