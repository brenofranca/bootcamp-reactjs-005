import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, Nav, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

import Loading from '../Loading';

class Sidebar extends Component {
  static propTypes = {
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        }),
      ).isRequired,
      loading: PropTypes.bool,
    }).isRequired,
    getPlaylistsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;

    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;

    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a>Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a>Seu Daily Mix</a>
            </li>
            <li>
              <a>Tocadas recentemente</a>
            </li>
            <li>
              <a>Músicas</a>
            </li>
            <li>
              <a>Álbums</a>
            </li>
            <li>
              <a>Artistas</a>
            </li>
            <li>
              <a>Estações</a>
            </li>
            <li>
              <a>Arquivos locais</a>
            </li>
            <li>
              <a>Vídeos</a>
            </li>
            <li>
              <a>Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {playlists.loading && <Loading />}
            </li>

            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
