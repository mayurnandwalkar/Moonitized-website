import React from 'react'
import ListingHomePageHeader from '../components/ListingHomePageHeader'
import CategoryMenus from '../components/CategoryMenus'
import SliderCst from '../components/SliderCst';
import { BsHeart } from 'react-icons/bs';

const SingleProductPage = () => {
    function eventLogger(ev) {
        // eslint-disable-next-line no-console
        console.log(ev.type, ev.target);
    }
    return (
        <>
            <div className="seller-dashaboard-class">
                <ListingHomePageHeader />
                <CategoryMenus />
                <section>
                    <div className='container'>
                        <div class="row">
                            <div class=" col-6 product-images-wrapper">
                                <div class="row mt-5">
                                    <div className='col'>
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
                                    <div className='col-9 '>
                                        <SliderCst />
                                    </div>
                                </div>


                            </div>

                            <div class="col-6 product-details-wrapper text-white mt-5">
                                <div className='row mb-2'>
                                    <div className='col-sm-3'>

                                    <select className='col-3 form-select sasasa select-arrow search-for-anything '>
                                        <option>USD$100</option>
                                    </select>
                                    </div>

                                </div>
                                <h2 class="text-white">iWatch 2 - NEW</h2>
                                <p className='cst-font-tahoma'>Tech and more store <BsHeart/></p>
                                <p className='cst-font-tahoma'>Description:</p>
                                <p class="product-description cst-font-tahoma">
                                    These low-profile sneakers are your perfect casual wear companion.
                                    Featuring a durable rubber outer sole, they’ll withstand
                                    everything the weather can offer.
                                </p>
                                <button className='btn btn-success col-sm-6 mt-5'>Buy Now</button>
                            </div>
                        </div>



                    </div>
                </section>

            </div>
        </>
    )
}

export default SingleProductPage