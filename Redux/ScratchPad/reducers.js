//Sample file for demonstrating Reducer functionality

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'songs/addSong': {
        return [...state, action.payload]  //...spread operator creates a new copy of the state array instead of state.push which would directly modify the state and violate reducer rules
      }
      case 'songs/removeSong': {
        return state.filter(song => song !== action.payload)
      }
      default: {
        return state;
      }
    }
  }
  
  const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];
  
  const addNewSong = {
    type: 'songs/addSong',
    payload: 'Halo'
  };
  
  const removeSong = {
    type: 'songs/removeSong',
    payload: 'Take Five'
  };
  
  const removeAll = {
    type: 'songs/removeAll'
  }