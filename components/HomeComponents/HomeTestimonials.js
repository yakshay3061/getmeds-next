import Image from "next/image";
import "./HomeTestimonials.css";
import StarSvg from "./StarSvg.js";
import user1 from '../../public/reviewUserImg1.png';
import user2 from '../../public/reviewUserImg2.png';
import user3 from '../../public/reviewUserImg3.png';

export default function HomeTestimonials() {
  return ( 
    <div className="testimonilas">
      <p className="testimonial-name">TESTIMONIALS</p>
      <p className="testimonial-heading">What Our Customer are Saying</p>
      <p className="testimonial-about">
        Per aenean auctor pellentesque a quam quis habitant mus semper nostra
        ultrices. Per odio finibus rhoncus sit cubilia duis leo maximus ad.
      </p>

      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="card-rating">
            <StarSvg  />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className="testimonial-card-desc">
            Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac
            tristique integer nullam in vestibulum. Hac feugiat placerat laoreet
            fames pharetra pede imperdiet sodales in.
          </p>
          <div className="testimonial-user">
            <Image className="testimonial-user-img" src={user1} alt="user-img"/>
            <div className="user-info">
                <p className="user-name">Wilber N. Shore</p>
                <p className="user-profile">Manager</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-rating">
            <StarSvg  />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className="testimonial-card-desc">
            Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac
            tristique integer nullam in vestibulum. Hac feugiat placerat laoreet
            fames pharetra pede imperdiet sodales in.
          </p>
          <div className="testimonial-user">
            <Image className="testimonial-user-img" src={user2} alt="user-img"/>
            <div className="user-info">
                <p className="user-name">Wilber N. Shore</p>
                <p className="user-profile">Manager</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card-rating">
            <StarSvg  />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <p className="testimonial-card-desc">
            Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac
            tristique integer nullam in vestibulum. Hac feugiat placerat laoreet
            fames pharetra pede imperdiet sodales in.
          </p>
          <div className="testimonial-user">
            <Image className="testimonial-user-img" src={user3} alt="user-img"/>
            <div className="user-info">
                <p className="user-name">Wilber N. Shore</p>
                <p className="user-profile">Manager</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
