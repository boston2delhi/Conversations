import React, { Component } from 'react';
import YouTube from 'react-youtube';
import PreBufferVideos from './prebuffervideos';

class VideoComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoIndex: 0,
      timePoint:0,
      videoArray: ["RmjpwFlnnS8","Nm7aEQsohI0","nOnJpEECI5U"],
      videoId: "RmjpwFlnnS8",
      backgroundSwitchB: false
    }
    this.changeVideo = this.changeVideo.bind(this)
    this.changeTime = this.changeTime.bind(this)
    this.backgroundSwitch = this.backgroundSwitch.bind(this)
    // this.switchTime = this.switchTime.bind(this)
  }
  changeVideo(event){
    const index =(this.state.videoIndex + 1) % this.state.videoArray.length;
    this.setState({videoIndex: index})
    this.setState({videoId: this.state.videoArray[this.state.videoIndex]})
    this.setState({timePoint:0})
  }
  changeTime(event){
    const randMin = Math.random() * 180
    const newTime = `${randMin}`
    this.setState({timePoint:newTime})
  }

  backgroundSwitch(event){
    this.setState({backgroundSwitchB: !this.state.backgroundSwitchB})
  }


  render(){
    let changeVideo = (event) => this.changeVideo(event)
    let changeTime = (event) => this.changeTime(event)
    let backgroundSwitch = (event) => this.backgroundSwitch(event)
    // let switchTime = (event, opts) => this.switchTime(event, opts)

    const opts = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        fs: 0,
        rel: 0,
        start: this.state.timePoint
    }
  }

  if (this.state.backgroundSwitchB === false){
    return(
      <div>
        <button onClick={changeVideo}>Change Video</button>
        <button onClick={changeTime}>Change Timepoint (No Pre-loading)</button>
        <button onClick={backgroundSwitch}>Background Switch</button>

        <h4 className = "details">{this.state.timePoint}</h4>

        <div className="video-background video-foreground">

          <YouTube
            videoId = {this.state.videoId}
            opts={opts}
            onReady={this._onReady}
          />

          </div>
          </div>

    )
  } else {
    return(
      <div>

        <button onClick={backgroundSwitch}>Manual</button>
        // <div className="video-background video-foreground">
        <PreBufferVideos YTid = "RmjpwFlnnS8">
        </PreBufferVideos>
        // </div>
        </div>
    )
  }
  }
  _onReady(event) {
  // access to player in all event handlers via event.target
  }
}
export default VideoComponent;
