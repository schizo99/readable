import React, { Component } from 'react';
import Posts from './Posts';
import PostDetail from './PostDetail'
import AddComment from './AddComment'
import AddPost from './AddPost'
import {Route} from 'react-router-dom'
import '../App.css';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" render={() => (
          <Posts />
        )}/>
        <Route path="/category/:category" render={(props) => (
          <Posts category={props.match.params.category}/>
        )}/>
        <Route path="/posts/:postid" render={(props) => (
          <PostDetail postid={props.match.params.postid}/>
        )}/>
        <Route path="/add/comment/:parentId" render={(props) => (
          <AddComment {...props} parentId={props.match.params.parentId}></AddComment>
        )}/>        
         <Route path="/add/post/:category?" render={(props) => (
          <AddPost {...props} category={props.match.params.category}/>
        )}/>
      </div>
      
    );
  }
}

export default App
