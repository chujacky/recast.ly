
var searchYouTube = (options, callback) => {
  // TODO
    // url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&videoCaption=closedCaption&key=${options.key}`, 
  // var MyToggleDebounced = _.debounce(MyToggleFunction, 500);

  $.ajax({
    
    url: `https://www.googleapis.com/youtube/v3/search`, 
    type: 'GET',
    data: {'maxResults': options.max,
                 'part': 'snippet',
                 'q': options.query,
                 'type': 'video', 
                'key': options.key},
    contentType: 'application/json',
    success: (data) => {callback(data.items)},
    dataType: 'json',
    error: () => {console.log('error')}
  });
  
    // let myCallback = function(stuffBeingPassedIn) {
    //   console.log('wow');
    // }

};



export default searchYouTube;
