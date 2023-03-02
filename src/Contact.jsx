import React from 'react';

const Conact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact us</h1>
            </div>
            <div className='container contact_div my-5'>
                <div className="row">
                    <div className="col-md-8 col-lg-6 col-11 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder='Enter your name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conact;