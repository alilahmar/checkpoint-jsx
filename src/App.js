import React from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from "./image.jpg"
import "./style.css"
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Flowers</h1>

<br />

<img src={image1} />

<br />

<img src="/rose.jpg" />

</div>

<video width="320" height="240" controls>

<source src="flowers.mkv" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
