import './App.css';
import GiphySearch from './GiphySearch';
import Gallery from './Gallery';

import { useState } from "react";


function App() {
  const [images, setImages] = useState([]);

  const setResult = (img) => {
    console.log(img);
    setImages(img);
  }

  return (
    <div className="App">
      <header className="App-header">
        <GiphySearch setResults={setResult}></GiphySearch>
      </header>

      <Gallery images={images}></Gallery>

    </div>
  );
}



export default App;
