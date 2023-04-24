import React from 'react'

const CreateNewProduct = () => {
    return (
        <>
            <section className='seller-dashaboard-class text-white'>
                <div className='container mt-5 border-white p-5' style={{ "border": "1px solid" }}>
                    <h3 className='text-center text-uppercase mb-5'>Create a new product</h3>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h3 className=''>PRODUCT TITLE</h3>
                            <p>Your product title is the most important place to include keywords that buyers would like to use to search for a service like yours. </p>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-6'>
                            <label class="form-group  has-float-label">
                                <input class="form-control sasasa has-float-label" type="email" placeholder="email@example.com" />
                                <span>Email</span>
                            </label>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-sm-4'>
                            <h3 className=''>CATEGORY</h3>
                            <p>Choose a category and a sub-category most suitable for your product.</p>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-6'>
                            <div className="row ">
                                <div className='col-sm-4'>
                                    <select class="form-select sasasa select-arrow" aria-label="Default select example">
                                        <option selected>Select Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-sm-4'>
                                    <select class="form-select sasasa" aria-label="Default select example">
                                        <option selected>Select Sub-Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h3 className=''>SEARCH TAGS</h3>
                            <p>Tag your product with buzz words that are relevant to the services you are offering. Use all 5 tags to get found.</p>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-6'>
                            <h3 className=''>POSITIVE KEYWORD</h3>
                            <p>Enter search terms you feel buyers will use when looking for your service</p>
                            <textarea class="form-control sasasa"></textarea>
                            <p className='float-end'>5 tags maximum. Use letters and numbers only</p>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h3 className=''>PRODUCT DESCRIPTION</h3>
                            <p>describe the service and product you are offering. HIGHLIGHT ALL THE FEATURES AND BENEFITS.</p>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-6'>
                            <textarea class="form-control sasasa" rows={10}></textarea>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h3 className=''>PRICING</h3>
                            <p>Set up pricing for your product using crypto currencies</p>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-6'>
                            <div class="row mb-2">
                                <div className='text-white col-sm-3 col-6'>
                                    <h3>CRYPTO</h3>
                                </div>
                                <div className='col-sm-3 col-6'>
                                    <h3>Price</h3>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div className='text-white col-sm-3 col-6'>
                                    <h5>USD PRICE</h5>
                                </div>
                                <div className='col-sm-3 col-6'>
                                    <input class='col-12 form-control sasasa text-right' type='email' />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div className='text-white col-sm-3 col-6'>
                                    <h5>ETH</h5>
                                </div>
                                <div className='col-sm-3 col-6'>
                                    <input class='col-12 form-control sasasa text-right' type='email' />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div className='text-white col-sm-3 col-6'>
                                    <h5>BNB</h5>
                                </div>
                                <div className='col-sm-3 col-6'>
                                    <input class='col-12 form-control sasasa text-right' type='email' />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div className='text-white col-sm-3 col-6'>
                                    <h5>SFM</h5>
                                </div>
                                <div className='col-sm-3 col-6'>
                                    <input class='col-12 form-control sasasa text-right' type='email' />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div className='text-white col-sm-3 col-6'>
                                    <h5>MATIC</h5>
                                </div>
                                <div className='col-sm-3 col-6'>
                                    <input class='col-12 form-control sasasa text-right' type='email' />
                                </div>
                            </div>

                            <button className='col-5 btn border-white text-white mx-3' style={{ "fontSize": "18px" }}>Add +</button>
                        </div>

                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h3 className=''>PRODUCT URL</h3>
                            <p>Set up the URL for your product</p>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-6'>
                            <input class="col-sm-4 form-control sasasa" type="text" />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-sm-2'> </div>
                        <div className='col-sm-10'>
                            <button className='col-4 btn border-white text-white mx-3' style={{ "fontSize": "18px" }}>cancel</button>
                            <button className='col-4 btn btn-success' style={{ "fontSize": "18px" }}>Continue</button>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default CreateNewProduct 