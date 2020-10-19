import React from 'react';

const Footer = (props) => {
  const { company, email } = props;

  return (
    <div className="container-fluid">
      <hr />
      <div className="text-uppercase">
        <h6>
          <span className="text-danger"> {company} </span>
          <span className="text-muted">| {email}</span>
        </h6>
      </div>
      <br />
    </div>
  );
};

export default Footer;
