
import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";



const spotify = new SpotifyWebApi();

function App() {
  const [{ user , token }, dispatch] = useDataLayerValue();

  //useEffect hook to change states after getting access token (generally after a given condition)
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>{
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

    }

    console.log("I HAVE A TOKEN: ", _token);
  }, []); //brackets is number of time it can change, [name, age, yeet] would change every time each one changes once
  
  
  return (
    
    <div className='app'> {
        token ? <Player spotify = {spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
