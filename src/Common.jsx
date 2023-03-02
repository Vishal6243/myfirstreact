import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id='header'>
                <div className='container-fluid mb-5'>
                    <div className="row">
                        <div className="col-11 col-lg-10 mx-auto">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>
                                        {props.name} 
                                        <span className='brand-name'> Responsive</span>
                                    </h1>
                                    <h5 className='my-3'>We are the team of talented developer making websites</h5>
                                    <div className='mt-3 hero-btn'>
                                        <NavLink to={props.visit} className='btn-get-started'>
                                            {props.btname}
                                        </NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Header img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;