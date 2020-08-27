import {fetchData} from "./fetchData"

const intialState={
        result:[]
}

const reducer= (state=intialState,action)=>{
    switch(action.type){
        case 'FIND_DATA':
                fetchData();
                return state;
        case 'collected':
                return {
                        ...state,result:action.payload.data.result
                }

        default: return state;

             }

}

export default reducer;