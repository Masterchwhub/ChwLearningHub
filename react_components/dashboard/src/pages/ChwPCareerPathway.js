import React from 'react';
import '../components/shared/buttons/styles/Button.css'; 
import '../components/shared/buttons/styles/ButtonSkills.css'; 
import {  } from "../styles/Profile.css";
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import BorderButton from '../components/shared/buttons/BorderButton';

const ChwPCareerPathway = () => {
  return (
    <div>

      <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
                <div className='row'>
                <p style={{ paddingTop: '40px', fontWeight: 'bold', fontSize: '12px'}}>Home - CHWs / Promotores / CHW/P Career Pathway Opportunities</p>
                </div>
  <div>
    <div className='row'>
        <div className='col-7'>
            <div className='row'>
                <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW/P Career Pathway Opportunities</h1>
            </div>
        </div>
        <div className='col-2' style={{ paddingTop: '40px'}}>
        <button className='button-activities'>CHWs/Promotores</button>
        </div>
        <div className='col-2' style={{ paddingTop: '40px'}}>
        <button className='button-activities'>Graphics</button>
        </div>
    </div>
</div>
<div className="row" style={{ paddingTop: '20px'}}>
    <BorderButton text={'Reflection'}></BorderButton>
    <BorderButton text={'Short Quiz'}></BorderButton>
    <BorderButton text={'Assessments'}></BorderButton>
</div>
<div className='row'>
<p style={{ paddingTop: '30px', paddingBottom: '30px',fontWeight: 'bold', fontSize: '12px', color: '#707070'}}>7 results</p>
</div>
                <div className="row">
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'}  title="House of Popular Education" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Popular Education Activities for Awareness Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Popular Education Group Icebreakers Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="row" style={{paddingTop: "40px"}}>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Intro to Cultural Humility" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Conflict Resolution " subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Conflict Resolution Diagram" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="row" style={{paddingTop: "40px"}}>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Intro to Cultural Humility" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Conflict Resolution " subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Conflict Resolution Diagram" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
</div>
    </div>  
    </div>
    
  );
};

export default ChwPCareerPathway;
