import React from "react";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";




const App = ()=> {
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h2>Создание поста</h2>
          <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
