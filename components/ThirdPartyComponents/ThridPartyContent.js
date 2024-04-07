import Image from "next/image";
import "./ThirdPartyContent.css";

export default function ThirdPartyContent() {
  return (
    <div className="third-party-content">
      <div className="upper-card">
        <div className="upper-card-content">
          <p className="card-heading">
            Getmeds Healthcare - 3rd party manufacturing
          </p>
          <p className="card-desc">
            Our company specializes in providing comprehensive third-party
            manufacturing services for pharmaceutical products, catering to the
            needs of both startups and established entities within the
            healthcare sector. We offer a full spectrum of high-quality
            manufacturing solutions, including the development and production of
            a wide range of pharmaceutical formulations such as tablets,
            capsules, syrups, and injectables. Our state-of-the-art facilities
            are equipped with the latest technology and adhere to strict quality
            control standards, ensuring that all products meet the highest
            levels of safety and efficacy. By partnering with us, clients gain
            access to our extensive expertise in pharmaceutical manufacturing,
            enabling them to bring their products to market efficiently and
            cost-effectively. Our flexible services are designed to support your
            specific requirements, from formulation development to final
            packaging, all while ensuring compliance with regulatory standards.
            Whether you're looking to expand your product line or outsource
            production to focus on core competencies, our tailored third-party
            manufacturing services provide the perfect solution.
          </p>
          <button className="btn">Send Enquiry</button>
        </div>
        
      </div>
      <div className="lower-card"></div>
    </div>
  );
}
