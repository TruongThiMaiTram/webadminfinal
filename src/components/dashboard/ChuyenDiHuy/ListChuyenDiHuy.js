import React, { Component } from 'react';
import {Table, ButtonGroup, Button} from 'react-bootstrap';

class ListChuyenDiHuy extends Component {
    render() {
        const styleListChuyenDiHuy =
        {
            height: '200px',
            width: '800px',
            border: '2px solid #000'
        }
        
        return (
            <div>
                <h3>Danh sách chuyến đi bị hủy</h3>
                <Table style={styleListChuyenDiHuy}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên đối tác</th>
                            <th>Tên khách hàng</th>
                            <th>Lý do</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th> 
                            <ButtonGroup toggle>
                                 <Button>Chi tiết</Button>
                                 <Button style={{background:"#b005ff"}}>Cập nhật </Button>
                            </ButtonGroup>
                            </th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                            <ButtonGroup toggle>
                                 <Button >Chi tiết</Button>
                                 <Button style={{background:"#b005ff"}}>Cập nhật </Button>
                            </ButtonGroup>
                            </th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                            <ButtonGroup toggle>
                                 <Button >Chi tiết</Button>
                                 <Button style={{background:"#b005ff"}}>Cập nhật </Button>
                            </ButtonGroup>
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ListChuyenDiHuy;