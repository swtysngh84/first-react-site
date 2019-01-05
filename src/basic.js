import { createStore as _createStore } from 'redux';
const createStore=_createStore;
const initstate={
    counter:0
}
const rootreducer=(state=initstate,action)=>{
    return state;
};
const store=createStore(rootreducer);
console.log(store.getState);