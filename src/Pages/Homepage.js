import React from 'react';


import Hero from '../Components/Hero'
import About from '../Layouts/About'
import Services from '../Layouts/Services'
import Clients from '../Layouts/Clients'
import How from '../Layouts/How'
import Showcase from '../Layouts/Showcase'
import Journey from '../Layouts/Journey'
import Team from '../Layouts/Team'
import Events from '../Layouts/Events'
import CTA from '../Layouts/CTA'
import Footer from '../Layouts/Footer'

import HowData from '../Data/How'
import ServiceData from '../Data/Services'
import ClientData from '../Data/Clients'
import ShowcaseData from '../Data/Showcase'
import JourneyData from '../Data/Journey'
import TeamData from '../Data/Team'
import AboutData from '../Data/About'
import EventData from '../Data/Events'
import CTAData from '../Data/CTA'
import FooterData from '../Data/Footer'

import BG_music from '../img/Bg_music.mp3'

class Homepage extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
     <div className="App">
        
        <Hero />
        <Services  data={{ services: ServiceData.services, title1: ServiceData.title1, title2: ServiceData.title2 }} />
        <Clients data={{ clients: ClientData.reviews, title1: ClientData.title1, title2: ClientData.title2, logos: ClientData.logos }} />
        <Events data={{ services: EventData.services, title1: EventData.title1, title2: EventData.title2 }} />
        <How data={{ services: HowData.services, title1: HowData.title1, title2: HowData.title2 }} />
        <Showcase data={{ gallery: ShowcaseData.gallery, title1: ShowcaseData.title1, title2: ShowcaseData.title2 }} />
        <Journey data={{ mapMobile: JourneyData.mapMobile,mapDesktop: JourneyData.mapDesktop, title1: JourneyData.title1, title2: JourneyData.title2 }} />
        <Team data={{ members: TeamData.members, stats: TeamData.stats, title1: TeamData.title1, title2: TeamData.title2 }} />
        <About data={{ services: AboutData.services, title1: AboutData.title1, title2: AboutData.title2 }} />
        <CTA data={{ button: CTAData.button, description: CTAData.description, heading: CTAData.heading }} />
        <Footer data={{ logo: FooterData.logo, links: FooterData.links, connections: FooterData.connections, addresses: FooterData.addresses }} />
      </div>  
    )
  }
}

export default Homepage;
