import React from "react";

function Help() {
  return (
    <div className="container mt-5">
      <h2>Help</h2>
      <h4>Welcome to our Online VCD System!</h4>
      <p>
        We're here to assist you in making the most out of your online VCD
        experience. If you have any questions or need assistance, please refer
        to the information below.
      </p>

      <section id="renting">
        <h4>How to Rent a Movie</h4>
        <p>To rent a movie, follow these steps:</p>
        <ol>
          <li>Log in to your account or register if you don't have one.</li>
          <li>Browse through our extensive collection of movies.</li>
          <li>
            Click on the movie you're interested in and press the "Rent" button.
          </li>
          <li>Choose the rental period and proceed to checkout.</li>
          <li>
            Once the payment is confirmed, you can start watching the movie.
          </li>
        </ol>
      </section>

      <section id="returning">
        <h4>How to Return a Movie</h4>
        <p>To return a rented movie, please follow these steps:</p>
        <ol>
          <li>Go to your account and select the "Rented Movies" section.</li>
          <li>
            Find the movie you want to return and click on the "Return" button.
          </li>
          <li>Confirm the return.</li>
        </ol>
      </section>

      <section id="support">
        <h4>Support and Contact</h4>
        <p>
          If you encounter any issues or have questions, our support team is
          here to help. You can contact us via email at support@example.com or
          call us at +1-800-123-4567.
        </p>
      </section>

      <section id="faq">
        <h4>Frequently Asked Questions</h4>
        <h5>Q: How long is the rental period for movies?</h5>
        <p>
          A: The rental period is typically 48 hours, but may vary for specific
          titles.
        </p>
        <h5>Q: Can I extend the rental period?</h5>
        <p>A: Yes, you can extend the rental period for an additional fee.</p>
        <h5>Q: Is there a limit to how many movies I can rent at once?</h5>
        <p>A: You can rent up to 5 movies at a time.</p>
      </section>
    </div>
  );
}

export default Help;
