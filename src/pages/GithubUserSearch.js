import { useState } from "react";
import "./github.css";

const API_URL = "https://api.github.com";

export default function GithubUserSearch() {
  const [username, setUserName] = useState("");
  const [results, setResults] = useState([]);
  const [repos, setRepos] = useState([]);

  async function fetchResult(username) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${username}`);
      const data = await response.json();
      setResults(data.items);
    } catch (e) {}
  }
  // curl -H 'Authorization: token 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' https://api.github.com/users/mustali17/repos

  async function fetchRepos(username) {
    try {
      const response = await fetch(`${API_URL}/users/${username}/repos`, {
        headers: {
          Authorization: "token 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",
        },
      });
      const data = await response.json();
      setRepos(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchResult(username);
    fetchRepos(username);
  }

  const Result = ({ avatarURL, username, htmlURL }) => {
    return (
      <div className="user">
        <img src={avatarURL} alt="Username" width="50px" height="50px" />
        <a href={htmlURL}>{username}</a>
      </div>
    );
  };
  const Repo = ({ repo, htmlURL, index }) => {
    return (
      <div>
        <h3>
          {index + 1}) <a href={htmlURL}>{repo.name} </a>:
          <span style={{ marginLeft: "10px" }}>
            Open Issues : {repo.open_issues}
          </span>
        </h3>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="form">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            id="search"
            type="search"
            placeholder="Enter GitHub Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <h3>Result</h3>
      <div id="results">
        {results.map((user) => (
          <Result
            key={user.login}
            avatarURL={user.avatar_url}
            htmlURL={user.html_url}
            username={user.login}
          />
        ))}
      </div>
      <h3>Repositories</h3>
      <div className="repos">
        {repos.map((repo, index) => (
          <Repo htmlURL={repo.html_url} repo={repo} index={index} />
        ))}
      </div>
    </div>
  );
}
