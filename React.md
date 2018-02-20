[TOC]



##### Prop

###### Directly use the input argument

```react
const VideoListItem = (props) => {
    // this can be avoid by make the props.video to be {video}
    const video = props.video;
    return <li>Video</li>
};
```

to be

```react
const VideoListItem = ({video}) => {
    // this can be avoid by make the props.video to be {video}
    // const video = props.video;
    return <li>Video</li>
};
```





##### State

###### Fast way to set state: this.setState(data);

```react
YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({videos: videos});
});
```

is same as:

```react
YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({videos});
});
```

Since the name of the argue is same as the state.



##### Array

###### Using map to iterate through the array

```react
var array = [1, 2, 3];
array.map(function(number) {
    return number * 2;
});
```

The function will execute for each element in the array



##### String

###### Concatenate string

` is the key under esc

```react
const string1 = 'second part of the string'
const string2 = `first part of the string${string1}` 
```

