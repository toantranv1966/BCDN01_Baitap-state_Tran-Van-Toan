import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderShoesItem = () => {
      let {mangShoes,xemChiTiet} = this.props;
      return mangShoes.map((shoes,index) => {
        return <ProductItem sp={shoes} xemChiTiet={xemChiTiet} key={index}/>
      })
      
    }
    
    render() {
        console.log(this.props.mangSP);
        return (
            <div className="row">
              {this.renderShoesItem()}
        </div>
        )
    }
}
