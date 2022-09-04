import React from 'react'
import Section from './Section'
import { Link, Outlet } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

let data

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: "https://persada-store-bandung-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const reference = ref(database, '/projects');

onValue(reference, (snapshot) => {
  let data = snapshot.val();
  console.log(data)

  data = data.map(element => {
    element.year = 'y' + element.appointment 
  })
});

function Projects() {

  // let data = [
  //   {
  //     name: 'Bank Syariah Indonesia',
  //     year: 2021,
  //     program: 'urban',
  //     scale: '>1000',
  //     status: 'idea',
  //     location: 'Jakarta',
  //     color: 'blue',
  //     x: 100,
  //     y: 20,
  //     kelas: 'box fooo'
  //   },
  //   {
  //     name: 'Jembatan UI',
  //     year: 2022,
  //     program: 'housing',
  //     scale: '>1000',
  //     status: 'idea',
  //     location: 'Bogor',
  //     color: '#EE4B4B',
  //     x: 1000,
  //     y: 20,
  //     kelas: 'box fooo'
  //   },
  //   {
  //     name: 'Central Park',
  //     year: 2022,
  //     program: 'urban',
  //     scale: '>1000',
  //     status: 'completed',
  //     location: 'Jakarta',
  //     color: '#84D8F6',
  //     x: 100,
  //     y: 0,
  //     kelas: 'box sdsd'
  //   },
  // ]

  console.log(data)

  const isotope = React.useRef()
  // store the filter keyword in a state
  const [dasar, setDasar] = React.useState('location')

  // handling filter key change

  const changeDasar = key => (e) => {
    document.querySelectorAll(".sorting-btn").forEach(element => {
      element.classList.remove('actived');
    });

    e.target.classList.add('actived');
    return setDasar(key)
  }

  let year = ['y2021', 'y2022']
  let location = ['Bogor', 'Jakarta']
  let status = ['idea', 'completed']

  let dasarDict0
  let dasarDict1

  for (let i = 0; i < location.length; i++) {
    let content = {
      year: year[i],
      location: location[i],
      status: status[i]
    }
    eval("dasarDict" + i + " = " + JSON.stringify(content));
  }

  return (
    <div className='container projects' >
      <h1 className='font-gede-banget' style={{ textAlign: 'center' }} >Our Projects</h1>
      <div className='flex-row sorting-btn-container' >
        <div className=' flex-row inner-container-button'>
          <div className='sorting-btn' onClick={changeDasar('status')} >Status</div>
          <div className='sorting-btn' onClick={changeDasar('location')} >Location</div>
          {/* <div className='sorting-btn' onClick={changeDasar('program')} >program</div> */}
          <div className='sorting-btn' onClick={changeDasar('year')} >Year</div>
        </div>
      </div>
      
      <div className='playground-container' >
        
        <Section dasar={dasar} dasarDict={dasarDict0} code={'b'} ></Section>
        <Section dasar={dasar} dasarDict={dasarDict1} code={'a'} ></Section>
      </div>
      <Outlet />
    </div>
  )
}

export default Projects

  

