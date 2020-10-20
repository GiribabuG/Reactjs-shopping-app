import React, { Component } from 'react'
import formateCurrency from '../utils'
export default class products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                   
                   {this.props.products.map((product)=> (
                        <li key={product._id}>
                        <div className="product">
                            <a href={"#" + product._id}>
                                <img src={product.image}  alt={product.title}></img>
                                <p>{product.title}</p>
                            </a>

                        </div>
                        <div className="product-price">
                            <div>
                                {formateCurrency(product.price)}
                            </div>
                            <button className="button primary" onClick={()=>this.props.addToCart(product)}> Add To Cart </button>
                        </div>
                    </li>
                    ) )}
                </ul>
            </div>
        )
    }
}
