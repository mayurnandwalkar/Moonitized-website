import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
import Select from 'react-select';
const options = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USDT', label: 'USDT' },
    { value: 'BNB', label: 'BNB' },
]

const customStyles = {
    input: (provided) => ({
        ...provided,
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16,
        paddingRight: 150
    }),
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

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <header class="nav_wrapper seller-dashaboard-class">
                <div class="container">
                    <div class="nav_inner">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <div class="main_logo">
                                    <img src="assets/img/main_logo.svg" alt="logo" onClick={() => navigate("/")} />
                                </div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex mx-2">
                                        <li class="nav-item mx-3 align-items-center">
                                            <span class="text-white">PreferredCurrency:</span>
                                        </li>
                                        <li class="nav-item mx-3    ">
                                            <Select class="multiselect-cst" styles={customStyles} isMulti options={options} placeholder="Select" isClearable={false} />
                                        </li>
                                        <li class="nav-item ">
                                            <input class="form-control me-2" type="search" placeholder='Search for anything' style={{ backgroundColor: "#2C133B", color: "#FFFFFF", borderColor: "#B186D2", borderRadius: "0.25rem", height: "36px", padding: "0.375rem 0.75rem", fontFamily: "Roboto", fontSize: "16px", "padding": "0px 0px 0px 100px" }} aria-label="Search" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <form class="f d-flex orm-inline my-2 my-lg-0">
                            <li class="nav-item">
                                <FaUserCircle style={{ "color": "white", fontSize: "24px", marginLeft: "20px" }} />
                            </li>
                            <li class="nav-item">
                                <AiOutlineShoppingCart style={{ "color": "white", fontSize: "24px", marginLeft: "20px" }} />
                            </li>
                        </form>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Home