 import axios from 'axios';
const KEY="AIzaSyD1FJji-N9Czmz8vuj7Nzq-6-FHdMfxOWc";
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:25,
        key:KEY

    }
})