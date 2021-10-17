import React, { Component } from 'react'
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import data from '../../data/data.json'

export default class ShoesStore extends Component {

  arrShoes = data;

  state = {
    chiTietShoes: {}
  }

  xemChiTiet  = (newShoes) => {
    this.setState({
      chiTietShoes:newShoes
    })
  }
  
  render() {
    return (
      <div className="container">
        <h3 className="mt-3 text-center">Shoes Shop</h3>
        <div className="row mt-5">
          <ProductList mangShoes={this.arrShoes} xemChiTiet={this.xemChiTiet}/>
        </div>
          <ProductDetail chiTietShoes={this.state.chiTietShoes}  />
      </div>
    )
  }
}
