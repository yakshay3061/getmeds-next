import HomeHeader from './HomeHeader.js'
import HomeDashboardContent from './HomeDashboardContent.js'
import './HomeDashboard.css'


export default function HomeDashboard() {
    return(
        <div className="home-dashboard">
            <HomeHeader/>
            <HomeDashboardContent/>
        </div> 
    )
}