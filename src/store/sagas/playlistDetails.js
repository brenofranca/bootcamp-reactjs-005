import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ErrorCreators } from '../ducks/error';
import { Creators as PlaylistDetailsCreators } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const { data } = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsCreators.getPlaylistDetailsSuccess(data));
  } catch (err) {
    yield put(ErrorCreators.setError('Não foi possível obter os detalhes da playlist.'));
  }
}
