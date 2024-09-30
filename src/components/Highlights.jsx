import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg,rightImg } from "../utils"
import VideoCareousel from "./VideoCarousel"
const Highlights = () => {

  useGSAP(()=>{
    gsap.to('#title',{opacity:1, y:0})
    gsap.to('.link', {opacity: 1, y:0, duration: 1, stagger:0.25})
  },[])


  return (
    <section id="highlights" className="w-screen
    overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width"> 
        
        <div className="mb-12 w-full item-end md:flex justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the film</p>
            <img src={watchImg} alt="watch" className="ml-2"/>

            <p className="link">Watch the film</p>
            <img src={rightImg} alt="watch" className="ml-2"/>
          </div>
        </div>

        <VideoCareousel/>
      </div>
    </section>
  )
}

export default Highlights
