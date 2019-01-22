import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsCreators } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const { data } = yield call(api.get, '/playlists');

    yield put(PlaylistsCreators.getPlaylistsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
