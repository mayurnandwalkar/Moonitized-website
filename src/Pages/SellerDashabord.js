import React from 'react'
import Header from '../components/Header'
import SheetImg from '../images/sheetImg.png'
import { BsThreeDots } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import ProfileSideBar from '../components/ProfileSideBar';
import { useNavigate } from 'react-router-dom';

const dummuArray = [1, 2, 3];

const SellerDashabord = () => {
    const navigate=useNavigate();
    function handleNavigation(){
         navigate("/add-new-product")
    }
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
                                                <h3 class="dashboard-heading4 pt-2 text-decoration-underline">Product Listed</h3>
                                            </div>
                                            <div class="col-md-7 col-6">
                                                <h3 class="dashboard-heading4 pt-2">Draft</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-5 mt-5">
                                        <div class="row">
                                            {dummuArray.map((iteam, index) => {
                                                return <>
                                                    <div class="col-xl-4 col-md-6 mb-4 " key={index}>
                                                        <div class="card" >
                                                            <img src={SheetImg} className='card-img-top' />
                                                            <div class="card-body" style={{ "background": "#124D40" }}>
                                                                <h5 class="card-title text-white cst-font-tahoma">I will do financial modeling spreadsheet for you</h5>
                                                                <div className='text-white justify-content-between d-flex'>
                                                                    <div className='mx-2' style={{fontSize: "22px"}}><BsThreeDots /></div>
                                                                    <div className='text-white mx-2 cst-font-tahoma text-uppercase'>Starting at $50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            })}

                                            <div class="col-xl-4 col-md-6 mb-4 ">
                                                <div class="card pt-5 pb-4" style={{ "background": "#124D40", "align-items": "center" }}  >
                                                    <AiFillPlusCircle className='add-product-cst' style={{ "font-size": "100px", "color": "white" }} onClick={handleNavigation} />
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