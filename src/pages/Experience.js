import React from "react"
import { 
    VerticalTimeline, 
    VerticalTimelineElement 
}from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
function Experience(){
    return(
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
<VerticalTimelineElement 
className="vertical-timeline-eleme"
date="July 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}>
        <h3 className="vertical-timeline-element-title">Moringa School, Ngong Lane Plaza, Nairobi Kenya</h3>
    <p>Fullstack Software Development (React, Ruby on rails)</p>
    </VerticalTimelineElement> 
            </VerticalTimeline>
        </div>
    )
}

export default Experience;