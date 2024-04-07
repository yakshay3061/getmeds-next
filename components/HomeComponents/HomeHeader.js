import "./HomeHeader.css";
import Image from "next/image";
import Link from "next/link";
import getmedsLogo from "../../public/getmedslogo.png";
import getmedsImage from '../../public/getmeds-image.png'
import SidebarMenuShow from '../HomeComponents/SidebarMenuShow.js'
// import SidebarMenuShow from '../components/SidebarMenuShow.js'
// import SidebarMenuHide from '../components/SidebarMenuHide.js'
import SidebarMenuHide from '../HomeComponents/SidebarMenuHide.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function HomeHeader() {

  

  return (
    <nav className="home-header">
      <ul className="home-header-sidebar">
        <li>
          <SidebarMenuHide/>
        </li>
        <li>
          <Link className="home-header-field-2" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="home-header-field-2" href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link className="home-header-field-2" href="/contactus">
            Contact us
          </Link>
        </li>
        <li>
          <Link className="home-header-field-2" href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="home-header-field-2" href="/countries">
            Countries
          </Link>
        </li>

        
      </ul>

      <ul className="home-header-ul static-header">
        <li className="ul-first-child">
          <Image
            className="home-header-logo"
            src={getmedsImage}
            alt="getmeds-logo"
          />
        </li>
        <li>
          <Link className="home-header-field-1 hide-on-mobile" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="home-header-field-1 hide-on-mobile" href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link className="home-header-field-1 hide-on-mobile" href="/contactus">
            Contact us
          </Link>
        </li>
        <li>
          <Link className="home-header-field-1 hide-on-mobile" href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="home-header-field-1 hide-on-mobile" href="/countries">
            Countries
          </Link>
        </li>

        <li>
          <Link className="home-header-field-1" href="/medication">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M22.1333 24.3599L13.7333 15.9599C13.0667 16.4932 12.3 16.9154 11.4333 17.2265C10.5667 17.5376 9.64444 17.6932 8.66667 17.6932C6.24444 17.6932 4.19467 16.8541 2.51733 15.1759C0.84 13.4976 0.000888889 11.4479 0 9.02653C0 6.60431 0.839111 4.55453 2.51733 2.8772C4.19556 1.19986 6.24533 0.360752 8.66667 0.359863C11.0889 0.359863 13.1391 1.19897 14.8173 2.8772C16.4956 4.55542 17.3342 6.6052 17.3333 9.02653C17.3333 10.0043 17.1778 10.9265 16.8667 11.7932C16.5556 12.6599 16.1333 13.4265 15.6 14.0932L24 22.4932L22.1333 24.3599ZM8.66667 15.0265C10.3333 15.0265 11.7502 14.4434 12.9173 13.2772C14.0844 12.111 14.6676 10.6941 14.6667 9.02653C14.6667 7.35986 14.0836 5.94342 12.9173 4.7772C11.7511 3.61097 10.3342 3.02742 8.66667 3.02653C7 3.02653 5.58356 3.61009 4.41733 4.7772C3.25111 5.94431 2.66756 7.36075 2.66667 9.02653C2.66667 10.6932 3.25022 12.1101 4.41733 13.2772C5.58444 14.4443 7.00089 15.0274 8.66667 15.0265Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>

        <li>
          <SidebarMenuShow/>
        </li>
      </ul>
    </nav>
  );
}
