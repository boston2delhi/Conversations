import React, { Component } from 'react';
import PropTypes from 'prop-types';

let loadYT

export default class YouTube extends Component {

  constructor(props){
    super(props);
    this.state = {
      videoState: 3,
    }
    this.stateChangeHandler = this.stateChangeHandler.bind(this)
    this.onReady = this.onReady.bind(this)
  }


  componentDidMount () {
    // if (!loadYT) {
    //   loadYT = new Promise((resolve) => {
    //     const tag = document.createElement('script')
    //     tag.src = 'https://www.youtube.com/iframe_api'
    //     const firstScriptTag = document.getElementsByTagName('script')[0]
    //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    //     window.onYouTubeIframeAPIReady = () => resolve(window.YT)
    //   })
    //   console.log(loadYT)
    // }
    // loadYT.then((YT) => {
    //   this.player = new YT.Player(this.youtubePlayerAnchor, {
    //     height: this.props.height || 390,
    //     width: this.props.width || 640,
    //     videoId: this.props.YTid,
    //     autoplay: 1,
    //     events: {
    //       onStateChange: this.stateChangeHandler
    //     }
    //   })
    // })
  }

  stateChangeHandler = (e) => {
    this.setState({videoState:e.target.getPlayerState()})

  }

  onReady = (e) => {
    console.log(e.target)
    console.log(e.target.playVideo())
  }

  render () {

    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
      console.log(loadYT)
    }
    loadYT.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: this.props.height || 780,
        width: this.props.width ||  1280,
        autoplay: 1,
        videoId: this.props.YTid,

        events: {
          onStateChange: this.stateChangeHandler,
          onReady: this.onReady
        }
      })
    })

    let temp = <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>

    let foregroundImage = null;

    if (this.state.videoState === 3) {
      foregroundImage = <img src ="http://weclipart.com/gimg/540583F311FF4A88/India-Map-Clip-Art6.png" />
    }

    return (
      <div>

      <section className='youtubeComponent-wrapper'>
        {temp}
      </section>

      {foregroundImage}
      </div>
    )


  }
}
//
// YouTube.propTypes = {
//   YTid: PropTypes.string.required,
//   width: PropTypes.number,
//   height: PropTypes.number,
// }
