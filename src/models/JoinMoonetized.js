import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";



const JoinMoonetized = () => {
    return (
        <>
            <div class="modal fade " id="joinNowModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content cst-bk">
                        <div class="modal-header">
                            <a href='#' className='m-auto float-end'> </a><IoMdClose className='close-icons' data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div class="modal-body mx-3">
                            <h3 className='text-center mb-5 text-uppercase'> join moonetized</h3>
                            <div className='row p-2 px-3 ' >
                                <button className='btb btn-facebook-btn p-2'><CiFacebook className='mx-3' />Continue with Facebook</button>
                            </div>
                            <div className='row p-2 px-3 ' >
                                <button className='btb btn-facebook-btn p-2'><FcGoogle className='mx-3' />Continue with Google</button>
                            </div>
                            <div className='row p-2 px-3 ' >
                                <button className='btb btn-apple-btn p-2'><AiFillApple className='mx-3' />Continue with Apple</button>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <hr class="w-50" />
                                <span class="mx-3">OR</span>
                                <hr class="w-50" />
                            </div>

                            <div className='row p-2 px-3 ' >
                                <input class="col-12 form-control clas-cat text-right pt-2" type="email" placeholder='Email/Username' />
                            </div>

                            <div className='row mt-4 mb-2 p-3' >
                                <button className='btn btn-green-cst p-2'>Continue</button>
                            </div>
                                 <p className='join-moonetized-model text-center'>By joining i agree to receive emails from Moonetized</p>
                              
                            <hr className='mt-5' />
                            <p className='n-remember-yet text-center'>Already a member? <a href='#' className='join-now-a text-decoration-underline' >Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinMoonetized