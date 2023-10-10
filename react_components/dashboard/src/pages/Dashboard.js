import React from 'react';
import ProfileCard from '../components/core/ProfileCard'
import ActivitiesCard from '../components/shared/cards/ActivitiesCard'
import ActivitiesTable from '../components/shared/tables/ActivitiesTable'
import TopicsCard from '../components/shared/cards/TopicsCard'
import InterestCard from '../components/shared/cards/InterestCard'
import Footer from '../components/core/Footer'
import '../styles/Profile.css'; 


const Dashboard = (props) => {
return (
    <div>
        <div className="row">
            <ProfileCard color="#3CBAC6" title="Welcome to your CHW space" subtitle="Hi " text="You have complete  lesson in last day." text2="Start your learning today." wwwroot={props.wwwroot} usersData={props.usersData}/> 
        </div>
        <div className="row" style={{borderRight: '4px solid #eee;'}}>
            <div className="col-1"/>
            <div className="col-3 pl-0 mt-6" style={{borderRight: "1px solid #eee"}}>
                <div className='row'>
                    <div className='col-12'>
                        <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Digital Profile'/>
                        <InterestCard img={'react_components/dashboard/src/img/message_icon.svg'} text='Messages'/>
                        <InterestCard img={'react_components/dashboard/src/img/schedule_icon.svg'} text='Schedule'/>
                        <InterestCard img={'react_components/dashboard/src/img/settings_icon.svg'} text='Settings'/>
                    </div>
                    <div className='col-12'>
                        <div className="title-h1 my-4">My areas of interest</div>
                        <InterestCard img={'react_components/dashboard/src/img/communityedu_icon.svg'} text='Community Education'/>
                        <InterestCard img={'react_components/dashboard/src/img/healthcare_icon.svg'} text='Healthcare'/>
                        <InterestCard img={'react_components/dashboard/src/img/policy_icon.svg'} text='Policy and Advocacy'/>
                    </div>
                </div>
            </div>
            <div className="col-7">
                <ActivitiesCard color="#3CBAC6" subtitle="Introduction to CHWs/Ps What Is a Community Health Worker?" 
                text1="CHW/Promotor" 
                text2="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where they live and work…" />
                <ActivitiesTable />
            </div>
        </div>
        <div className="row">
            <div className="col-1"/>
            <div className='col-3'>
            <div className="title-h1">Recommended Topics</div>
                <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Who are Community Health Workers (Part 1)" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
            </div>
            <div className='col-3 ml-6 mt-5'>
                <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="CHW Infographic " subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
            </div>
            <div className='col-3 ml-6 mt-5'>
                <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title=" CHW Infographic Slideshow" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
            </div>
        </div>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
                <div className="title-h1 my-4" style={{paddingTop: "50px"}}>Andrea, track and grow your stats and achievements.</div>
                <div className="row">
                <div className="col-6">
                    <p style={{color: "gray"}}>Set A Weekly Study Reminder Learners who set study reminders are 75% more likely to complete a course. You can change this any time.</p>
                </div>
                <div className="row">
                    <button className='button-activities mr-2'>Learn 2 days a week</button>
                    <button className='button-activities mr-2'>Learn 3 days a week</button>
                    <button className='button-activities'>Learn 5 days a week</button>
                </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
                <div className="title-h1 my-4" style={{paddingTop: "50px"}}>My favorites</div>
                <div className="row">
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'}  title="House of Popular Education" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Popular Education Activities for Awareness Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Popular Education Group Icebreakers Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="title-h1 my-4" style={{paddingTop: "50px"}}>My downloads</div>
                <div className="row">
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Intro to Cultural Humility" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Conflict Resolution " subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Conflict Resolution Diagram" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="title-h1 my-4" style={{paddingTop: "50px"}}>My selection</div>
                <div className="row">
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Types of Supervision Infographic" subtitle="Performance Appraisals" text="According to the Merriam-Webster dictionary, a group is: A number of individuals assembled together or having some…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Professional Boundaries Worksheet Template " subtitle="Team Building & Management" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Framework for Resolving Conflict" subtitle="Team Building & Management" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
