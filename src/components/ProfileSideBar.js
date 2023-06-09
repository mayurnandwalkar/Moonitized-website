
import React from 'react'
 import { AiOutlineEye } from "react-icons/ai";
import { MdLocationOn,MdModeEditOutline } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

const ProfileSideBar = () => {
    return (
        <>
            <div class="d-md-block col-md-5 col-lg-4 col-xl-4">
                <div class="card mb-4 p-4 cst-border-white">
                    <div class="pt-3">
                        <ul class="navbar-nav">
                            <div className='text-center mb-4'>
                                {/* <img src={ProfileLogo} className='rounded-circle'/> */}
                                <img class="rounded-circle shadow-4-strong" alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
                                <h4 className='mt-3 text-white text-uppercase'>Stephen johnson <MdModeEditOutline /></h4>
                                <p className='text-white text-capitalize cst-font-tahoma' >@stephenjhon <MdModeEditOutline /></p>
                            </div>
                            <button type="button" class="btn border-white text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            
                            ><AiOutlineEye />&nbsp; &nbsp; &nbsp;&nbsp; Edit Profile Settings</button>
                            <hr style={{ "color": "white" }} />
                            <div className='container'>
                                <div className='text-white justify-content-between d-flex'>
                                    <div className='text-white cst-font-tahoma'><MdLocationOn className='from-icon-cst' /> From</div>
                                    <div className='text-white cst-font-tahoma'>United States</div>
                                </div>

                                <div className='text-white justify-content-between d-flex'>
                                    <div className='cst-font-tahoma'><FaUserAlt className='member-since-icon-cst' /> Member Since</div>
                                    <div className='text-white cst-font-tahoma'>Apr 2023</div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSideBar