import React from "react"
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work";
function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date="July 2022"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">Moringa School, Ngong Lane Plaza, Nairobi Kenya</h3>
                    <p>Fullstack Software Engineering (React, Ruby on rails)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date="2014-2018"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">South Eastern Kenya University</h3>
                    <h4>Bachelor's Degree</h4>
                    <p>Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="July 2021 - August 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Remote Web Developer - Optimate
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        San Francisco, CA
                    </h4>
                    <p>Implementing Product architecture by Developing API's.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - Oct 2020"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Noc Engineer - Huawei
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Nairobi, Kenya
                    </h4>
                    <p>Network Support</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;