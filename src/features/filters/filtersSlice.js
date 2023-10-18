const initialState = {
  status: 'All',
  colors: [],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        // copy the whole state
        ...state,
        // Overwrite the filters value
        // filters: {
        //   // Copy the other filters fileds
        //   ...state.filters,
        //   // And replace the status field with the new value
          status: action.payload
        // },
      }
    }
    default:
      return state
  }
}
