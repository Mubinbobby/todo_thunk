import axios from "axios";

export const todo_request='todo_request';

export const todo_success='todo_success';

export const todo_failure='todo_failure';

export const todorequest=()=>({type:todo_request});

export const todosuccess=(data)=>({type:todo_success,payload:data});

export const todofailure=(error)=>({type:todo_failure,payload:error});

export const fetchData=()=>{
    return dispatch=>{
        dispatch(todorequest());
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{dispatch(todosuccess(res.data))})
        .catch((err)=>{dispatch(todofailure(err))})
    }
}