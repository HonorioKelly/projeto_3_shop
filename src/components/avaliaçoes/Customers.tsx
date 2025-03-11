import './Customers.css'

import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    rating: '★★★★★',
    text: "I'm blown away by the quality and style of the clothes I received from Shopzo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: 'Alex K.',
    rating: '★★★★★',
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    name: 'James L.',
    rating: '★★★★★',
    text: "As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  },
  {
    name: 'Olivia P.',
    rating: '★★★★',
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  },
  {
    name: 'Alex M.',
    rating: '★★★★',
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    name: 'Liam K.',
    rating: '★★★★',
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="testimonials-section">
      <h2>OUR HAPPY CUSTOMERS</h2>
      <div className="testimonial-wrapper">
        <button className="arrow left" onClick={prevSlide}>&#8249;</button>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial ${index === currentIndex ? 'active' : 'hidden'}`}
            >
              <p className="stars">{testimonial.rating}</p>
              <h3>{testimonial.name} <span className="verified">✔️</span></h3>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
}
