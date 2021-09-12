import { createRef } from "react"

const state = {
  sections: 7,
  pages: 7,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 3.0,
      header: "Weighted.io",
      image: "/assets/img/mobile_app.png",
      carousel: true,
      aspect: 1.61,
      text: `A mobile application which connects to a wifi-enabled scale via Google Cloud IoT (secure MQTT bridge). User of
        mobile app can hook up the scale to available networks and then retrieve readings, calibrate, and tare the scale. MVP for
        the tech is complete and now the team is reaching out to businesses to dropship their products when a customer's supply is low.`,
      techStack: `Tech Stack: Firebase (auth, hosting, storage, realtime-database, functions), Google Cloud (pub/sub, IoT), Stripe, React-Native, React, Arduino, Webpack, Express, and Redux`,
      link: `https://weightedio.com/`,
      businessLink: '',
      github: 'https://github.com/Jbuxofplenty/wifi_scale',
      pdf: '',
    },
    {
      offset: 2,
      factor: 3.0,
      header: "Atlas One",
      image: "/assets/img/charts.png",
      carousel: true,
      aspect: 1.61,
      text: `A financial tool that allows users to view all of their brokerage accounts' data in a single location.  
      Screens within the application are highly customizable and allow users to create widgets with different types of 
      tools they can use for financial analysis (stock analyzers, calculators, market simulator, and charts).`,
      techStack: `Tech Stack: Firebase (auth, hosting, storage, firestore, functions), Finnhub IO, Plaid, eThree, React, and Redux`,
      link: `https://atlasonefinn.com`,
      businessLink: '',
      github: 'https://github.com/Jbuxofplenty/atlas',
      pdf: '',
    },
    {
      offset: 3,
      factor: 4.0,
      header: "Deja Food",
      image: "/assets/img/deja_food.png",
      aspect: 1.5,
      text: `DejaFood is a platform which allows consumers to purchase short-dated meals at a discounted rate.  Businesses can host 
      meals or vouchers through our website and consumers can purchase these meals through our iOS or android app.`,
      techStack: `Tech Stack: Firebase (auth, hosting, storage, firestore, functions), React, Redux, React Native, Material UI, AWS (EC2, Route53, S3), Stripe, and Google Maps API`,
      link: 'https://dejafood.com',
      businessLink: 'https://business.dejafood.com',
      github: '',
      pdf: '',
    },
    {
      offset: 4,
      factor: 3.0,
      header: "Coffee Maker",
      image: "/assets/img/coffee_maker.jpg",
      aspect: 0.665,
      text: `Raspberry Pi receives HTTP GET requests from other devices on the network to heat and pour a specific amount of water.  
        Consists of two solenoid valves for the in/out water lines to the hot water heater, a flow meter attached to the inlet water 
        line to measure out the correct amount of water, and a linear actuator to activate the heating circuit.`,
      techStack: ``,
      link: '',
      businessLink: '',
      github: 'https://github.com/Jbuxofplenty/auto_coffee',
      pdf: '',
    },
    {
      offset: 5,
      factor: 10.0,
      header: "Resume",
      image: "/assets/img/josiah_buxton.jpg",
      aspect: 1.0,
      text: ``,
      techStack: ``,
      link: '',
      businessLink: '',
      github: '',
      pdf: '/assets/Buxton_Josiah_Engineering_Resume.pdf',
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 4.3, color: "#000", height: 20 }
  ],
  top: createRef()
}

export default state
