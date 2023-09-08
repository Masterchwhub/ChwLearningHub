import React from 'react';
import ProfileCard from '../components/ProfileCard'
import ActivitiesCard from '../components/ActivitiesCard'
import ActivitiesTable from '../components/ActivitiesTable'
import TopicsCard from '../components/TopicsCard'
import InterestCard from '../components/InterestCard'
import Footer from '../components/Footer'
import '../styles/Profile.css'; 


const NavBar = () => {
return (
    <div>
        <div className="row">
            <ProfileCard color="#3CBAC6" title="Welcome to your CHW space" subtitle="Hi Valentina!" text="You have complete  lesson in last day." text2="Start your learning today." /> 
        </div>
        <br></br>
        <div className="row my-4" style={{borderRight: '4px solid #eee;'}}>
            <div className="col-6">
                <ActivitiesCard color="#3CBAC6" subtitle="What is a community health worker?" 
                text1="CHW/Promotor" 
                text2="Community Health worker (CHWs) are recognized leaders" />
                <ActivitiesTable />
            </div>
            <div className="col-6" style={{borderLeft: "1px solid #eee", left:"300px"}}>
                <div className="title-h1 my-4">My areas of interest</div>
                <InterestCard />
                <InterestCard />
                <InterestCard />
            </div>
        </div>
        <div className="title-h1 my-4">Recommended Topics</div>
        <div className="row">
           <TopicsCard  title="CHW Video Testimonials" subtitle="Introduction to CHWsPs" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
           <TopicsCard className="mx-4" title="CHWs/Ps Code of Ethics " subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
           <TopicsCard title="CHW Timeline" subtitle="Introduction to CHWsPs" text="Skills you’ll gain: Epidemiology, Probability & Statistics, Business Analysis, Communication…"/>
        </div>
        <div className="title-h1 my-4" style={{paddingTop: "50px"}}>Andrea, track and grow your stats and achievements.</div>
        <div className="row">
        <div className="col-4 mr-6">
            <p style={{color: "gray"}}>Set A Weekly Study Reminder Learners who set study reminders are 75% more likely to complete a course. You can change this any time.</p>
        </div>
        <div className="row">
            <button className='button-activities mr-2'>Learn 2 days a week</button>
            <button className='button-activities mr-2'>Learn 3 days a week</button>
            <button className='button-activities'>Learn 5 days a week</button>
        </div>
        </div>
        <div className="title-h1 my-4" style={{paddingTop: "50px"}}>My likes</div>
        <div className="row">
           <TopicsCard  title="Group Facilitation Guide " subtitle="Group Facilitation" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities"/>
           <TopicsCard className="mx-4" title="Facilitator Checklist" subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
           <TopicsCard title="Tips for Public Speaking" subtitle="Group Facilitation" text="Skills you’ll gain: Epidemiology, Probability & Statistics, Business Analysis, Communication…"/>
        </div>
        <div className="title-h1 my-4" style={{paddingTop: "50px"}}>My downloands</div>
        <div className="row">
           <TopicsCard  title="Practical Tips for Public Speaking" subtitle="Group Facilitation" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities"/>
           <TopicsCard className="mx-4" title="Intro to the 5 Stages of Group Development" subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
           <TopicsCard title="The 5 Stages of Group Development" subtitle="Group Facilitation" text="Skills you’ll gain: Epidemiology, Probability & Statistics"/>
        </div>
        <div style={{paddingTop: "50px"}}>
            <Footer></Footer>
        </div>
    </div>
  );
};

export default NavBar;
