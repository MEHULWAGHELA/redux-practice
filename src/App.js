import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

/* for make simple redux file first we have to install 3 files by this command
=> npm i redux react-redux redux-thunk
then we have to make four folder
1=>reducers
2=>store
3=>type
4=>action

1=>reducer folder we have all reducer and one file is root reducer in which we combine multiple reducer in single object by using a combineReducer method import from redux  
1=> 1=>counter reducer is make in this reducer we make default state any type object , array or any data type and it is set in state and if our defaultstate is object then we have to return only object 
and this state work same as normal reducer

and during dispatch method call then compiler find that type in root reducer and in which reducer find that type then that process run therefore we have to require different type in all reducers thats why we make type.js file in which we make cont type and we use at all place where we use that type. due to const we not use same type another time

2=>Store.js file in which we use method createStore in which we use root reducer and applyMiddleware we use thunk or saga which is middleware which is use to access data in all components

3=>Type.js in this file we make unique type therefor no any conflict occur 

4=>Action.js in this file we make functions to call all dispatch method dynamic from any component we require data then we have to call function and we can access any data directly from any component by function call

then we have to use Provider and use attribute store use which name is we can not change another all name we can change but store name attribute we can not change

in this store we send argument of store which we created 

then we can use that store by useSelector and we can use  dispatch from "useDispatch" 


*/
function App() {
  return (
    <div>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
