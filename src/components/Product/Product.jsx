import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'

const Product = ({item}) => {
  return (
    <div className='product-box'>
        <div className='product-circle'></div>
        <img className='product-image' src={item.img} alt=""/>
        <div className='product-info'>
            <div className='product-icons'>
                <ShoppingCartOutlined/>
            </div>
            <div className='product-icons'>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </div>
            <div className='product-icons'>
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product
