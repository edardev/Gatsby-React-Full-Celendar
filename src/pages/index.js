import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import '../components/main.scss'

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from'react-bootstrap/Modal'

const IndexPage = () => {

  const [displayModal, setDisplayModal] = useState(false);
  const [eventModal, setEventModal] = useState([]);
  const [calendarWeekends, setCalendarWeekends] = useState(true)
  const [eventsData, setEventsData ] = useState([
    { id: 1, title: "Event Now", start: '2019-11-14-19-16-39', end: '2019-11-14-22-16-39', extendedProps:{website: "https://sinergian.org", picture: 'https://eadeveloper.github.io/static/Edward-Almanzar-avatar-6ef7ebe2f647e45ee90c15871e0859bc.jpeg'}},
    { id: 2, title: "Comer bueno", start: new Date(), backgroundColor:"yellow", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
    { id: 3, title: "Enjoy food", start: new Date(), backgroundColor:"lightgreen", extendedProps:{website: "https://sinergian.org", picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCBoXE-er-xNh-R8V75iiyubJf6IQI09z8GGyFpQyfkahdjjoOg&s'}},
    { id: 4, title: "Jartura", start: '2019-11-14', end: '2019-11-16', backgroundColor:"pink", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
    { id: 5, title: "Event Now", start: '2019-11-02', backgroundColor:"gray", extendedProps:{website: "https://sinergian.org", picture: 'https://eadeveloper.github.io/static/Edward-Almanzar-avatar-6ef7ebe2f647e45ee90c15871e0859bc.jpeg'}},
    { id: 6, title: "Comer bueno", start: '2019-11-23', backgroundColor:"yellow", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
    { id: 7, title: "Enjoy food", start: '2019-11-15', backgroundColor:"lightgreen", extendedProps:{website: "https://sinergian.org", picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCBoXE-er-xNh-R8V75iiyubJf6IQI09z8GGyFpQyfkahdjjoOg&s'}},
    { id: 8, title: "Jartura", start: '2019-11-17', backgroundColor:"pink", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
    { id: 9, title: "Event Now", start: '2019-11-18', backgroundColor:"gray", extendedProps:{website: "https://sinergian.org", picture: 'https://eadeveloper.github.io/static/Edward-Almanzar-avatar-6ef7ebe2f647e45ee90c15871e0859bc.jpeg'}},
    { id: 10, title: "Comer bueno", start: '2019-11-18', backgroundColor:"yellow", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
    { id: 11, title: "Enjoy food", start: '2019-11-14', backgroundColor:"lightgreen", extendedProps:{website: "https://sinergian.org", picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCBoXE-er-xNh-R8V75iiyubJf6IQI09z8GGyFpQyfkahdjjoOg&s'}},
    { id: 12, title: "Jartura", start: '2019-11-3', backgroundColor:"pink", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
    { id: 13, title: "Comer bueno", start: new Date(), backgroundColor:"yellow", extendedProps:{website: "https://sinergian.org", picture: 'https://sinergiany.org/sites/default/files/SinergiaNY_Logo_tablet2.png'}},
  ])

  const hideModal = () => setDisplayModal(false);
  const toggleWeekends = () => setCalendarWeekends(!calendarWeekends)

  const handleDateClick = arg => {
      setEventsData(eventsData.concat({
        // Creates a new array
        title: "New Event",
        start: arg.date,
        end: arg.allDay
      }))
  }
  

  return ( 
  <Layout>

      {calendarWeekends ? (
        <Button variant="primary" onClick={toggleWeekends}>
          Display only week days
        </Button>
      ) : (
        <Button variant="primary" onClick={toggleWeekends}>
          Display weekends days    
        </Button>
      )}

     {
       eventModal.map( (event, id) =>(
        <Modal show={displayModal} onHide={hideModal} key={id}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{event.title}</h4>
          <h4>{event.website}</h4>
          <p>{event.start.toString()}</p>
          <p>{event.allDay.toString()}</p>
          <p>{event.extendedProps.website}</p>
          <img src={event.extendedProps.picture} alt={event.extendedProps.picture}/>
          <Link to="/page-2/">Go to page 2</Link>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={hideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
         </Modal>
       ))
       
     } 
      
        <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "today, prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            weekends={calendarWeekends}
            events={eventsData}
            dateClick={handleDateClick}
            eventClick={(e)=>{
              if(e){
                setDisplayModal(true)
                setEventModal([e.event])
                console.log(e.event)
              }
            }}
          />



    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)



}





export default IndexPage
