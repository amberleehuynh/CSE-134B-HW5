import React, { useState } from 'react';

function App() {
  const [id, setId] = useState("");
  const [articleName, setArticleName] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [response, setResponse] = useState("");
  const [date, setDate] = useState("");

  const handlePost = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, articleName: articleName, articleBody: articleBody, date: date })
    };
    const response = await fetch('https://httpbin.org/post', requestOptions);
    const data = await response.json();
    setResponse(data.message);
  };

  const handleGet = async () => {
    const response = await fetch('https://httpbin.org/get');
    const data = await response.json();
    setResponse(JSON.stringify(data));
  };

  const handlePut = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, articleName: articleName, articleBody: articleBody, date: date })
    };
    const response = await fetch('https://httpbin.org/put', requestOptions);
    const data = await response.json();
    setResponse(data.message);
  };

  const handleDelete = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    };
    const response = await fetch('https://httpbin.org/delete', requestOptions);
    const data = await response.json();
    setResponse(data.message);
  };

  const toggleTheme = (e) => {
    const isChecked = e.target.checked;
    const body = document.body;
    
    if (isChecked) {
      body.classList.add('dark-theme');
    } 
    else {
      body.classList.remove('dark-theme');
    }
  };

  return (
    <div className="App">
      <div className="top-container">
        <nav>
          <a href="./">
            <img className="home_icon" src="images/home.png" alt="home" />
          </a>
          <ul className="nav_links">
            <li><a href="about.html">About</a></li>
            <li><a href="work.html">Work</a></li> 
            <li><a href="projects.html">Projects</a></li>
            <li><a href="methodtest.html">Method Test</a></li>
            <li><a href="webcomponent.html">Web Component</a></li>
            <li>
              <div className="toggle">
                <input type="checkbox" id="toggle" onChange={toggleTheme} />
                <label htmlFor="toggle"></label>
              </div>
            </li>
          </ul>  
        </nav>
      </div>

      <form id="articleForm">
        <label htmlFor="id">ID:</label><br />
        <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} /><br /><br />
        <label htmlFor="article_name">Article Name:</label><br />
        <input type="text" id="article_name" name="article_name" value={articleName} onChange={(e) => setArticleName(e.target.value)} /><br /><br />
        <label htmlFor="article_body">Article Body:</label><br />
        <input type="text" id="article_body" name="article_body" value={articleBody} onChange={(e) => setArticleBody(e.target.value)} /><br /><br />
        <label htmlFor="date">Date:</label><br />
        <input type="text" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
        
        <button type="button" onClick={handlePost}>POST</button>
        <button type="button" onClick={handleGet}>GET</button>
        <button type="button" onClick={handlePut}>PUT</button>
        <button type="button" onClick={handleDelete}>DELETE</button>
      
        <output id="response">{response}</output>
      </form>
    </div>
  );
}

export default App;