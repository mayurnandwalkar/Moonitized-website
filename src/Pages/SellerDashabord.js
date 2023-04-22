import React from 'react'
import Header from '../components/Header'
import ProfileLogo from '../images/profileLogo.png'
import SheetImg from '../images/sheetImg.png'
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from "react-icons/ai";
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';


const SellerDashabord = () => {
    return (
        <>
            <div className='seller-dashaboard-class'>
                <Header />
                <section className='mt-5'>
                    <div className='container'>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="d-md-block col-md-5 col-lg-4 col-xl-4">
                                    <div class="card mb-4 p-4 cst-border-white">
                                        <div class="pt-3">
                                            <ul class="navbar-nav">
                                                <div className='text-center mb-4'>
                                                    {/* <img src={ProfileLogo} className='rounded-circle'/> */}
                                                    <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
                                                    <h4 className='mt-3 text-white'>Stephen johnson <MdModeEditOutline /></h4>
                                                    <p className='text-white'>@stephenjhon <MdModeEditOutline /></p>
                                                </div>
                                                <button type="button" class="btn border-white text-white"><AiOutlineEye />&nbsp; &nbsp; &nbsp;&nbsp; Edit Profile Settings</button>
                                                <hr style={{ "color": "white" }} />
                                                <div className='row '>
                                                    <div className='col-sm text-white'>From</div>
                                                    <div className='col-sm text-white'>United States</div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-sm text-white'>Member Since</div>
                                                    <div className='col-sm text-white'>Apr 2023</div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-8 col-xl-8 ">
                                    <div class="card mb-4 cst-border-white p-3">
                                        <div class="row">
                                            <div class="col-md-2 col-6">
                                                <h4 class="dashboard-heading4 pt-2">Product Listed</h4>
                                            </div>
                                            <div class="col-md-7 col-6">
                                                <h4 class="dashboard-heading4 pt-2">Draft</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="row">
                                            <div class="col-xl-4 col-md-6 mb-4 ">
                                                <div class="card" >
                                                    <img src={SheetImg} className='card-img-top' />
                                                    <div class="card-body" style={{ "background": "#124D40" }}>
                                                        <h5 class="card-title text-center text-white">I will do financial modeling spreadsheet for you</h5>
                                                        <div className='row'>
                                                            <div className='col text-white'><BsThreeDots /></div>
                                                            <div className='col text-white'>Starting at $50</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6 mb-4 ">
                                                <div class="card" >
                                                    <img src={SheetImg} className='`card-img-top`' />
                                                    <div class="card-body" style={{ "background": "#124D40" }}>
                                                        <h5 class="card-title text-center text-white">I will do financial modeling spreadsheet for you</h5>
                                                        <div className='row'>
                                                            <div className='col text-white'><BsThreeDots /></div>
                                                            <div className='col text-white'>Starting at $50</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6 mb-4 ">
                                                <div class="card pt-5 pb-4" style={{ "background": "#124D40", "align-items": "center" }}>
                                                    <AiFillPlusCircle style={{ "font-size": "100px", "color": "white" }} />
                                                    <div class="card-body" >
                                                        <h5 class="card-title text-center text-white">CREATE  A NEW PRODUCT</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default SellerDashabord