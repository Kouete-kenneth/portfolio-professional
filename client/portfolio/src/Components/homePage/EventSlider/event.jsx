// EventSlider.js

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './event.scss'; // Create this file for custom styles
import img1 from '../../../Assets/images/ictComp2.jpg'
import img2 from '../../../Assets/images/ictComp1.jpg'
import img3 from '../../../Assets/images/ictComp3.jpg'
import img4 from '../../../Assets/images/ictComp4.jpg'
import img5 from '../../../Assets/images/ictComp5.jpg'

const events = [
  {
    name: 'Closing ceremony Huawei ICT Competition',
    organizer: 'Huawei Technologies ltds',
    year: "Tunisia, tunis: 2024, 'Hotel 4 season'",
    image: img1,
    role: "Regional finalist"
  },
  {
    name: 'Dominion Summit',
    organizer: 'Tech for Dominion',
    year: "Cameroon, Buea: 2023",
    image: img2,
  },
  {
    name: 'Hustler Conference',
    organizer: 'Oben Desmond',
    year: "Cameroon, Buea: 2024",
    image: img3,
    role:"Volunteer Organiser"
  },
  {
    name: 'Huawei Seed of the future',
    organizer: 'Huawei Technologies ltds',
    year: "china, Hong-kong,2023",
    image: img4,
    role:"Seed"
  },
  {
    name: 'Silicon Mountain Conference',
    organizer: 'Mount Community',
    year: "Cameroon, Buea: 2023, 'Mountain Hotel'",
    image: img5,
    role: "Hack my city challenge Participant"
  },
  // Add more event objects here
];

const EventSlider = () => {
  const settings = {
    duration: 3000, // Slide duration in milliseconds
    transitionDuration: 500, // Transition duration between slides
    infinite: true,
    indicators: true, // Show slide indicators
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="event-slider">
      <Slide {...settings}>
        {events.map((event, index) => (
          <div key={index} className="each-slide">
            <img src={event.image} alt={`Event ${index}`} />
            <div className="event-details">
              <h3>{event.name}</h3>
              <p>Organized by {event.organizer}</p>
              <p>{event.year}</p>
              <i>Role: {event.role}</i>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default EventSlider;
