import React from 'react';
import {Paper,Typography} from '@material-ui/core';
class VideoDetail extends React.Component{
    render(){


        const {video} = this.props;
        if(!video)
        return(<div>Loading...</div>);
        console.log(video.id.videoId);
        const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
        //const videosrc =`https://www.youtube.com/embed/2JWPphMjXUU`
        console.log(videosrc)
        return(
        <React.Fragment>
         <Paper elevation={6} style={{height:'70%'}}>

        <iframe frameBorder="0" height="100%"  width="100%" title="Video Player" src={videosrc}/>

         </Paper>

         <Paper elevation={6} style={{padding:'15px'}}>

        <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>


         </Paper>
        
        </React.Fragment>
        );
         
    }
}

export default VideoDetail;