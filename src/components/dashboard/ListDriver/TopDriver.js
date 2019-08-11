import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import HeaderTable from './HeaderTable';
import BodyTable from './BodyTable';
const axios = require("axios")

export default class ListDriver extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount()
    {
        axios.get('/api/drivers')
        .then(result =>{
            this.setState({data: result.data})
        })
    }
    render() {
        const getDriver = this.state.data.map(e => <BodyTable val1={e._id} val2={e.Fullname} val3={e.School}/>)
        return (

            <div style={{ width: '80%', display: 'flex',flexFlow:'column', justifyContent: 'center', alignItems: 'center', border: '1px soid',marginTop:'10%' }}>
                <h4>Top các tài xế có doanh thu cao nhất</h4>
                <div style={{ width: '90%' }}>
                    <Table striped bordered hover>
                        <thead>
                            <HeaderTable elm1="STT" elm2="Tên tài xế" elm3="SDT" elm4="Thời gian" />
                        </thead>
                        <tbody>
                           {getDriver}
                        </tbody>
                    </Table>
                </div>

            </div>
        );
    }
}
