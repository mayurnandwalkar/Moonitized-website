import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero_wrapper">
                <div className="container">
                    <div className="hero_inner">
                        <p className="hero_title"> Take Crypto Payments Easily </p>
                        <h4 className="hero_detail">Connect your site or app and have your customers pay via crypto coins and tokens today!</h4>
                        <div className="hero_btnz">
                            <a href='#' className="flex_align hero_btn bg_faq" onClick={()=>navigate("/seller-dashaboard")}>I want to sell</a>
                            <a href='#' className="flex_align hero_btn bg_signup"  >I want to buy</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection