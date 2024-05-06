import React from "react";
import backgroundImage from "../images/vcd.jpeg"; // Import your background image

const backgroundStyles = {
  position: "relative",
  height: "100vh",
  color: "white",
  textAlign: "center",
};

const imageStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(5px)",
};

const contentStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backdropFilter: "blur(5px)",
  padding: "20px",
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "10px",
};
const buttonStyles = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  background: "#007bff",
  color: "white",
};

function HomePage() {
  return (
    <div style={backgroundStyles}>
      <img src={backgroundImage} alt="Background" style={imageStyles} />
      <div style={contentStyles}>
        <h1>Welcome to the VCD System</h1>
        <p>Explore our extensive collection of high-quality videos.</p>
        <p>
          Discover a wide range of genres, from educational content to
          entertaining movies and documentaries.
        </p>
        <p>
          Our user-friendly interface makes it easy to find, watch, and enjoy
          your favorite videos.
        </p>
        <a href="/login">
          <button style={buttonStyles}>Get Started</button>
        </a>
        <p>
          Join our community of video enthusiasts and start your journey today!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
