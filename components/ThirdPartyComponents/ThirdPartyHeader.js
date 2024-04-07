import HomeHeader from "../HomeComponents/HomeHeader.js";
import "./ThirdPartyHeader.css";

export default function ThirdPartyHeader() {
  return (
    <div className="third-party-header">
      <HomeHeader />
      <p className="third-party-heading">3rd Party manufacturing</p>
    </div>
  );
}
