import "./HomeDashboardContent.css";
import Image from "next/image";
import vector from "../../public/Vector.png";

export default function HomeDashboardContent() {
  return (
    <div className="dashboard-content-container">
      <h1>
        GENUINE MEDICINES <br />
        LOWEST PRICES
      </h1>
      <p>
        Say goodbye to your health worries by choosing us. Getmeds healthcare
        can be your best partner for all your medical needs. We are your
        reliable companion for all healthcare solutions.
      </p>

      <div className="small-sub-heading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
        >
          <path
            d="M6.99067 0.455158L4 2.24849L1.00933 0.455158C0.908202 0.394559 0.792808 0.361862 0.674919 0.360403C0.557031 0.358943 0.440863 0.388773 0.338262 0.44685C0.235661 0.504927 0.150297 0.589175 0.0908734 0.691002C0.03145 0.792829 9.3139e-05 0.908594 0 1.02649V9.69316C9.09715e-05 9.80826 0.02998 9.92137 0.086758 10.0215C0.143536 10.1216 0.225269 10.2053 0.324 10.2645L3.65733 12.2645C3.76087 12.3265 3.8793 12.3593 4 12.3593C4.1207 12.3593 4.23913 12.3265 4.34267 12.2645L7.676 10.2645C7.77473 10.2053 7.85646 10.1216 7.91324 10.0215C7.97002 9.92137 7.99991 9.80826 8 9.69316V1.02649C7.99991 0.908594 7.96855 0.792829 7.90913 0.691002C7.8497 0.589175 7.76434 0.504927 7.66174 0.44685C7.55914 0.388773 7.44297 0.358943 7.32508 0.360403C7.20719 0.361862 7.0918 0.394559 6.99067 0.455158Z"
            fill="black"
          />
        </svg>
        <p>Served more than 68000 customers</p>
      </div>
      <div className="btn-container">
        <button className = 'btn'>Contact Now</button>
        <button className = 'btn'>Check Our Products</button>
      </div>
    </div>
  );
}
