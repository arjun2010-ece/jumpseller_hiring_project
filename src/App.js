import React, { useState, useEffect,Fragment } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {getPosts} from './api';
import {Search} from './components/Search';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState(0);
 
  useEffect(() => {
    setLoading(true);
    getPosts().then(data => {  
      setPosts(data);
      setVisiblePosts(data);
      setLength(data.length)
      setLoading(false);
    });
  }, []);

  const showLoading = () => (
    loading && (
      <div className="text-center mt-5" data-testid='loading__test'>
          <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
          </div>
          <p>
          <strong>Please wait the content is being loaded from servers</strong>
          </p>
      </div>
  )
  )

  const showContent = () => (
    !loading && posts !== undefined && posts.length > 0 && (
      <Fragment>
          <h2 className='text-center mb-5 mt-5'>Posts</h2>
          <small>
            { length > 0 ? `Found: ${length} posts`: 'No Posts found'}
          </small>
          {visiblePosts.map((el, i) => (
            <Link key={i} to={`/posts/details/${el.id}`}>
              <p className='text-muted mt-3 border'>{el.title}</p>
            </Link>
          ))} 
      </Fragment>
    )
  )

  const showPostsnotFound = () => (
    !loading && !posts && posts === undefined  && (
      <h2>Posts Not found</h2>
    )
  )

  const search = (search) => {
    let filterPosts = posts.filter(p => p.title.indexOf(search) !== -1);
    setLength(filterPosts.length);
    setVisiblePosts(filterPosts);
  }

  return (
    <div className='container'>
      <Search search={search}  />
      {showLoading()}
      {showPostsnotFound()}
      {showContent()}
    </div>
  )
}
export default App;