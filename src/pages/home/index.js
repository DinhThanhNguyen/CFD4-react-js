import React, { useEffect, useState } from 'react'
import Action from './components/action'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Different from './components/Different'
import Gallery from './components/Gallery'
import Testimonial from './components/testimonial'


export default function Home() {

  let [stage, setStage] = useState();
  useEffect(() => {
    fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/home')
          .then(res => res.json())
          .then(res => {
            console.log(res)
            setStage(res)
          })
  }, [])



  if(!stage) return <div style={{height: 500, display: 'flex'}}><div style={{margin: 'auto'}}>...Loaing</div></div>




  return (
    <div>
      <main className="homepage" id="main">
        <Banner />
        <CourseList offline={stage.offline} online={stage.online} />
        <Different />
        {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="/https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="/video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
        <Testimonial list={stage.review} />
        <Gallery list={stage.gallery} />
        <Action />
      </main>
    </div>
  )
}
