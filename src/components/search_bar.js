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

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }



    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;