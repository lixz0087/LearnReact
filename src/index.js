import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Here is a the api key of youtube API
// We also installed a package for youtube search: npm install --save youtube-api-search
const API_KEY = 'AIzaSyCl8O1kKgSne3u8IHDfoQ-IvHpAB1SMY9s';


// 1. Create a new Component. This component should produce some HTML
// const App = function() {
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     )
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render() {
        // This lib make the videoSearch function to be a function can only called 300ms once
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={term => videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    // this function will update the selected video when we select a video
                    // Now the video_list component's props has a property called onVideoSelect
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

// 2. Take this component's generated HTML and put it on the page(in the DOM)

// This is wrong, since the App is actually a class, we can't render a class in the DOM
// We should render a instance
// ReactDOM.render(App)

// <App /> is a fast way to make a new instance, the second argument is the target to render to
ReactDOM.render(<App/>, document.querySelector('.container'));