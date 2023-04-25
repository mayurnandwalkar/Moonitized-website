import React from 'react'
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header class="nav_wrapper">
        <div class="container">
          <div class="nav_inner">
            <div class="main_logo">
              <img src="assets/img/main_logo.svg" alt="" />
            </div>
            <div class="nav_content">
               {window.location.pathname == "/seller-dashaboard" ? <> 
              <FiLogOut className='text-white cst-logout-cls' data-bs-toggle="modal" data-bs-target="#signinModal"/>
              </> : <>
                <div class="social_icons">
                  <a href=""><img src="assets/img/youtube.svg" alt="youtube" /></a>
                  <a href=""><img src="assets/img/twitter.svg" alt="twitter" /></a>
                  <a href=""><img src="assets/img/discord.svg" alt="discord" /></a>
                  <a href=""><img src="assets/img/linkedin.svg" alt="linkedin" /></a>
                </div>
                <div class="term_policy">
                  <p class="nav_title" data-bs-toggle="modal" data-bs-target="#term_condition2">TERMS & CONDITIONS </p>
                  <p class="nav_title" data-bs-toggle="modal" data-bs-target="#privacy_policy2">PRIVACY POLICY </p>
                </div>
              </>}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header