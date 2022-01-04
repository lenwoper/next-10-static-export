import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
function Dashboard() {

    const router = useRouter()
    const [state, setstate] = useState({})

    //   greating a obeject in 

    function logOut() {
        localStorage.removeItem('registered')



        router.push('/')

    }





    function showLocalData() {

        const submittedData = localStorage.getItem('dataLocal')

        if (submittedData != '' && submittedData != null) {
            setstate(JSON.parse(submittedData));
        }
        else {

            console.info('there is not any data')
        }
    }





    return (
        <div >
            <div className='global__container'>

                <button onClick={logOut}>LogOut</button>



                <h1>Clear all our query</h1>


                <h1> we have to show this data </h1>
                <button onClick={showLocalData}>Show </button>


                <li>{state.firstName}</li>
                <li>{state.lastName}</li>
                <li>{state.email}</li>
                <li>{state.mobile}</li>
                <li> {state.origin}  {state.destination}</li>

            </div>


        </div>
    )
}






export default Dashboard
