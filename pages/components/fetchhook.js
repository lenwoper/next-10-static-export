import axios from "axios";
import React, { useEffect, useState } from "react";
export default  (url , searchreq) => {

    const [Loading, setLoading] = useState(true);
    const [Data, setData] = useState(null)
   
    // what is you 've please 


    useEffect(() => {


        var res = axios.post(url, searchreq)
            .then((response) => {
                if (response.status=== 200 && response != null) {
                    console.info("your data hase been fetch", Data);
                    setData(response)
                    setLoading(false)



            }
            else {
                console.info('sorry somethingis groing wrong please try again ')
            }

            })
            .catch(err=>{
                console.info('There is some erro has been occured  to fecthing the data ' , err);
            })


}, [url])

return [Data, Loading]




}

