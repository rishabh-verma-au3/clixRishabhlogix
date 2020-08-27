import React, { Component } from 'react'
import {connect} from "react-redux"

import TR from "./component/TR"

export class App extends Component {

    componentDidMount(){
        this.props.findData()
    }





    render() {
        return (
            <>


                              <div className="bg-info  d-flex justify-content-center my-5 font-weight-bold temp ">QueryList</div>

                                 {this.props.result.length?null:"Loading..."}
                                 <table className="table table-striped ">
                                <thead>
                                    <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">Query</th>
                                    <th scope="col">Query Date</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                     {this.props.result.length===0?<tr></tr>:
                                         this.props.result.map((item,index)=>(
                                             <TR serial={index+1} key={index} email={item.email} query={item.query} createdAt={item.createdAt}/>
                                         ))
                                    }

                                </tbody>
                                </table>



            </>
        )
    }
}




const mapStateToProps = (state) => {
    return {
      result:state.result,
    }
  }

const mapPropsToDispatch=(dispatch)=>{
    return {
        findData:()=>dispatch({
                type:"FIND_DATA"
            })
    }
}


export default connect(mapStateToProps,mapPropsToDispatch)(App)
