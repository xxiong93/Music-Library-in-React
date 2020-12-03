import React, { Components } from 'react';
import axios from 'axios';


function App() {
  
  const [list, getMusic] = music("");

  const api = () => {
    axios.get("http://www.devcodecampmusiclibrary.com/api/music").then(
      (response) => {
        console.log(response);
        getMusic(response.data.id);
      }
    );
  }
  return (
    <div>
    <button onClick={api}>Get music</button>
    {list}
    </div>

  );
  
}


export default App;
