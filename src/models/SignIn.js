import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";



const SignIn = () => {
    return (
        <>
            <div class="modal fade " id="signinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content cst-bk">
                        <div class="modal-header">
                            <a href='#' className='m-auto float-end'> </a><IoMdClose data-bs-dismiss="modal" aria-label="Close" />                           
                        </div>
                        <div class="modal-body mx-3">
                            <h3 className='text-center mb-5 text-uppercase'> sign in moonetized</h3>
                            <div className='row p-2 px-3 ' >
                                <button className='btb btn-facebook-btn p-2'><CiFacebook className='mx-3' />Continue with Facebook</button>
                            </div>
                            <div className='row p-2 px-3 ' >
                                <button className='btb btn-facebook-btn p-2'><FcGoogle className='mx-3' />Continue with Google</button>
                            </div>
                            <div className='row p-2 px-3 ' >
                                <button className='btb btn-apple-btn p-2'><AiFillApple className='mx-3' />Continue with Apple</button>
                            </div>
                            <hr></hr>

                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right" type="email" placeholder='Email/Username' />
                            </div>
                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right" type="password" placeholder='Password' />
                            </div>
                            <div className='row mt-4 mb-2 p-3' >
                                <button className='btn btn-green-cst'>Continue</button>
                            </div>
                            <div className='row mb-5' >
                                <div className='col'>
                                    <input className='' type="checkbox" name="" id="" />
                                    <span className='mx-2'>Remember me</span>
                                </div>
                                <div className='col'>
                                    <a href='#' className=''>Forgot Password?</a>
                                </div>
                            </div>

                            <hr className='mt-5' />
                            <p className='text-center'>Not Remember yet? Join Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn