import React from 'react'

const CreateNewProduct = () => {
    return (
        <>
            <section className='seller-dashaboard-class text-white'>
                <div className='container mt-5 border-white p-5' style={{ "border": "1px solid" }}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h1 className=''>PRODUCT TITLE</h1>
                            <p>Your product title is the most important place to include keywords that buyers would like to use to search for a service like yours. </p>
                        </div>
                        <div className='col-sm-6'>
                            <label class="form-group  has-float-label">
                                <input class="form-control sasasa has-float-label" type="email" placeholder="email@example.com" />
                                <span>Email</span>
                            </label>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-sm-4'>
                            <h1 className=''>CATEGORY</h1>
                            <p>Choose a category and a sub-category most suitable for your product.</p>
                        </div>
                        <div className='col-sm-6'>
                            <div className="row ">
                                <div className='col'>
                                    <select class="form-select sasasa " aria-label="Default select example">
                                        <option selected>Select Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col'>
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
                            <h1 className=''>SEARCH TAGS</h1>
                            <p>Tag your product with buzz words that are relevant to the services you are offering. Use all 5 tags to get found.</p>
                        </div>
                        <div className='col-sm-6'>
                            <h1 className=''>POSITIVE KEYWORD</h1>
                            <p>Enter search terms you feel buyers will use when looking for your service</p>
                            <textarea class="form-select sasasa"></textarea>
                            <p className='float-end'>5 tags maximum. Use letters and numbers only</p>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h1 className=''>PRODUCT DESCRIPTION</h1>
                            <p>describe the service and product you are offering. HIGHLIGHT ALL THE FEATURES AND BENEFITS.</p>                        </div>
                        <div className='col-sm-6'>
                            <textarea class="form-select sasasa" rows={10}></textarea>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h1 className=''>PRICING</h1>
                            <p>Set up pricing for your product using crypto currencies</p>
                        </div>
                        <div className='col-sm-6'>
                            <div className='text-white  d-flex mb-1'>
                                <div className='mx-5'><h2>CRYPTO</h2></div>
                                <div><h2>Price</h2></div>
                            </div>
                            <div className='text-white  d-flex mb-1'>
                                <div className='mx-5'><h5>USD PRICE</h5></div>
                                <div><input class="col-sm-4 form-control sasasa" type="email" />
                                </div>
                            </div>
                            <div className='text-white  d-flex mb-1'>
                                <div className='mx-5'><h5>ETH</h5></div>
                                <div><input class="col-sm-4 form-control sasasa" type="email" />
                                </div>
                            </div>
                            <div className='text-white  d-flex mb-1'>
                                <div className='mx-5'><h5>BNB</h5></div>
                                <div><input class="col-sm-4 form-control sasasa" type="email" />
                                </div>
                            </div>
                            <div className='text-white  d-flex mb-1'>
                                <div className='mx-5'><h5>SFM</h5></div>
                                <div><input class="col-sm-4 form-control sasasa" type="email" />
                                </div>
                            </div>
                            <div className='text-white  d-flex mb-1'>
                                <div className='mx-5'><h5>MATIC</h5></div>
                                <div><input class="col-sm-4 form-control sasasa" type="email" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <h1 className=''>PRODUCT URL</h1>
                            <p>Set up the URL for your product</p>
                        </div>
                        <div className='col-sm-6'>
                            <input class="col-sm-4 form-control sasasa" type="text" />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-sm-2'>
                        </div>
                        <div className='col-sm-10'>
                            <button className='col-5 btn border-white text-white mx-3 '>cancel</button>
                            <button className='col-5 btn btn-success'>Continue</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CreateNewProduct 