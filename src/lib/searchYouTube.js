var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&videoCaption=closedCaption&key=${options.key}`, 
    type: 'GET',
    data: {'maxResults': options.max,
                 'part': 'snippet',
                 'q': options.query,
                 'type': ''},
    contentType: 'application/json',
    success: (data) => {callback(data.items)},
    dataType: 'json',
    error: () => {console.log('error')}
  });

// console.log(buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '10',
//                  'part': 'snippet',
//                  'q': 'data',
//                  'type': ''})  
};



export default searchYouTube;
