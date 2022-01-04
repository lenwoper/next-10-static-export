import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form from './components/Form';
import MultipleCarousel from './components/MultipleCarousel';


export default function Home() {



  const sendEnquiry = () => {
    document.getElementById('inqueryFormContainer').style.display = 'block'
  }






  // card section json data 


  const cardSectionData = [
    {
      imageUrl: 'https://www.krausmuller.com.br/wp-content/uploads/2019/12/automacao-industrial-kraus-muller-900x450.jpg',
      title: 'some things ',
      describition: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',


      learnUrl: 'some'
    }
    ,
    {
      imageUrl: 'https://www.krausmuller.com.br/wp-content/uploads/2019/12/automacao-industrial-kraus-muller-900x450.jpg',

      title: 'some things ',
      describition: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',


      learnUrl: 'some'
    }
    ,
    {
      imageUrl: 'https://www.krausmuller.com.br/wp-content/uploads/2019/12/automacao-industrial-kraus-muller-900x450.jpg',

      title: 'some things ',
      describition: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',


      learnUrl: 'some'
    }
    ,
    {
      imageUrl: 'https://www.krausmuller.com.br/wp-content/uploads/2019/12/automacao-industrial-kraus-muller-900x450.jpg',

      title: 'some things ',
      describition: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',


      learnUrl: 'some'
    }
  ]


  //  json data fro the carousel part in this 



  const carouselItem = [
    {
      image: 'https://image.freepik.com/free-vector/smart-conveyor-industrial-automation-industry-production-web-banner-thin-line-vector-illustration_48369-3517.jpg',
      title: 'First slide ',
      describitions: 'lorem ipsume some things dummy text here ',
      internaltime: 1000
    }
    ,
    {
      image: 'https://image.freepik.com/free-vector/smart-conveyor-industrial-automation-industry-production-web-banner-thin-line-vector-illustration_48369-3517.jpg',
      title: 'Second slide',
      describitions: 'lorem ipsume some things dummy text here ',
      internaltime: 5000
    },

    {
      image: 'https://image.freepik.com/free-vector/smart-conveyor-industrial-automation-industry-production-web-banner-thin-line-vector-illustration_48369-3517.jpg',
      title: 'Third slide',
      describitions: 'lorem ipsume some things dummy text here ',
      internaltime: 1000
    }

  ]

  //  if you getting anyhing hre right now please select 

  const carouselOneSightContent = {
    title: 'that is automation here ',
    describition: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ecommodo consequat.Duis aute irure dolor in reprehenderit in voluptate '
  }




  return (
    <>
  

      <div className={styles.index_container}>
        <header className={styles.header_index_poster}>


          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className={styles.header_poster_image}
                src="https://unlockingthebible.org/wp-content/uploads/2018/05/love-Christ.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                
          <button className={styles.poster_botton_name} onClick={sendEnquiry}>EXPLORE</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.header_poster_image}
                src="https://unlockingthebible.org/wp-content/uploads/2018/05/love-Christ.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
          <button className={styles.poster_botton_name} onClick={sendEnquiry}>EXPLORE</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.header_poster_image}

                src="https://unlockingthebible.org/wp-content/uploads/2018/05/love-Christ.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                
          <button className={styles.poster_botton_name} onClick={sendEnquiry}>EXPLORE</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>











        </header>

        {/* card setion start */}
        <Form />


        <div className={styles.cad_section}>

          {
            cardSectionData && cardSectionData.map((item) => {
              return (
                <>
                  <div className={styles.card__holder}>
                    <img className={styles.card__holder_image} src={item.imageUrl} alt="loading" />
                    {/* section under this card  */}
                    <dic className={styles.cardarticles__holder}>
                      <h2 className={styles.cad__title}>{item.title}</h2>
                      <article className={styles.card__articles}>
                        {item.describition}


                      </article>
                      <button className={styles.card_learnMore}><Link href=""><a className={styles.Link_poster}>LEARN MORE</a></Link></button>
                    </dic>


                  </div>

                </>

              )
            })
          }




        </div>
        {/*  crousel image slider  with flex box  */}


        <div className={styles.carousel__flex_box}>
          {/*  that is fist  */}
          <div className={styles.inner__carousel}>

            <article className={styles.carousel_articles}>
              <h2 className={styles.carousel__articles_title}>
                "{carouselOneSightContent.title} "
              </h2>
              <article className={styles.carousel_paragraph}>
                {carouselOneSightContent.describition}

              </article>



            </article>



          </div>
          {/*  that is second for the carousel  */}

          <div className={styles.inner__carousel}>
            <Carousel>

              {/* {carouselItem && carouselItem.map((item) => {
                return (
                  <>
                    <Carousel.Item interval={item.internaltime}>
                      <img
                        className="d-block w-100"
                        src={item.image}
                        alt="loading.."
                      />
                      <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>{item.title}</h3>
                        <p style={{ color: 'black' }}>{item.describitions}</p>
                      </Carousel.Caption>
                    </Carousel.Item></>
                )
              })
              }
 */}


              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://image.freepik.com/free-vector/smart-conveyor-industrial-automation-industry-production-web-banner-thin-line-vector-illustration_48369-3517.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 style={{ color: 'black', fontSize: '20px' }}>First slide label</h3>
                  <p style={{ color: 'black', fontSize: '14px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100"
                  src="https://image.freepik.com/free-vector/smart-conveyor-industrial-automation-industry-production-web-banner-thin-line-vector-illustration_48369-3517.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 style={{ color: 'black', fontSize: '20px' }}>Second slide label</h3>
                  <p style={{ color: 'black', fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://image.freepik.com/free-vector/smart-conveyor-industrial-automation-industry-production-web-banner-thin-line-vector-illustration_48369-3517.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 style={{ color: 'black', fontSize: '20px' }}>Third slide label</h3>
                  <p style={{ color: 'black', fontSize: '14px' }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>



        </div>

<div className={styles.shadow_type_container}>
<MultipleCarousel/>
</div>



      </div>
    </>
  );
}
