import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
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
        paddingRight: 150,

    }),
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#2C133B',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16,
        borderRadius: "16px",
        width: "200px"

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
        fontSize: 15,

    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    }
};


const ListingHomePageHeader = () => {
    const navigate = useNavigate()
    return (
        <>
            <header class="nav_wrapper  pt-3">
                <div class="container">
                    <div class="nav_inner">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <div class="main_logo">
                                    <img src="assets/img/main_logo.svg" alt="logo" onClick={() => navigate("/")} />
                                </div>
                                <ul className='mx-5 d-flex'>
                                    <li class="cst-mayur">
                                        <span className='text-white preferred-c'>Preferred Currency:</span>
                                    </li>
                                    <li class="cst-mayur">
                                        <Select class="multiselect-cst search-for-anything" styles={customStyles} isMulti options={options} placeholder="Select" isClearable={false} />
                                    </li>
                                    <li class="cst-mayur">
                                        <div className="input-container">
                                            <input className="search-for-anything " type="text" placeholder='Search for anything' />
                                            <span className="icon-container" >
                                                <BsSearch style={{ "color": "white" }} />
                                            </span>
                                        </div>
                                    </li>
                                    <li class="cst-mayur">
                                        <FaUserCircle style={{ "color": "white", fontSize: "24px", marginLeft: "20px" }} />
                                    </li>
                                    <li class="cst-mayur ">
                                        <AiOutlineShoppingCart style={{ "color": "white", fontSize: "24px", marginLeft: "20px" }} />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}

export default ListingHomePageHeader