import React, { Component } from 'react'

export class TR extends Component {
    render() {
        return (
            <>
                                    <tr>
                                    <th scope="row">{this.props.serial}</th>
                                    <td>{this.props.email}</td>
                                    <td>{this.props.query}</td>
                                    <td>{this.props.createdAt}</td>
                                    <td><i className="fa fa-check-circle font-weight-bold"/></td>
                                    </tr>
            </>
        )
    }
}

export default TR
