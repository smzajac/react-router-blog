import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Blogs extends Component{

  state={
    authorName: "",
    blogTitle: "",
    post: "",
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
  }

  addToBlog = (e) =>{
    e.preventDefault();
    this.setState({authorName: e.target.value, blogTitle: e.target.value, post: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/',{
      method: "POST",
      body: listItem,
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({authorName: '', blogTitle: '', post: ''});
  }

  render(){


    return(
      <div>
      let posts = this.props.posts
      </div>
    )
  }
}
