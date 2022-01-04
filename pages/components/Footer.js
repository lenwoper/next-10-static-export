import React,{useState} from 'react'
import Link from 'next/link'
import { useStateValue} from './DataLayer'


function Footer() {
    const [inputs, setstate] = useState({})
    const [{data} , dispatch ] =useStateValue()

    console.group(data)
        // SubscribeEmail form 
    const handleChange=(e)=>{
      var names = e.target.name
      var value = e.target.value
    
      setstate(values=>({...values , [names]:value}))
    
    
    }

  
    //  context api 

    const ContextApi=()=>{

dispatch({
    type:'ADD_DATA',
    item:{
        name:'abhijeet kumar',
        who :'clever pogrammer ',
        why:' intent '
    }

})



    }
   
    
        const SubscribeEmail = (event) => {
            event.preventDefault()
    console.log(inputs)
        }
        return (
            <div>
    
                <div className='containerFooter' >
    
                    {/* stat is link older block */}
                    <div className="linkHolder__container">
                        <div className='linkHolder__block'>
                            {/* again split  */}
                            <strong className="title__footer">
                                The Lalit Suri Hospitality Group
                            </strong>
                            <br />
                            <div className='split__inner__link'>
    
    
                                <div className="split__block">
                                    <Link href=""><a>About Us</a></Link>
                                    <br />
                                    <Link href=""><a>Management</a></Link>
                                    <br />
                                    <Link href=""><a>Careers</a></Link>
                                    <br />
                                    <Link href=""><a>Awards </a></Link>
                                    <br />
                                    <Link href=""><a>Published Rates </a></Link>
                                    <br />
                                    <Link href=""><a>Investor Relations </a></Link>
                                </div>
                                <div className="split__block">
                                    <Link href=""><a>We Care</a></Link>
                                    <br />
                                    <Link href=""><a>Developing </a></Link>
                                    <br />
                                    <Link href=""><a>Destinations</a></Link>
                                    <br />
                                    <Link href=""><a>Disha</a></Link>
                                    <br />
                                    <Link href=""><a>Contact Us </a></Link>
                                    <br />
                                    <Link href=""><a>Site Map </a></Link>
                                    <br />
                                    <Link href=""><a>Privacy Policy </a></Link>
                                </div>
                            </div>
    
                        </div>
                        <div className='linkHolder__block'>
                            <strong className="title__footer">
                                Our Brands
                            </strong>
                            <br />
                            <Link href=""><a>Kitty Su</a></Link>
                            <br />
                            <Link href=""><a>The Lalit Suri Hospitality School</a></Link>
    
    
                        </div>
                        <div className='linkHolder__block'>
                            <strong className="title__footer">
                                Learn With The Lalit
                            </strong>
                            <br />
                            <Link href=""><a>About</a></Link>
                            <br />
                            <Link href=""><a>Services</a></Link>
                            <br />
                            <Link href=""><a>Pricing</a></Link>
                            <br />
                            <Link href=""><a>Mangement </a></Link>
                        </div>
                        <div className='linkHolder__block' id="contact">
                            <strong className="title__footer">
                                Get in Touch
    
    
                            </strong>
                            <br />
                            <p>India Toll Free:
                                1800 11 77 11
                                Telephone:
                                +91 11 4444 7474</p>
                        </div>
                        <div className='linkHolder__block'>
                            <strong className="title__footer">
                                Subscribe to our Newsletter
                            </strong>
                            <br />
                            <p>
                                Be the first to receive exclusive offers and the latest news across all The LaLit Hotels, Palaces & Resorts directly in your inbox.
                            </p>
                            <br />
    
                            {/* that is from  */}
    
                            <form className="footer__form" onSubmit={SubscribeEmail}>
    
                                <input className="footer__email_box"  value={inputs.mail || ""} name="mail"   onChange={handleChange} type='email' placeholder="Email"  />
                                <button className="footer_email__submit" type="submit">SIGN UP</button>
    
                            </form>
    

    <button onClick={ContextApi}>Click here </button>
    
                        </div>
    
                    </div>
    
    
                  
    
                </div>
    
    
            </div>
        )







}

export default Footer


