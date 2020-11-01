import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";

export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.onFilmCardOverHandle = this.onFilmCardOverHandle.bind(this);
    this.onFilmCardLeaveHandle = this.onFilmCardLeaveHandle.bind(this);

    this.lastTimeout = null;

    this.state = {
      activeCardID: 0,
    };
  }

  onFilmCardOverHandle(id) {
    if (this.lastTimeout) {
      clearTimeout(this.lastTimeout);
    }

    this.lastTimeout = setTimeout(() => {
      this.setState({activeCardID: id});
    }, 1000);
  }

  onFilmCardLeaveHandle() {
    this.setState({activeCardID: 0});
    clearTimeout(this.lastTimeout);
    this.lastTimeout = null;
  }

  componentWillUnmount() {
    if (this.lastTimeout) {
      clearTimeout(this.lastTimeout);
    }
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard key ={`${i}`}
            film={film}
            onFilmCardOver={this.onFilmCardOverHandle}
            onFilmCardLeave={this.onFilmCardLeaveHandle}>
            <VideoPlayer
              isPlaying={this.state.activeCardID === film.id}
              src={film.src}
              poster={film.filmPoster}
              muted={true}
              width="280"
              height="175"/>
          </MovieCard>

        ))}
      </div>
    );
  }

}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmPoster: PropTypes.string.isRequired,
    filmTitle: PropTypes.string.isRequired,
  })).isRequired,
};
