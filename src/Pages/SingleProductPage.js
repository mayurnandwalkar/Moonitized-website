import React from 'react'
import ListingHomePageHeader from '../components/ListingHomePageHeader'
import CategoryMenus from '../components/CategoryMenus'
 
const SingleProductPage = () => {
    
    return (
        <>
            <div className="seller-dashaboard-class">
                <ListingHomePageHeader />
                <CategoryMenus />
                <section>
                    <div className='container'>
                        <div class="row">
                            <div class=" col-6 product-images-wrapper">
                                <div class="thumbs-wrapper hide-for-mobile">
                                    <div class="thumb-image active">
                                        <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" alt="Product Thumb Image" />
                                    </div>
                                    <div class="thumb-image">
                                        <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-3.jpg" alt="Product Thumb Image" />
                                    </div>
                                    <div class="thumb-image">
                                        <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" alt="Product Thumb Image" />
                                    </div>
                                    <div class="thumb-image">
                                        <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-3.jpg" alt="Product Thumb Image" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-6 product-details-wrapper text-white">
                                <p class="product-brabd">Sneaker Company</p>
                                <h1 class="text-white">Fall Limited Edition Sneakers</h1>
                                <p class="product-description">
                                    These low-profile sneakers are your perfect casual wear companion.
                                    Featuring a durable rubber outer sole, they’ll withstand
                                    everything the weather can offer.
                                </p>

                                <div class="product-price">
                                    <div class="current-price-wrapper">
                                        <h2 class="current-price">$125.00</h2>
                                        <span class="discount">50%</span>
                                    </div>
                                    <div class="previous-price-wrapper">
                                        <span class="previous-price">$250.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default SingleProductPage