
import Rootreducer from '../reducer/index'
import {createStore,applyMiddleware,compose}from 'redux';
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
 
);
const token=localStorage.getItem("token")
const INITIAL_STATE={
 auth:{
  token:"",
  error_msg:"" 
}
}
if(token)
INITIAL_STATE.auth.token=token;
const store = createStore(Rootreducer,INITIAL_STATE, enhancer);

export default store;