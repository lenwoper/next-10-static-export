import React, { useState, useRef } from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'
import bcrypt from 'bcryptjs'

import 'animate.css'




function Form() {


    const router = useRouter()

    // backe to home if e 'll click on the hide button
    function backToHome() {
        router.push('/');

    }

    const first = useRef(null)
    const second = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassowrd = useRef(null)

    const seventh = useRef(null)

    const eight = useRef(null)
    const nineth = useRef(null)
    const tenth = useRef(null)
    const eleventh = useRef(null)





    async function formSubmit(event) {

        event.preventDefault();

        console.log('that is form data')


        //  josn data storing in the formData

        const formData = {

            'firstName': first.current.value,

            'lastName': second.current.value,


            'email': email.current.value,


            'password': bcrypt.hashSync(password.current.value, '$2a$10$CwTycUXWue0Thq9StjUM0u'),


            'password_confirmations': bcrypt.hashSync(confirmPassowrd.current.value, '$2a$10$CwTycUXWue0Thq9StjUM0u'),






            'appKey': seventh.current.value,


            'source': eight.current.value,


            'userRoleType': nineth.current.value,


            'leadType': tenth.current.value,


            'service': eleventh.current.value,

        }


        // data posting through fethc pia


        // const fethcRes= await fetch('', {
        //     method:'POST',
        //     body:JSON.stringify({data}),
        //     headers:{
        //         'Content-Type': 'application/json',
        //     }


        // })
        // const fetchResponse =await fethcRes.json()
        // if(fetchResponse.status===200 && fethcRes!=null){
        //     console.info(" your data has been send ");
        // }
        // else{
        //     console.info("did not send your data  ")
        // }
        // fethcRes.catch(err=>{
        //     console.log("Some erro has been occured here " , err)
        // })


        //  posting the data 


        // const url = 'https://api.touroxy.com/tourapi/tour_search'

        // const res = await axios
        //     .post(url, data)
        //     .then((repsone) => {
        //         if (repsone != 200 && repsone != null) {
        //             console.info('data has been s', repsone)


        //             //  clean all data n the input box 
        //             first.current.value = '';
        //             second.current.value = '';
        //             email.current.value = '';
        //             password.current.value = '';
        //             confirmPassowrd.current.value = '';

        //             seventh.current.value = '';
        //         }
        //         else {
        //             console.info('your data did not post something is goign wrong ');

        //         }
        //     })
        //     .catch((err) => {
        //         console.info(" error occured ", err)
        //     })












        setTimeout(() => {


            localStorage.setItem('registered', JSON.stringify(formData))

            router.push('/components/Dashboard')

        }, 0);

        //  set data in localStorage



















    }












    return (
        <div>






            <div
                class="modal  fade bd-example-modal-lg pr-0 show"
                id="sendenquiry"
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
                                onClick={backToHome}
                            >
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>

                        <div class="modal-body">
                            <div class="row card-row-set">
                                <div class="col-md-12">
                                    <form onSubmit={formSubmit} role="form" id="frmRegister" name="formName">
                                        <div class="form-group animated shake error">
                                            <input
                                                type="text"
                                                name="firstName"

                                                ref={first}
                                                placeholder="First Name"

                                                class="form-control"
                                                required
                                            />
                                        </div>

                                        <div class="form-group animated shake error">
                                            <input
                                                type="text"
                                                name="lastName"
                                                ref={second}
                                                placeholder="Last Name"
                                                id="inputfirst"
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"

                                                ref={email}
                                                placeholder="Email"
                                                id="inputEmail"
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                ref={password}
                                                placeholder="password"
                                                id="inputpassword"

                                                class="form-control"
                                                required
                                            />
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                name="Confirm"
                                                ref={confirmPassowrd}
                                                id="inputpassword"
                                                class="form-control"
                                                required
                                            />
                                        </div>

                                        <div class="form-group">
                                            {/* popup */}




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
                                                Plan My Trek
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

export default Form