import React from 'react'
import Header from '../components/Header'
import ProfileLogo from '../images/profileLogo.png'
import SheetImg from '../images/sheetImg.png'
import { BsThreeDots } from 'react-icons/bs';

const SellerDashabord = () => {
    return (
        <>
            <div className='seller-dashaboard-class'>
                <Header />
                <section className='mt-5'>
                    <div className='container'>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="d-none d-md-block col-md-5 col-lg-4 col-xl-3">
                                    <div class="card mb-4 p-4">
                                        <div class="pt-3">
                                            <ul class="navbar-nav">
                                                <div className='text-center mb-4'>
                                                    <img src={ProfileLogo} />
                                                    <h4 className='mt-3'>Stephen johnson</h4>
                                                </div>
                                                <button>Edit Profile Settings</button>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-sm'>From</div>
                                                    <div className='col-sm'>United States</div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-sm'>Member Since</div>
                                                    <div className='col-sm'>Apr 2023</div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-lg-8 col-xl-9 ">
                                    <div class="card mb-4  p-3">
                                        <div class="row">
                                            <div class="col-md-2 col-3">
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
                                                <div class="card" style={{ "width": "18rem" }}>
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
                                                <div class="card" style={{ "width": "18rem" }}>
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
                                                <div class="card" style={{ "width": "18rem" }}>
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