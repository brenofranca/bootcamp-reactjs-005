export const Types = {
  ADD_REQUEST: 'default/ADD_REQUEST',
  ADD_SUCCESS: 'default/ADD_SUCCESS',
  ADD_FAILURE: 'default/ADD_FAILURE',
  RESET_FEEDBACK: 'default/RESET_FEEDBACK',
};

const INITIAL_STATE = {};

export default function defaultReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  defaultRequest: developer => ({
    type: Types.ADD_REQUEST,
    payload: { developer },
  }),
  addDefaultSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: data,
  }),
  addDefaultFailure: message => ({
    type: Types.ADD_FAILURE,
    payload: message,
  }),
  resetDefaultFeedback: () => ({
    type: Types.RESET_FEEDBACK,
    payload: {},
  }),
};
