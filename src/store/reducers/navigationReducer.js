const initialState = {
  menuItems: [
    {
      section: 'stack',
      title: 'My Journey'
    },
    {
      section: 'clients',
      title: 'My Clients'
    },
    {
      section: 'work',
      title: 'My Day'
    }
  ],
  activeHeader: false,
  loading: true
}

export default function(state = initialState, action){

  switch(action.type){
    case 'GET_NAVIGATION':
      return state.menuItems
    case 'TOGGLE_HEADER':
      return {...state, activeHeader: !state.activeHeader}
    default: return state
  }
}