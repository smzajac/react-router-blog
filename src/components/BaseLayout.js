import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component{

  render(){
    return(

      <div>
      <div className="App-header">
      <h3>
      <NavLink activeClassName="selected" className="App-Link" exact to="/">Home Page</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/create">Create Post</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/show">Show All Posts</NavLink>
      </h3>
      </div>
      {this.props.children}
      <footer>
      <div className="App-footer">
      footer
      </div>
      </footer>
      </div>

    )
  }
}
