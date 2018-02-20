import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

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

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div> 
        )
    }
}

// 2. Take this component's generated HTML and put it on the page(in the DOM)

// This is wrong, since the App is actually a class, we can't render a class in the DOM
// We should render a instance
// ReactDOM.render(App)

// <App /> is a fast way to make a new instance, the second argument is the target to render to
ReactDOM.render(<App />, document.querySelector('.container'));