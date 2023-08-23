import React from 'react';
import '../styles/Profile.css'; 
import IconCard from './IconCard';


const ActivitiesTable = ({ color, title, subtitle, text }) => {
  return (
    <div>
        <table class="table" style={{paddingTop: '10px',width: "150%"}}>
            <thead>
            <tr>
            <th scope="col" style={{color: '#646464'}}>Progress</th> 
            <th scope="col"  style={{color: '#646464'}}>Training Name</th>
            <th scope="col"  style={{color: '#646464'}}>Type</th>
            <th scope="col"  style={{color: '#646464'}}>Language</th>
            <th scope="col"  style={{color: '#646464'}}>Time left</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><IconCard/></td>
                <td ><p className="title-td">Introduction <br></br> CHW´s</p><p style={{color: 'gray'}}>Learining hub</p></td>
                <td  style={{color: 'gray'}}>Training</td>
                <td  style={{color: 'gray'}}>English</td>
                <td  style={{color: 'gray'}}>1,17"</td>
                <td><button className='button-activities' >Continue Learning</button></td>
            </tr>
            <tr>
                <td><IconCard/></td>
                <td ><p className="title-td">Popular Education <br></br> Activities for Awareness</p><p style={{color: 'gray'}}>Learining hub</p></td>
                <td  style={{color: 'gray'}}>Assessment</td>
                <td  style={{color: 'gray'}}>English</td>
                <td  style={{color: 'gray'}}>45"</td>
                <td><button className='button-activities'>Finish assessment</button></td>
            </tr>
            <tr>
                <td><IconCard/></td>
                <td ><p className="title-td">What is Pospartum <br></br>  Depresssion</p><p style={{color: 'gray'}}>Place ehere it is performed</p></td>
                <td  style={{color: 'gray'}}>Training</td>
                <td  style={{color: 'gray'}}>English</td>
                <td  style={{color: 'gray'}}>2,30"</td>
                <td><button className='button-activities'>Continue Learning</button></td>
            </tr>
        </tbody>
        </table>
    </div>
  );
};

export default ActivitiesTable;


