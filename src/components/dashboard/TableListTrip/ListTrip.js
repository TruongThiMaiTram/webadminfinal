import { Table } from 'react-bootstrap'
import React, { Component } from 'react';
import HeaderTableTrip from './HeaderTableTrip';
import BodyTableTrip from'./BodyTableTrip';
import axios from 'axios';
import moment from 'moment';
class ListTrip extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
axios.get("/trips")
.then(result => {
    //console.log(result.data)
    this.setState({data:result.data})//cập nhật trạng thái data
})
    }
    render() {
        const listTableTrip = this.state.data.map((trip,idx)=>{
            const {_id,pick_up,drop_off,passenger_id:{full_name}, date_trip} = trip;
              return <BodyTableTrip val0={idx + 1} val1={_id} val2 ={pick_up} val3={drop_off} val5 ={full_name} val6 = {moment(date_trip).format('MMMM Do YYYY, h:mm:ss a')}/> 
        })//chuyển dữ liệu từng phần tử trong mảng
        return (
           
            <div style={{ width: '80%', display: 'flex',flexFlow:'column', justifyContent: 'center', alignItems: 'center', border: '1px soid',marginTop:'10%' }}>
                <h4>Danh sách chuyến đi</h4>
                <div style={{ width: '90%' }}>
                    <Table striped bordered hover>
                        <thead>
                            <HeaderTableTrip elm0="STT" elm1="Mã chuyến đi" elm2="Điểm đi" elm3="Điểm đến" elm4="Quãng đường" 
                                                elm4="Tài xế" elm5="Khách hàng" elm6="Tình trạng" elm7="Đánh giá" />
                        </thead>
                        <tbody>
                            {listTableTrip}
                           
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ListTrip;