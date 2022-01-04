import React, { useState, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import 'animate.css'
// import { Route, Redirect  , useNavigate} from 'react-router-dom';





function Form() {


    const hideForm = () => {
        document.getElementById('inqueryFormContainer').style.display = 'none';
    }




    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const fifth = useRef(null)
    const sixth = useRef(null)
    const seventh = useRef(null)

    const eight = useRef(null)
    const nineth = useRef(null)
    const tenth = useRef(null)
    const eleventh = useRef(null)

    //  form popup useref 
    const FormSubmitInf = useRef(null)



    async function formSubmit(event) {

        event.preventDefault();

        console.log('that is form data', FormSubmitInf)



        const formData = {

            'firstName': first.current.value,

            'lastName': second.current.value,


            'email': third.current.value,


            'mobile': fourth.current.value,


            'origin': fifth.current.value,



            'destination': sixth.current.value,


            'appKey': seventh.current.value,


            'source': eight.current.value,


            'userRoleType': nineth.current.value,


            'leadType': tenth.current.value,


            'service': eleventh.current.value,

        }












        // =====================

        // const response =await fetch('http://dummy.restapiexample.com/api/v1/create',{
        //     method:'POST',
        //      body: JSON.stringify({inputs}),
        //      header:{
        //          'Content-Type':'application/json',
        //      }


        // })
        // const data = await response.json()

        // console.log(data)





        //===========================================================
        // apiKey: 'HcX66Se_iPTaq1K3eMxsKw'

        //  useref for popup








        const url = 'https://api.touroxy.com/travelapi/enquiry/insert';

        var FormDate = document.getElementById('FormSubmitForm')

    

        const res = await axios
            .post(url, formData)
            .then(function (response) {
                if (response.status === 200 && response != null) {
                    console.log('data from fetchDealListingList', response);
                    // return inputs;
                    FormSubmitInf.current.innerText = 'Thank your we ll contatc you soon  ';
                    FormDate.style.display = 'block'
                    first.current.value = '';
                    second.current.value = '';
                    third.current.value = '';
                    fourth.current.value = '';
                    fifth.current.value = '';
                    sixth.current.value = '';
                    seventh.current.value = '';




                    setTimeout(() => {
                        FormSubmitInf.current.hidden = true
                        FormDate.style.display = 'none'
                    }, 3500);

                    //  set data in localStorage




                    localStorage.setItem('dataLocal', JSON.stringify(formData));


                } else {
                    throw new Error('Empty data');

                }
            })
            .catch(function (error) {
                return []; // Return empty array in case error response.
            });


















    }












    return (
        <div>


            <div id="inqueryFormContainer">

                <p id="FormSubmitForm" ref={FormSubmitInf} ></p>

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
                                    onClick={hideForm}
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

                                                    ref={third}
                                                    placeholder="Email"
                                                    id="inputEmail"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>
                                            <div class="form-group">
                                                <input
                                                    type="number"
                                                    name="mobile"
                                                    ref={fourth}
                                                    placeholder="Mobile"
                                                    id="inputMobile"

                                                    class="form-control"
                                                    required
                                                />
                                            </div>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Going From"
                                                    name="origin"
                                                    ref={fifth}
                                                    id="inputOrigin"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Going To"
                                                    name="destination"
                                                    ref={sixth}
                                                    id="inputDestination"
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
        </div>

    )


}

export default Form