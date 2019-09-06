import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {artistListAll , altrisList} from '../actions';

import Search from '../component/search';
import ArtistList from '../component/artists_list'

class HomeContainer extends Component {

    componentWillMount(){
       this.props.artistListAll()
    }

    getKeyword = (event) => {
        let key = event.target.value;
        this.props.altrisList(key)
    }


    render() {
        
        return (
            <div>
                <Search keywords={this.getKeyword}/>
                <ArtistList artists={this.props.artist.artistList}/>
            </div>
        );
    }
}

function mapStateToProps(state){

    return{
        artist: state.artist
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistListAll,altrisList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);