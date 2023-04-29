import React from 'react'
import ListingHomePageHeader from '../components/ListingHomePageHeader'
import CategoryMenus from '../components/CategoryMenus'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, ButtonFirst, ButtonLast, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
                        {/* <div class="row">
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
                                <p class="product">Sneaker Company</p>
                                <h1 class="text-white">Fall Limited Edition Sneakers</h1>
                                <p class="product-description">
                                    These low-profile sneakers are your perfect casual wear companion.
                                    Featuring a durable rubber outer sole, they’ll withstand
                                    everything the weather can offer.
                                </p>                                 
                            </div>
                        </div> */}
                        {/* <CarouselProvider
                            visibleSlides={1}
                            totalSlides={6}
                            step={3}
                            naturalSlideWidth={800}
                            naturalSlideHeight={500}
                         >
                            <Slider className={"slider"}>
                                <Slide index={0}>
                                    <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" />
                                </Slide>
                                <Slide index={1}>
                                    <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" />
                                </Slide>
                                <Slide index={2}>
                                    <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" />
                                </Slide>
                                <Slide index={3}>
                                    <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" />
                                </Slide>
                                <Slide index={4}>
                                    <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" />
                                </Slide>
                                <Slide index={5}>
                                    <img src="https://mohamedaridah.github.io/frontendmentor_e-commerce-product-page/images/image-product-2.jpg" />
                                </Slide>
                            </Slider>
                             <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                          </CarouselProvider> */}


                    </div>
                </section>

            </div>
        </>
    )
}

export default SingleProductPage