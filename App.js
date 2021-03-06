
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
class App extends Component {
    state={
        videos:[],
        selectedVideo:null
    }
    onTermSubmit = async term=>{
       const response = await youtube.get('/search',{
           params:{
               q:term
           }
       })
       this.setState({videos:response.data.items});
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }
    render() { 
        return (
        <div className='ui container'>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <h3>{this.state.videos.length} Results has been fetched....</h3>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div> );
    }
}
 
export default App;