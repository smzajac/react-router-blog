import React, {Component} from 'react';
import PostList from './PostList';


export default class CreatePost extends Component{

  state = {
    authorName: "",
    blogTitle: "",
    post: "",
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
