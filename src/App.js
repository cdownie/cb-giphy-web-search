import './App.css';
import GiphySearch from './GiphySearch';
import Gallery from './Gallery';

import { useState } from "react";


function App() {
  const [images, setImages] = useState(["cat1", "cat2"]);

  return (
    <div className="App">
      <header className="App-header">
        <GiphySearch></GiphySearch>
      </header>

      <Gallery images={images}></Gallery>

    </div>
  );
}



export default App;
