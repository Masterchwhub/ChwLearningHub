import React from 'react';


const StepProgres = (props) => {

return (
    <div className='container'>
        <div className="col-10">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="card" style={{backgroundColor: '#eee' , color: 'white'}}>
                            <div className="row mt-4 mb-6">
                                <div className="col-2"/>
                                <div className='col-2'>
                                    <img src="react_components/dashboard/src/icons/active_step1_icon.svg"/>
                                    <img className='ml-3' style={{position:'relative', bottom: '28px', left: '20px'}} src="react_components/dashboard/src/icons/step1_line_icon.svg"/>
                                    <div style={{ color: '#47BBC6'}}>Step1</div>
                                    <div style={{ color: '#47BBC6',fontWeight: 'bold'}}>Profile</div>
                                    <div style={{ color: '#47BBC6'}}>In progress</div>
                                </div>
                                <div className='col-2'>
                                    <img src="react_components/dashboard/src/icons/inactive_step2_icon.svg"/>
                                    <img className='ml-3' style={{position:'relative', bottom: '28px', left: '20px'}} src="react_components/dashboard/src/icons/step2_line_icon.svg"/>
                                    <div style={{ color: '#067CBC'}}>Step2</div>
                                    <div style={{ color: '#067CBC'}}>Areas of interest</div>
                                    <div style={{ color: '#067CBC'}}>Pending</div>
                                </div>
                                <div className='col-2'>
                                    <img src="react_components/dashboard/src/icons/inactive_step3_icon.svg"/>
                                    <img className='ml-3' style={{position:'relative', bottom: '28px', left: '20px'}} src="react_components/dashboard/src/icons/step3_line_icon.svg"/>
                                    <div style={{ color: '#143F6A'}}>Step3</div>
                                    <div style={{ color: '#143F6A'}}>Goals and competencies</div>
                                    <div style={{ color: '#143F6A'}}>Pending</div>
                                </div>
                                <div className='col-2'>
                                    <img src="react_components/dashboard/src/icons/inactive_step4_icon.svg"/>
                                    <img className='ml-3' style={{position:'relative', bottom: '28px', left: '20px'}} src="react_components/dashboard/src/icons/step4_line_icon.svg"/>
                                    <div style={{ color: '#372BC4'}}>Step4</div>
                                    <div style={{ color: '#372BC4'}}>Learning styles</div>
                                    <div style={{ color: '#372BC4'}}>Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StepProgres;
