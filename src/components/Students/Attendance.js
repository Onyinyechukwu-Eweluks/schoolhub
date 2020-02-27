import React from 'react'

function Attendance(){
    return (
        <div>
            <div class="col-8-xxxl col-12">
                <div class="row">
                    
                    <div class="col-lg-4">
                        <div class="dashboard-summery-one">
                            <div class="row">
                                <div class="col-6">
                                    <div class="item-icon bg-light-magenta">
                                        <i class="flaticon-shopping-list text-magenta"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="item-content">
                                        <div class="item-title">Notification</div>
                                        <div class="item-number"><span class="counter" data-num="12">12</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="dashboard-summery-one">
                            <div class="row">
                                <div class="col-6">
                                    <div class="item-icon bg-light-blue">
                                        <i class="flaticon-calendar text-blue"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="item-content">
                                        <div class="item-title">Events</div>
                                        <div class="item-number"><span class="counter" data-num="06">06</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="dashboard-summery-one">
                            <div class="row">
                                <div class="col-6">
                                    <div class="item-icon bg-light-yellow">
                                        <i class="flaticon-percentage-discount text-orange"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="item-content">
                                        <div class="item-title">Attendance</div>
                                        <div class="item-number"><span class="counter" data-num="94">94</span><span>%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                    <div class="col-4-xxxl col-xl-6 col-12">
                        <div class="card dashboard-card-three">
                            <div class="card-body">
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>Attendence</h3>
                                    </div>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="/" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="/"><i
                                                    class="fas fa-times text-orange-red"></i>Close</a>
                                            <a class="dropdown-item" href="/"><i
                                                    class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a class="dropdown-item" href="/"><i
                                                    class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="doughnut-chart-wrap">
                                    <canvas id="student-doughnut-chart" width="100" height="270"></canvas>
                                </div>
                                <div class="student-report">
                                    <div class="student-count pseudo-bg-blue">
                                        <h4 class="item-title">Absent</h4>
                                        <div class="item-number">28.2%</div>
                                    </div>
                                    <div class="student-count pseudo-bg-yellow">
                                        <h4 class="item-title">Present</h4>
                                        <div class="item-number">65.8%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4-xxxl col-xl-6 col-12">
                        <div class="card dashboard-card-thirteen">
                            <div class="card-body">
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>Event Calender</h3>
                                    </div>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="/" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="/"><i
                                                    class="fas fa-times text-orange-red"></i>Close</a>
                                            <a class="dropdown-item" href="/"><i
                                                    class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a class="dropdown-item" href="/"><i
                                                    class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="calender-wrap">
                                    <div id="fc-calender" class="fc-calender"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Attendance;