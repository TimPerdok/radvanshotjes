export default function pageReducer(state = {width: 0, height: 0}, action) {
  switch (action.type) {
    // omit other cases
    case 'page/pageLoading': {
      // ❌ WARNING: example only - don't do this in a normal reducer!
      state.height = 5000
      return state
    }
    default:
      return state
  }
}