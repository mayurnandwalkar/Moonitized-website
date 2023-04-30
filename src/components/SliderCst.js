import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, ButtonFirst, ButtonLast, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SliderCst = () => {
    return (
        <>
            <CarouselProvider
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
            </CarouselProvider>
        </>
    )
}

export default SliderCst