import React, {Component} from 'react';
import PostList from './PostList';


export default class CreatePost extends Component{

  state = {
    authorName: "",
    blogTitle: "",
    post: "",
  }

  handleName = (e) => {
    this.setState({authorName: e.target.value});
  }

  handleTitle = (e) => {
    this.setState({blogTitle: e.target.value});
  }

  handlePost = (e) => {
    this.setState({post: e.target.value});
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
        <form>
        <div>
        <label>Authors Name</label>
        <input onChange={this.handleName} value={this.state.authorName} placeholder="name" name="name"/>
        </div>

        <div>
        <label>Blog Title</label>
        <input onChange={this.handleTitle} value={this.state.blogTitle} placeholder="title" name="blogTitle"/>
        </div>

        <div>
        <label>Write your Blog...</label>
        <textarea onChange={this.handlePost} value={this.state.post} name="blogText">Enter text here... </textarea>
        </div>

        <button onClick={this.addToBlog}>Submit</button>
        </form>
      </div>
    )
  }
}


{/*authors name, title, write your blog, submit button  */}
