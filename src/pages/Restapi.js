import React, { useEffect, useState } from "react";

const PostForm = ({ onSubmit, title, body, setTitle, setBody }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, body);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter body"
      />
      <input type="submit" value="Add Post" />
    </form>
  );
};

const Restapi = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const addPost = async (title, body) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: Math.random().toString(36).slice(2),
        }),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts((prevPosts) => [data, ...prevPosts]);
          setTitle("");
          setBody("");
        })
        .catch((e) => console.log(e.message));
    } catch (error) {
      console.error("Error adding post:", error.message);
    }
  };
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  return (
    <>
      <div className="container mt-4 border p-3">
        <PostForm
          title={title}
          body={body}
          onSubmit={addPost}
          setTitle={setTitle}
          setBody={setBody}
        />
      </div>
      <div className="container mt-4">
        {posts.map((post) => (
          <div className="card mb-3" key={post.id}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.body}</p>
              <button
                className="btn btn-secondary"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Restapi;
