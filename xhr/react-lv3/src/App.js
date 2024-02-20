import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (response.ok) {
        const postsData = await response.json();
        setPosts(postsData);
      } else {
        console.error('Failed to fetch posts.');
      }
    } catch (error) {
      console.error('Network error occurred.', error);
    }
  };

  const addPost = async () => {
    if (title && body) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Post added successfully:', responseData.id);
          displaySuccessMessage();
          fetchPosts(); // Optional: Refresh posts after adding a new one
        } else {
          console.error('Failed to add post.');
        }
      } catch (error) {
        console.error('Network error occurred.', error);
      }
    } else {
      console.error('Title and body are required.');
    }
  };

  const displaySuccessMessage = () => {
    setSuccessMessage('Post added successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      // Optional: Clear form inputs after successful submission
      setTitle('');
      setBody('');
    }, 3000); // Display success message for 3 seconds
  };

  return (
    <div>
      <div id="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {post.id}-{post.title}
          </div>
        ))}
      </div>

      <form onSubmit={(event) => {
        event.preventDefault();
        addPost();
      }}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>

      {successMessage && (
        <div style={{ color: 'green' }}>{successMessage}</div>
      )}
    </div>
  );
}

export default App;
