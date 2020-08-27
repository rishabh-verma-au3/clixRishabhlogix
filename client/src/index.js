


import React from "react"
import ReactDOm from "react-dom"
import {Provider} from "react-redux"
import App from "./App"
import {store} from "./store/store"


class Home extends React.Component{


    render(){
           return (
                                <div className="container  my-4 temp">
                                <div className="row">
                                <div className="col-12">
                                <App/>
                                </div>
                                </div>

                                </div>
           )
    }


}


ReactDOm.render(<Provider store={store}><Home /></Provider>,document.getElementById("root"))