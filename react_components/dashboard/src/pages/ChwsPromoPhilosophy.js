import React from 'react';
import '../components/shared/buttons/styles/Button.css'; 
import '../components/shared/buttons/styles/ButtonSkills.css'; 
import {  } from "../styles/Profile.css";
import Header from '../components/core/Header';
import InterestCard from '../components/shared/cards/InterestCard'
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import BorderButton from '../components/shared/buttons/BorderButton';

const ChwsPromoPhilosophy = () => {
  return (
    <div>

      <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
                <div className='row'>
                <p style={{ paddingTop: '40px', fontWeight: 'bold', fontSize: '12px'}}>Home - CHWs / Promotores / CHW/Promotor Philosophy</p>
                </div>
  <div>
    <div className='row'>
        <div className='col-7'>
            <div className='row'>
                <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW/Promotor Philosophy</h1>
            </div>
        </div>
        <div className='col-2' style={{ paddingTop: '40px'}}>
        <button className='button-activities'>CHWs/Promotores</button>
        </div>
        <div className='col-2' style={{ paddingTop: '40px'}}>
        <button className='button-activities'>Printable</button>
        </div>
    </div>
</div>
<div className="row" style={{ paddingTop: '20px'}}>

    <BorderButton text={'Guide'}></BorderButton>
    <BorderButton text={'Checklist'}></BorderButton>
    <BorderButton text={'Tip sheet'}></BorderButton>
    <BorderButton text={'Activity'}></BorderButton>
    <BorderButton text={'Form'}></BorderButton>
    <BorderButton text={'Infographic '}></BorderButton>
    <BorderButton text={'Brochure'}></BorderButton>
    <BorderButton text={'Cards'}></BorderButton>
    <BorderButton text={'Comic'}></BorderButton>
    <BorderButton text={'Diagram'}></BorderButton>
    <BorderButton text={'Fact Sheet'}></BorderButton>
    <BorderButton text={'Flip Chart'}></BorderButton>
    <BorderButton text={'Flyer'}></BorderButton>
    <BorderButton text={'Group'}></BorderButton>
    <BorderButton text={'Plan'}></BorderButton>
    <BorderButton text={'Reference'}></BorderButton>
    <BorderButton text={'Report'}></BorderButton>
    <BorderButton text={'Resource'}></BorderButton>
</div>


<div className='row'>
<p style={{ paddingTop: '30px', paddingBottom: '30px',fontWeight: 'bold', fontSize: '12px', color: '#707070'}}>21 results</p>
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

export default ChwsPromoPhilosophy;
