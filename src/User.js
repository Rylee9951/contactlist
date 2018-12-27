import React, { Component } from 'react';
import Contact from './Users.json'
import './user.css'
import 'font-awesome/css/font-awesome.css'
 
class User extends Component {
  state = { 
    picture: '',
    first: '',
    last: '',
    email: '',
    phone: '',
    city: '',
    state: ''
   }

   componentDidMount() {
     const user = Contact.find(user => user.id == this.props.match.params.id)

     this.setState({
      picture: user.picture.large,
      first: user.name.first,
      last: user.name.last,
      email: user.email,
      phone: user.cell,
      city: user.location.city,
      state: user.location.state
     })
   }
  
   goBack = () => {
     this.props.history.goBack()
   }
  render() { 
    return ( 
      <div className='userContainer'>
        <div className='imgContainer'>
          <button onClick={this.goBack}><i className="fa fa-arrow-left"></i></button>
          <img src={this.state.picture} alt='' />
        </div>
        <div className='label'><i className='fa fa-user'></i>  <span>{this.state.first} {this.state.last}</span></div>
        <div className='label'><i className='fa fa-envelope'></i>{this.state.email}</div>
        <div className='label'><i className='fa fa-mobile'></i>{this.state.phone}</div>
        <div className='label'><i className='fa fa-globe'></i><span>{this.state.city}, {this.state.state}</span></div>
      </div>
     );
  }
}
 
export default User;