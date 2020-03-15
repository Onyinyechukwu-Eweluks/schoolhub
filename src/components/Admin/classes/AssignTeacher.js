import React from 'react'
import FixedSidebar from '../../fixedComponent/FixedSidebar';
import { teachers } from '../../../API/Teachers/AssignTeacher';

function AssignTeacher() {
    return(
            <div class="dashboard-page-one">
            <FixedSidebar />
            <div class="dashboard-content-one">
                
                <div class="breadcrumbs-area">
                    <h3>Assign Teacher</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Assign Teacher</li>
                    </ul>
                </div>
                
                <div class="row">
                   
                    <div class="col-4-xxxl col-12">
                        <div class="card height-auto">
                            <div class="card-body">
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>Assign Teacher</h3>
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
                                <form class="new-added-form">
                                    <div class="row">
                                        <div class="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Class</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Subject</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Teacher</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Session</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="col-12-xxxl col-xl-4 col-sm-6 col-12 form-group">
                                            <label>Phone Number</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="col-12 form-group mg-t-8">
                                            <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                            <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-8-xxxl col-12">
                        <div class="card height-auto">
                            <div class="card-body">
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>Assigned Teachers Lists</h3>
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
                                <form class="mg-b-20">
                                    <div class="row gutters-8">
                                        <div class="col-lg-4 col-12 form-group">
                                            <input type="text" placeholder="Search by Name ..." class="form-control" />
                                        </div>
                                        <div class="col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search Class ..."
                                                class="form-control" />
                                        </div>
                                        <div class="col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by Subject ..." class="form-control" />
                                        </div>
                                        <div class="col-lg-2 col-12 form-group">
                                            <button type="submit"
                                                class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="table-responsive">
                                    <table class="table display data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input checkAll" />
                                                        <label class="form-check-label">Teacher Name</label>
                                                    </div>
                                                </th>
                                                <th>Class</th>
                                                <th>Subject</th>
                                                <th>Session</th>
                                                <th>Contact Number</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teachers.map((t, index) => (
                                                <tr>
                                                <td>
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" />
                                                        <label class="form-check-label">{t.name} </label>
                                                    </div>
                                                </td>
                                                <td>{t.classId}</td>
                                                <td>{t.subjectId}</td>
                                                <td>{t.session}</td>
                                                <td>+889562365846</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <a href="/" class="dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <span class="flaticon-more-button-of-three-dots"></span>
                                                        </a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="/"><i
                                                                    class="fas fa-times text-orange-red"></i>Close</a>
                                                            <a class="dropdown-item" href="/"><i
                                                                    class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                            <a class="dropdown-item" href="/"><i
                                                                    class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="/">akkhor</a> 2019. All rights reserved. Designed by
                        <a href="/">PsdBosS</a></div>
                </footer>
            </div>
            </div>
    )
}

export default AssignTeacher;