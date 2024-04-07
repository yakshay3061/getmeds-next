import "./HomeOurServices.css";
import serviceIcon from "../../public/servicelogo.png";
import Image from "next/image";

export default function HomeOurServices() {
  return ( 

    <div className="services">
    <p className="services-heading">Our Services</p>
    <div className="card-container">
          <div className="card">
              <Image src={serviceIcon} alt="logo" />
              <p className="card-heading">Contract Manufacturing</p>
              <p className="card-description">
                Contract manufacturing of only the top quality pharmaceutical
                products, that too at the best competitive prices.
              </p>
              <button className="btn">Read More</button>
          </div> 

          <div className="card">
              <Image src={serviceIcon} alt="logo" />
              <p className="card-heading">Contract Manufacturing</p>
              <p className="card-description">
                Contract manufacturing of only the top quality pharmaceutical
                products, that too at the best competitive prices.
              </p>
              <button className="btn">Read More</button>
          </div>

          <div className="card">
              <Image src={serviceIcon} alt="logo" />
              <p className="card-heading">Contract Manufacturing</p>
              <p className="card-description">
                Contract manufacturing of only the top quality pharmaceutical
                products, that too at the best competitive prices.
              </p>
              <button className="btn">Read More</button>
          </div>
    </div>
    </div>
  );
}
