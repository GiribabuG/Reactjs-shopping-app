import React, { Component } from 'react'

export default class filters extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-count">{this.props.count} Products</div>
                <div className="filter-sort">Order {""}
                 <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option >Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
                </div>
                <div className="filter-size">Filter {""}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">ALL</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                </select>
                </div>
            </div>
        )
    }
}
