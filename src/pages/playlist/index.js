import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/Loading';

import { Creators as PlayerActions } from '../../store/ducks/player';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import {
  Container, Header, SongList, SongItem,
} from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    playlistDetails: PropTypes.shape({
      playlist: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            album: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
          }),
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id: currentId },
      },
    } = this.props;

    const {
      match: {
        params: { id: prevId },
      },
    } = prevProps;

    if (prevId !== currentId) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const { getPlaylistDetailsRequest } = this.props;

    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const {
      loadSong,
      currentSong,
      playlistDetails: { data: playlist },
    } = this.props;

    const { selectedSong } = this.state;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && (
            <p>
              {playlist.songs.length}
              {' '}
músicas
            </p>
            )}

            <button type="button">PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="Duração" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song })}
                  onDoubleClick={() => loadSong(song)}
                  selected={selectedSong && selectedSong.id === song.id}
                  playing={currentSong && currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>{song.duration}</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;

    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  currentSong: state.player.currentSong,
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
