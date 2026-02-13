import React from "react";

function About() {
  return (
    <div className="container">
      <div className="About ">
        <div className="d-flex justify-content-center flex-column align-items-center border border-5 border-dark rounded-3 my-5 p-4">
        <div>
        <h1>About Us</h1>
        </div>
      <div>
        <p>
          TextUtils is a simple yet powerful text manipulation web application
          designed to help users efficiently format and manage their text
          content. It provides useful features such as converting text to
          uppercase and lowercase, removing extra spaces, copying text to
          clipboard, and downloading text files instantly. The application is
          built using modern frontend technologies including React, JavaScript,
          HTML, CSS, and Bootstrap to ensure a responsive and user-friendly
          experience. TextUtils focuses on clean design, smooth performance, and
          practical functionality to improve productivity while working with
          text.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default About;
