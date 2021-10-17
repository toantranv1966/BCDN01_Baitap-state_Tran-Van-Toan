import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let { sp, xemChiTiet } = this.props;
    return (
      <div className="col-4">
        <div className="card mb-3" >
                    <img className="" src={sp.image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{sp.name}</h5>
                      <p className="card-text">{sp.price}</p>
                      <button onClick={() => {xemChiTiet(sp);}}  href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Xem chi tiết</button>
                    </div>
                  </div>
      </div>
    )
  }
}
