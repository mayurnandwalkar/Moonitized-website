import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import WatchImg from '../../src/images/watch.jpg'
import LaptopImg from '../../src/images/laptop.jpg'
import PhoneImg from '../../src/images/phone.jpg'
import AirpodeImg from '../../src/images/airpodes.jpg'
import CableImg from '../../src/images/cable.jpg'
import TabImg from '../../src/images/tab.jpg'
import { useNavigate } from 'react-router-dom';

const Listings = () => {
  const navigate = useNavigate()
  return (
    <>
      <section>
        <div className='container'>
          <div class="container-fluid">
            <div class="row">
              <div class="d-md-block col-md-5 col-lg-4 col-xl-4">
                <div class="mb-4 p-4 cst-border-white">
                  <div class="pt-3">
                    <ul class="navbar-nav">
                      <div className='container mt-5'>
                        <div className='text-white'><h1>Top sellers</h1></div>
                        <div className='text-white cst-font-tahoma'><h2>Category name</h2></div>
                        <div className='text-white cst-font-tahoma'><h2>discover products</h2></div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-7 col-lg-8 col-xl-8 ">
                <div class="mb-5 mt-5">
                  <div class="row">
                    <div class="col-xl-4 col-md-6 mb-4 "  >
                      <div class="card" >
                        <div class="card-body" >
                          <img src={WatchImg} onClick={() => navigate("/single-product")}/>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4 "  >
                      <div class="card" >
                        <div class="card-body" >
                          <img src={TabImg} />
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4 col-md-6 mb-4 "  >
                      <div class="card" >
                        <div class="card-body" >
                          <img src={LaptopImg} />
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4 "  >
                      <div class="card" >
                        <div class="card-body" >
                          <img src={PhoneImg} />
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4 "  >
                      <div class="card" >
                        <div class="card-body" >
                          <img src={AirpodeImg} />
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4 "  >
                      <div class="card" >
                        <div class="card-body" >
                          <img src={CableImg} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listings