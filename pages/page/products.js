import React, { useState, useEffect } from 'react'
import fetchhook from '../components/fetchhook'
import { Markup } from 'interweave';
import Head from 'next/head'
import Form from '../components/Form'





function products() {

    const [getData, setData] = useState(null)
    const [data, setdata] = useState(null)
    // filtered data store here 
    const [filtered, setfiltered] = useState(null)
    var arr = []

    //  providing two arrugment : url and key

    const url = 'https://api.touroxy.com/tourapi/tour_search'
    var searchreq = {
        "appKey": "HcX66Se_iPTaq1K3eMxsKw",
        "limit": 10,
        "maxLimit": 0,
        "allTour": true,
        "passengerCount": 1,
        "perDayPricingFilter": true,
        "promotional": false

    }


    const [Data, Loading] = fetchhook(url, searchreq)

    console.info(' that is your data ', Data)

    useEffect(() => {

        setdata(Data)
        arr.push(Data)
        console.log(' that is yur data here =', arr)

    })


    console.info(data)


    //  form open here on click 


    const sendEnquiry = () => {
        document.getElementById('inqueryFormContainer').style.display = 'block'

    }



    // onchanging sorting of the products 

    const sorted = (e) => {




        var getThisCurrentDiv = document.getElementById('filtered_div');
        if (getThisCurrentDiv.style.display === 'none') {
            getThisCurrentDiv.style.display = 'block'
        }
        var gettype = e.target.value;
        if (gettype === 'Goa') {
            var Goa = data.data.tourList.filter((a) => a.tourData.tourSubCategory.name === 'Goa')
            setfiltered(Goa)
            console.log('Goa data store with filter here ', Goa)




        }
        if (gettype === 'Kerala') {
            var Kerala = data.data.tourList.filter((a) => a.tourData.tourSubCategory.name === 'Kerala')
            console.info(' that is alphabate sorting == ', Kerala)
            setfiltered(Kerala)

        }
        if (gettype === 'price__increasing') {
            var price_sorted = data.data.tourList.sort((a, b) => a.tourData.tourMonthlyPrice.startingPrice - b.tourData.tourMonthlyPrice.startingPrice)


            setfiltered(price_sorted)


        }

        else {
            console.info(' That is defautl value ')
        }


        console.warn(" that is filtere")
        document.getElementById('all_default').style.display = "none";

    }

    function Default_ShowAll() {

        var getALL = document.getElementById('all_default').style.display = 'block';
        var getFiltred = document.getElementById('filtered_div').style.display = 'none';

    }




    function filterWithPrice(e) {
        var targetOpen = e.target.value;
        var getALL = document.getElementById('all_default')
        var getFiltred = document.getElementById('filtered_div')

        if (getALL.style.display === 'block') {
            getFiltred.style.display = 'none';
            var price_sorted = data.data.tourList.filter((a) => a.tourData.tourMonthlyPrice.startingPrice < targetOpen)

            setfiltered(price_sorted)
        } else {

            getFiltred.style.display = 'block';
            getALL.style.display = 'none'
            var price_sorted = data.data.tourList.filter((a) => a.tourData.tourMonthlyPrice.startingPrice < targetOpen)

            setfiltered(price_sorted)

        }






    }












    return (
        <div>

            <Form />


            <div className='global__container'>
                <div className='products_floating_page_products'>
                    <div className='filter__button'>




                        <button onClick={Default_ShowAll} >All</button>
                        <button onClick={sorted} value="Goa">Goa</button>
                        <button onClick={sorted} value="Kerala">Kerala</button>
                        <button onClick={sorted} value="price__increasing">increasing price </button>
                        {/*  */}
                        <div class="slidecontainer">
                            <input type="range" min="7000" max="17600" onChange={filterWithPrice} class="slider" id="myRange" />
                        </div>

                    </div>

                    {/*  that is filtered data  */}
                    <div className='productsPage_container'>
                        <div className='products_holder' id="filtered_div">




                            {


                                filtered === null ? '' : filtered.map((item) => {

                                    return (
                                        <>

                                            <div className='productsPage_card'>

                                                <img src="https://lh3.googleusercontent.com/proxy/sevs663GDY8UXOrR8QWGXWpprzg_7XrNmPmXNA5QwGihOojAQTBFEFwEx2LXEY0mg532vqT8KDtmjnjZ-WonWLZcCtE2abGT6qH8Y8KrlpHjtc1h3L2a90X1n6eDoDYh9EJZ2REOhHoiLy97VF_x3Q" alt="loading..." style={{ borderRadius: "5px", width: "100%", height: 'auto' }} />

                                                <section className='productsPage_section'>
                                                    <h3>{item.tourData.name}</h3>

                                                    <p> {item.tourData.title}
                                                        <br />
                                                        {item.tourData.tourCategory.name}
                                                        <br />
                                                        {item.tourData.tourMonthlyPrice.startingPrice}</p>

                                                    <article>
                                                        <Markup content={item.tourData.desc} />

                                                        <button className="buttonForiquiery" onClick={sendEnquiry}>click</button>

                                                    </article>
                                                </section>
                                            </div>








                                        </>
                                    )
                                })



                            }
                        </div>


                        {/*  finished  here ===  */}

                        <div className='products_holder' id="all_default">


                            {
                                Loading ? <img style={{ width: '100%' }} src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="something is going wrong here" />
                                    : data.data.tourList.map((item) => {
                                        return (
                                            <>

                                                <div className='productsPage_card'>


                                                    <img src="https://lh3.googleusercontent.com/proxy/sevs663GDY8UXOrR8QWGXWpprzg_7XrNmPmXNA5QwGihOojAQTBFEFwEx2LXEY0mg532vqT8KDtmjnjZ-WonWLZcCtE2abGT6qH8Y8KrlpHjtc1h3L2a90X1n6eDoDYh9EJZ2REOhHoiLy97VF_x3Q" alt="loading..." style={{ borderRadius: "5px", width: "100%", height: 'auto' }} />

                                                    <section className='productsPage_section'>
                                                        <h3>{item.tourData.name}</h3>
                                                        <p>{item.tourData.title}</p>
                                                        <p>{item.tourData.tourCategory.name}</p>
                                                        <p>{item.tourData.tourMonthlyPrice.startingPrice}</p>
                                                        <article>
                                                            <Markup content={item.tourData.desc} />

                                                            <button className="buttonForiquiery" onClick={sendEnquiry}>click</button>

                                                        </article>
                                                    </section>


                                                 
                                                </div>


                                            </>

                                        )
                                    })
                            }
                        </div>




                    </div>






                </div>
            </div>
        </div>
    )
}

export default products
