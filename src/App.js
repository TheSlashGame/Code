import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users ').then(responce => responce.json()),
      fetch('https://jsonplaceholder.typicode.com/posts ').then(responce => responce.json())
    ]).then(([fUsers, fPosts]) => {
        setUsers(fUsers);
        setPosts(fPosts);
    });
  }, []);

  const Author = (id) =>
    users.find(user => user.id === id).name;

   return (
    <div className="app-container">
      <h1>Посты</h1>

      {posts.map(post => (
        <div key={post.id} className="post-card">
          <strong className="post-author">{Author(post.userId)}</strong>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
