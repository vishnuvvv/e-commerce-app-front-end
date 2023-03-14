import React from 'react'
import "../ProductPage/ProductPage.css"
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement"
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer"

const ProductPage = () => {
  return (
    <div className='product-page-container'>
        <Navbar/>
        <Announcement/>
        <div className='single-product-cntr-wrap'>
            <div className='single-prct-img-cntr'>
                <img className='single-prct-img' src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='denim-pic'/>
            </div>
            <div className='single-prct-info-cntr'>
                <h1 className='single-prct-title'>Denim</h1>
                <p className='single-prtc-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ratione a. Ducimus fugiat illo officia eius error alias exercitationem voluptates magni voluptas. Incidunt, fuga perspiciatis quibusdam expedita laboriosam molestias? Atque.</p>
                <span className='single-prtc-prize'>Rs.1079</span>
            </div>
        </div>
        <Newsletter/>
        <Footer/> 
    </div>
  )
}

export default ProductPage;
