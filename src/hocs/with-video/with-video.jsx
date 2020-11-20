import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();
      this.onFullScreenClickHandle = this.onFullScreenClickHandle.bind(this);
      this.onPlayClickHandle = this.onPlayClickHandle.bind(this);

      this.onFilmCardOverHandle = this.onFilmCardOverHandle.bind(this);
      this.onFilmCardLeaveHandle = this.onFilmCardLeaveHandle.bind(this);

      this.lastTimeout = null;

      this.state = {
        isLoading: true,
        isPlaying: false,
      };
    }

    onPlayClickHandle() {
      const {isPlaying} = this.state;
      this.setState({isPlaying: !isPlaying});
    }

    onFullScreenClickHandle() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    onFilmCardOverHandle() {
      if (this.lastTimeout) {
        clearTimeout(this.lastTimeout);
      }

      this.lastTimeout = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    }

    onFilmCardLeaveHandle() {
      this.setState({isPlaying: false});
      clearTimeout(this.lastTimeout);
      this.lastTimeout = null;
    }


    componentDidMount() {
      const {src, width, height, muted} = this.props;
      const video = this.videoRef.current;

      video.src = src;
      video.width = width;
      video.height = height;
      video.muted = muted;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.oncanplaythrough = null;
      video.src = null;
      video.width = null;
      video.height = null;
      video.muted = null;

      if (this.lastTimeout) {
        clearTimeout(this.lastTimeout);
      }

    }

    render() {
      const {isLoading, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          onFullScreenClick={this.onFullScreenClickHandle}
          onPlayClick={this.onPlayClickHandle}
          isPlaying={isPlaying}
          onFilmCardOver={this.onFilmCardOverHandle}
          onFilmCardLeave={this.onFilmCardLeaveHandle}
          renderPlayer={(poster, className) => {
            return (
              <video
                poster={poster}
                className={className}
                ref={this.videoRef}
              />
            );
          }}
        />
      );
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      const {src,
        width,
        height,
        muted} = this.props;

      const {isPlaying} = this.state;

      video.src = src;
      video.width = width;
      video.height = height;
      video.muted = muted;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }

    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
