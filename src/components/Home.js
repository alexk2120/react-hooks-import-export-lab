import React from "react";
import {username, city} from "../data/user"
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

let movieDisplay = document.getElementById('movie-display')
export default Home;