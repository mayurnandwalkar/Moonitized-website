import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section class="hero_wrapper">
                <div class="container">
                    <div class="hero_inner">
                        <p class="hero_title"> Take Crypto Payments Easily </p>
                        <h4 class="hero_detail">Connect your site or app and have your customers pay via crypto coins and tokens today!</h4>
                        <div class="hero_btnz">
                            <a class="flex_align hero_btn bg_faq" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#faq">I want to sell</a>
                            <a class="flex_align hero_btn bg_signup" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#term_condition">I want to buy</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection