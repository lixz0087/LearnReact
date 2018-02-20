// Make sure import React in ever file, since when we use JSX, it is actually using React.createElement()
import React, {Component} from 'react';

// This is called functional component
// const SearchBar = () => {
//     return <input />
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange(event) {
        console.log(event);
    }

    render() {
        return <input onChange={this.onInputChange} />
    }
}

export default SearchBar;