import React from 'react'
import Select from 'react-select'
import { IoMdClose } from "react-icons/io";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';

const options = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USDT', label: 'USDT' },
    { value: 'BNB', label: 'BNB' },
]

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#2C133B',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16
    }), menuList: (provided, state) => ({
        ...provided,
        backgroundColor: '#5C245C',
        fontFamily: 'Roboto',
        fontSize: 16
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: 'white',
        fontSize: 16
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#B186D2' : '#3A1740',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 15
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
};

const EditProfileSetting = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>

            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content cst-bk">
                        <div class="modal-header">
                            <a href='#' className='m-auto float-end'> </a><IoMdClose class="close-icons" data-bs-dismiss="modal" />
                        </div>
                        <div class="modal-body mx-3">
                            <h3 className='text-white text-center mb-5'>Edit profile settings</h3>

                            <div className='row p-2'>
                                <div class="input-container">
                                    <input class="col-12 form-control clas-cat text-right" type='email' placeholder='Email Address' style={{ textAlign: 'right', paddingRight: "10px" }} />
                                </div>
                            </div>

                            <div className='row p-2'>
                                <div className="input-container">
                                    <input
                                        className="col-12 form-control clas-cat text-right"
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Password Update'
                                        style={{ textAlign: 'right', paddingRight: "34px" }}
                                    />
                                    <span className="icon-container" onClick={togglePasswordVisibility}>
                                        {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                    </span>
                                </div>
                            </div>
                            <div className='row p-2'>
                                <div className="input-container">
                                    <input
                                        className="col-12 form-control clas-cat text-right"
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Secret Key'
                                        style={{ textAlign: 'right', paddingRight: "34px" }}
                                    />
                                    <span className="icon-container" onClick={togglePasswordVisibility}>
                                        {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                    </span>
                                </div>
                            </div>

                            <div className='row p-2 px-3 ' >
                                <button class="btn btn-new-key-genrate">Generate New secret Key</button>
                            </div>
                            <div className='row p-2'>
                                <div class="input-container">
                                    <input class="col-12 form-control clas-cat text-right" type="text" placeholder='Wallet' value="Metamask" style={{ textAlign: 'right', paddingRight: "34px" }} />
                                    <span class="icon-container">
                                        <MdEdit />
                                    </span>
                                </div>
                            </div>
                            <div className='row pt-2 px-1' >
                                <div className='col-12'>
                                    <Select class="multislect-cst"
                                        styles={customStyles}
                                        isMulti options={options}
                                        placeholder="Select Crypto Lines"
                                    />
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