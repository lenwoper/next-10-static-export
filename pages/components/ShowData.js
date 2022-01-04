import React, { useState } from 'react'

function ShowData() {
    const [state, setstate] = useState({})







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
        <div>

          
            <h1> we have to show this data </h1>
            <button onClick={showLocalData}>Show </button>
            <li>{state.firstName}</li>
            <li>{state.lastName}</li>
            <li>{state.email}</li>
            <li>{state.mobile}</li>
            <li> {state.origin}  {state.destination}</li>

        </div>
    )
}

export default ShowData
