import HomeDashboard from '../../components/HomeComponents/HomeDashboard.js'
import HomeOurServices from '../../components/HomeComponents/HomeOurServices.js'
import HomeCategories from '../../components/HomeComponents/HomeCategories.js'
import HomeTestimonials from '../../components/HomeComponents/HomeTestimonials.js'
import HomeFAQ from '../../components/HomeComponents/HomeFAQ.js'
import HomeContact from '../../components/HomeComponents/HomeContact.js'

export default function HomeCompo() {
  return(
    <div>
      <HomeDashboard/>
      <HomeOurServices/>
      <HomeCategories/>
      <HomeTestimonials/>
      <HomeFAQ/>
      <HomeContact/>
    </div>
  );
}
