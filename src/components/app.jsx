import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "jUwpNzg9IcyrK"
    }

    this.search('disney');
  }

  search = (query) => {
    giphy('sdVsZU1VmgSpYFgMxyaf84rsFOeliAnZ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
        // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: "jUwpNzg9IcyrKf" },
      { id: "aGgatrxwzn9UmBqH6l"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      );
  }
}

export default App;
