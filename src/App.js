import './App.css';
import GiphySearch from './GiphySearch';
import Gallery from './Gallery';

import { useState } from "react";


function App() {
  const [images, setImages] = useState(["http://placekitten.com/200/300", "http://placekitten.com/220/270"]);

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
