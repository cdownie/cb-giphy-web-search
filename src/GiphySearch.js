import { useState } from "react";

function GiphySearch(props){
    const [qry, setQry] = useState("");
    const [desc, setDesc] = useState("");
    const [position, setPosition] = useState(0);

    const runQuery = (e) => {
        e.preventDefault();

        // make a query with the search params
        console.log('search')
        console.log(props.setResuls)

        // call setResults with some (faked) results
       if (props.setResults)
            props.setResults(["http://placekitten.com/200/300", "http://placekitten.com/220/270"]);
    }

    return(
      <div>
        <form onSubmit={runQuery}>
            <input placeholder='Search' type='text' value={qry} onChange={e => setQry(e.target.value)} />
            <input placeholder='Display Text' type='text' value={desc} onChange={e => setDesc(e.target.value)} />

            <select value={position} onChange={e => setPosition(e.target.value)} >
                <option value='0'>on top of image - center top</option>
                <option value='1'>on top of image - center bottom</option>
                <option value='2'>below image - center</option>
            </select>

            <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

  export default GiphySearch