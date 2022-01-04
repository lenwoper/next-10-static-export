import axios from 'axios'

import React, { useState, useRef } from 'react'

import bcrypt from 'bcryptjs'

import 'animate.css'
function Login() {

  


    //  login data in json data

    // getting all data through usref

    const email_log = useRef(null)
    const password_log = useRef(null)
    const seventh = useRef(null)
    const eight = useRef(null)
    const nineth = useRef(null)
    const tenth = useRef(null)
    const eleventh = useRef(null)



 











   function loginSubmit(event) {
    event.preventDefault()



        const LoginData = {
            'email': email_log.current.value,
    
            'password': bcrypt.hashSync(password_log.current.value, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
    
            'appKey': seventh.current.value,
    
    
            'source': eight.current.value,
    
    
            'userRoleType': nineth.current.value,
    
    
            'leadType': tenth.current.value,
    
    
            'service': eleventh.current.value,
    
        }
    

        // await axios.post(url, Login)
        //     .then((response) => {


        //         if (response.status === 200 && response != null) {


        //             console.info('your data has been sended on server ')


        //         } else {
        //             console.info('Something is going wrong please try again ');
        //         }

        //     }).catch((errors) => {
        //         console.info('something is going wrong in login proceess ', errors);

        //     })


        console.info(' thatis your name here rigth now ',LoginData)



    }







    return (
        <div>


           

            <div
                class="modal  fade bd-example-modal-lg pr-0 show"
                id="send-enquiry"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                style={{ display: "block", paddingRight: "5px" }}
            >

                <div class="modal-dialog modal-md">


                    <div class="modal-content animate__animated animate__fadeInRightBig">
                        <div class="modal-header pt-3 pb-2 mb-3" >
                            <h3
                                class="caption text-black font-weight-bolder font-20 text-left mb-2"
                            >
                                Tell us something about your Plan

                            </h3>

                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                               
                            </button>

                        </div>

                        <div class="modal-body">
                            <div class="row card-row-set">
                                <div class="col-md-12">
                                    <form onSubmit={loginSubmit} role="form" id="frmRegister" name="formName">



                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"

                                                ref={email_log}
                                                placeholder="Email"
                                                id="inputEmail"
                                                class="form-control"
                                                required
                                            />
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                name="origin"
                                                ref={password_log}
                                                id="inputOrigin"
                                                class="form-control"
                                                required
                                            />
                                        </div>

                                        <div class="form-group">





                                            <p class="font-12 text-muted">
                                                By clicking below, you agree to our Terms &amp; Conditions
                                            </p>
                                            <input
                                                type="hidden"
                                                name="appKey"

                                                id="first"
                                                ref={seventh}
                                                className='Hidden'
                                                value="HcX66Se_iPTaq1K3eMxsKw"

                                            /><input
                                                type="hidden"
                                                name="source"
                                                className='Hidden'
                                                id="source"
                                                ref={eight}

                                                value="TourOxy_Web"
                                            /><input
                                                type="hidden"
                                                name="userRoleType"
                                                ref={nineth}
                                                id="userRoleType"
                                                className='Hidden'
                                                value="UR04"
                                            /><input
                                                type="hidden"
                                                name="leadType"
                                                ref={tenth}
                                                id="leadType"
                                                className='Hidden'
                                                value="11"
                                            /><input
                                                type="hidden"
                                                name="service"
                                                ref={eleventh}
                                                id="service"
                                                className='Hidden'
                                                value="Tour"
                                            /><button
                                                type="submit"
                                                class="btn btn-no-color log-in btn-block mb-2 mt-2"
                                                id="log-in"
                                                data-item-type="oldUser"
                                            >
                                                Login now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Login
