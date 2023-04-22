import React from 'react'
import Header from '../components/Header'
import SheetImg from '../images/sheetImg.png'
import { BsThreeDots } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import ProfileSideBar from '../components/ProfileSideBar';


const SellerDashabord = () => {
    return (
        <>
            <div className='seller-dashaboard-class'>
                <Header />
                <section className='mt-5'>
                    <div className='container'>
                        <div class="container-fluid">
                            <div class="row">
                                <ProfileSideBar />  {/* Profile Componenet */}
                                <div class="col-md-7 col-lg-8 col-xl-8 ">
                                    <div class="card mb-4 cst-border-white p-3">
                                        <div class="row">
                                            <div class="col-md-2 col-6">
                                                <h4 class="dashboard-heading4 pt-2 text-decoration-underline">Product Listed</h4>
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
                                                        <div className='text-white justify-content-between d-flex'>
                                                            <div className='mx-2'><BsThreeDots /></div>
                                                            <div className='text-white mx-2'>Starting at $50</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6 mb-4 ">
                                                <div class="card" >
                                                    <img src={SheetImg} className='card-img-top' />
                                                    <div class="card-body" style={{ "background": "#124D40" }}>
                                                        <h5 class="card-title text-center text-white">I will do financial modeling spreadsheet for you</h5>
                                                        <div className='text-white justify-content-between d-flex'>
                                                            <div className='mx-2'><BsThreeDots /></div>
                                                            <div className='text-white mx-2'>Starting at $50</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6 mb-4 ">
                                                <div class="card pt-5 pb-4" style={{ "background": "#124D40", "align-items": "center" }}>
                                                    <AiFillPlusCircle className='add-product-cst' style={{ "font-size": "100px", "color": "white" }} />
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