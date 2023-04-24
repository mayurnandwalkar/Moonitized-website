import React from 'react'
import Select from 'react-select'
import { IoMdClose } from "react-icons/io";

const options = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USDT', label: 'USDT' },
    { value: 'BNB', label: 'BNB' },
]

const EditProfileSetting = () => {
    return (
        <>

            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content cst-bk">
                        <div class="modal-header">
                            <a href='#' className='m-auto float-end'> </a><IoMdClose class="btn-close text-white cst-close-btn" data-bs-dismiss="modal" />                           
                            {/* <button type="button" class="btn-close text-white cst-close-btn" data-bs-dismiss="modal" aria-label="Close" ></button> */}
                        </div>
                        <div class="modal-body mx-3">
                            <h3 className='text-center mb-5'>Edit profile settings</h3>
                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right" type="email" placeholder='Email Address' />
                            </div>
                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right" type="email" placeholder='Password Update' />
                            </div>
                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right" type="email" placeholder='Secret Key' />
                            </div>
                            <div className='row p-2 px-3 ' >
                                <button class="btn btn-new-key-genrate">Generate New secret Key</button>
                            </div>
                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right" type="email" placeholder='Wallet' />
                            </div>
                            <div className='row pt-2 px-1' >
                                <div className='col-12'>
                                    <Select class="" isMulti options={options} placeholder="Select Crypto Lines" />
                                </div>
                            </div>
                            <div className='row mt-4 mb-5 p-3' >
                                 <button className='btn btn-green-cst mb-5'>Save</button>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileSetting