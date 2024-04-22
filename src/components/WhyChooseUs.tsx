'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
  title: "Harmony Haven: A Melodic Journey",
  description: "Embark on a musical odyssey at Harmony Haven, where aspiring musicians of all levels discover their rhythm, melody, and harmony. Our expert instructors guide students through a diverse curriculum, from classical compositions to modern beats, fostering creativity and mastery."
  },
  {
  title: "Rhythmic Realms: Where Music Comes Alive",
  "description": "Step into Rhythmic Realms and immerse yourself in a world where music transcends boundaries. Our school offers a vibrant atmosphere where students explore various genres, develop technical prowess, and cultivate a deep appreciation for the art of sound."
  },
  {
  title: "Sonic Sanctuary: Elevating Musical Excellence",
  description: "Discover your sonic potential at Sonic Sanctuary, where passion meets precision. Our renowned faculty provides personalized instruction, empowering students to unlock their musical genius and shape their own sonic landscapes."
  },
  {
  title: "Melody Masters: Crafting Musical Virtuosos",
  description: "Join the ranks of musical virtuosos at Melody Masters, where talent meets training. Our comprehensive curriculum and world-class instructors nurture musicianship from the fundamentals to advanced techniques, preparing students for a lifelong journey of musical mastery."
  },
  {
  title: "Cadence Academy: Orchestrating Dreams",
  description: "At Cadence Academy, dreams take flight through the power of music. From soloists to ensembles, beginners to maestros, our inclusive community celebrates every musical journey. Join us and compose your own symphony of success."
  }
  ]
export default function WhyChooseUs() {
  return (
    <div>
     <StickyScroll content={content}/>
    </div>
  )
}
