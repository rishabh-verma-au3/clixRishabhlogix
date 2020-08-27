import Axios from "axios";

import  {store} from "../store"


 function fetchData(){

           Axios.get("/getDb").then((data)=>{
                         store.dispatch({
                              type:"collected",
                              payload:data
                         })
             })



}


export {fetchData}