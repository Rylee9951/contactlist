import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import User from './Users.json'
import './home.css'

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container'>
        <div className='header'>
          <h1>My Peeps</h1>
        </div>
        <div className='usersContainer'>
          {User.map(user => (
            <Link to={`users/${user.id}`} key={user.id}>
              <div className='userWrap'>
                <img className='userThumb' src={user.picture.thumbnail} alt='' />
                <p className='userName'>{user.name.first} {user.name.last}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
     );
  }
}
 
export default Home;