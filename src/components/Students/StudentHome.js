import React, {Component} from 'react'
import About from './About'
import Attendance from './Attendance'
import Result from './Result'
import Notification from './Notification'

class StudentHome extends Component{
    render(){
        return (
            <div class="dashboard-content-one">
                <About />
                <Attendance />
                <Result />
                <Notification />
            </div>
        )
    }
}

export default StudentHome;