import { createStore } from 'redux'
import { invoiceReducer } from './invoiceSlice/invoiceReducer'

const store= createStore(invoiceReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;