import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm></PostForm>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts></Posts>
        </div>
        <div className="col">
          <h2>Aсинхронные посты</h2>
          <FetchedPosts></FetchedPosts>
        </div>
      </div>
      
    </div>
  );
}

export default App;

