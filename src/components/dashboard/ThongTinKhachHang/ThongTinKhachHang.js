import React, { Component } from 'react';
import {Table,ButtonToobar,Button} from 'react-bootstrap';
class ThongTinKhachHang extends Component {
    render() {
        const styleThongTinKhachHang =
        {
            height: '200px',
            width: '800px',
            border: '2px solid #000'
        }
        const styleButton =
        {
            padding:'0px 200px'
        }
        return (
            <div>
                <h3>Danh sách khách hàng</h3>
                <Table style={styleThongTinKhachHang}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã khách hàng</th>
                            <th>Họ tên</th>
                            <th>Địa chỉ</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ThongTinKhachHang;