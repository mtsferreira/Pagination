import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get('http://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="container">
      <h2 id="title">My Blog</h2>
      <Posts posts={currentPost} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
