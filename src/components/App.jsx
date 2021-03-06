import VideoList from "./VideoList.js";
import exampleVideoData from "../data/exampleVideoData.js";
import VideoPlayer from "./VideoPlayer.js";
// import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.onTitleClick = this.onTitleClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  
  onTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearch(topic) {
    this.props.searchYouTube({ key: YOUTUBE_API_KEY, query: topic, max: 10 }, (data) => {
      this.setState({
        videoList: data
      });
    });
  }
  

  componentDidMount() {
    console.log('comp');
    this.props.searchYouTube({ key: YOUTUBE_API_KEY, query: 'cats', max: 10 }, (data) => {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
      // this.state.videoList = data;    
    });
  }
  render() {
    
    return (
<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search search={this.onSearch}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videoList} function={this.onTitleClick}/>
      </div>
    </div>
  </div>);

  }

}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
