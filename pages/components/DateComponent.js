import React, { useState } from 'react'

function DateComponent() {
    const [minutes, setstate] = useState(null)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //  getting data 
    var objectDate = new Date();
    var objectDate = new Date();
    // full time get 


    let monthName = months[objectDate.getMonth()];
    var dayName = days[objectDate.getDay()]
    var cureentDate = objectDate.getDate()
    var currentYear = objectDate.getFullYear()
    var month = objectDate.getMonth()
    // time
    var hour = objectDate.getHours()

    setTimeout(() => {

        setstate(objectDate.getMinutes())

    }, 6000);


    return (
        <div>

            <span>{dayName + " , " + monthName + " | " + cureentDate + "-" + month + "-" + currentYear}</span> <span> | Time : {hour + ":" + minutes}</span>

        </div>
    )
}

export default DateComponent
