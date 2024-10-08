import { todo_failure, todo_request, todo_success } from "./action"

const todoReducer=(state={loading:false,data:[],error:null},action)=>{
    switch(action.type){
        case todo_request:
            return{
                ...state,loading:true,error:null
            }
        case todo_success:
            return{
                ...state,loading:false,data:action.payload,error:null
            }
        case todo_failure:
            return{
                ...state,loading:false,error:action.payload
            }

        default:
            return state
    }
}

export default todoReducer;