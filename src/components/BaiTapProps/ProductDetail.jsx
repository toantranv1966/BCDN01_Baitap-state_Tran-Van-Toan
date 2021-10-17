import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        let {chiTietShoes} =this.props;
        return (
            <div>
          <div className="modal fade " id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>

                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{chiTietShoes.name}</td>
                      </tr>
                      <tr>
                        <td style={{width: '150px'}}>Hình ảnh</td>
                        <img style={{width: '15rem'}} classname="card-img-top " src={chiTietShoes.image} alt="Card image cap" />

                      </tr>
                      <tr>
                        <td>Alias</td>
                        <td>{chiTietShoes.alias}</td>
                      </tr>
                      <tr>
                        <td>Giá </td>
                        <td>{chiTietShoes.price}</td>
                      </tr>
                      <tr>
                        <td>Mô tả</td>
                        <td>{chiTietShoes.description}</td>
                      </tr>
                      <tr>
                        <td>Mô tả ngắn</td>
                        <td>{chiTietShoes.shortDescription}</td>
                      </tr>
                      <tr>
                        <td>Số lượng</td>
                        <td>{chiTietShoes.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
        )
    }
}
