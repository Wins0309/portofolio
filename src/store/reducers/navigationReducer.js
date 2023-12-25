const initialState = {
  menuItems: [
    {
      slug: '#about',
      title: 'About'
    },
    {
      slug: '#works',
      title: 'Works'
    },
    {
      slug: '#services',
      title: 'Services'
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