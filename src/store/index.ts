import { createStore, Store } from 'redux';

import rootReducer from './ducks/rootReducer';

// export interface ApplicationState {
//     myState: myStateTypes
// }

// const store: Store<ApplicationState> = createStore(rootReducer);

const store = createStore(rootReducer);

export default store;
