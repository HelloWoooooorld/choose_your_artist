import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
import ArtistList from './artists_list'

class Home extends Component {
    state = {
        artist: []
    }

    componentWillMount(){
        axios.get("http://localhost:3004/artists")
        .then(response => {
            this.setState({
                artist: response.data
            })
        })
    }

    getKeyword = (event) => {
        let key = event.target.value;
        console.log(key);
    }


    render() {
        const {artist} = this.state
        return (
            <div>
                <Search keywords={this.getKeyword}/>
                <ArtistList artists={artist}/> 
            </div>
        );
    }
}

export default Home;