import React from 'react'

const Header = () => {
  return (
    <>
      <div class="main_body">
        <video autoplay muted loop>
          <source src="assets/img/Final Moonetized Background.mp4" />
        </video>
        <div class="overlay_wrapper">
          {/* <!-- navbar start  --> */}
          <header class="nav_wrapper">
            <div class="container">
              <div class="nav_inner">
                <div class="main_logo">
                  <img src="assets/img/main_logo.svg" alt="" />
                </div>
                <div class="nav_content">
                  <div class="social_icons">
                    <a href=""><img src="assets/img/youtube.svg" alt="" /></a>
                    <a href=""><img src="assets/img/twitter.svg" alt="" /></a>
                    <a href=""><img src="assets/img/discord.svg" alt="" /></a>
                    <a href=""><img src="assets/img/linkedin.svg" alt="" /></a>
                  </div>
                  <div class="term_policy">
                    <p class="nav_title" data-bs-toggle="modal" data-bs-target="#term_condition2">TERMS &
                      CONDITIONS </p>
                    <p class="nav_title" data-bs-toggle="modal" data-bs-target="#privacy_policy2">PRIVACY
                      POLICY </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* navbar end  */}
          {/* hero wrapper start   */}
          <section class="hero_wrapper">
            <div class="container">
              <div class="hero_inner">
                <p class="hero_title">
                  Take Crypto Payments Easily
                </p>
                <h4 class="hero_detail">Connect your site or app and have your customers pay via crypto coins and tokens today!</h4>
                <div class="hero_btnz">
                  <a class="flex_align hero_btn bg_signup" data-bs-dismiss="modal" data-bs-toggle="modal"
                    data-bs-target="#term_condition">Sign up</a>
                  <a class="flex_align hero_btn bg_credit" data-bs-dismiss="modal" data-bs-toggle="modal"
                    data-bs-target="#add_credits">Add credits</a>
                  <a class="flex_align hero_btn bg_api" data-bs-dismiss="modal" data-bs-toggle="modal"
                    data-bs-target="#api_document">API DETAILS</a>
                  <a class="flex_align hero_btn bg_faq" data-bs-dismiss="modal" data-bs-toggle="modal"
                    data-bs-target="#faq">FAQ</a>
                </div>
              </div>
            </div>
          </section>
          {/* hero wrapper end  */}
        </div>
      </div>
    </>
  )
}

export default Header