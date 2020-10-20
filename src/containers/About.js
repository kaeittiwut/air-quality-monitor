import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container text-center">
        <p>
          PM Detector Real Time Dashboard is part of Wireless and Broadband
          Computer Networks 269430, IOT Application Term project.
        </p>

        <Link
          to="/"
          className="btn btn-secondary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Return Homepage
        </Link>
      </div>
    </div>
  );
};

export default About;
