import React from 'react'
import TeacherSidebar from './TeacherSidebar';
import { allSubject } from '../../API/Admin/All';


function AllSubjects() {
    return (
        <div class="dashboard-page-one">
            <TeacherSidebar />
        <div class="dashboard-content-one">
                
                <div class="breadcrumbs-area">
                    <h3>All Subjects</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Subjects</li>
                    </ul>
                </div>
                
                <div class="row">
                    <div class="col-4-xxxl col-12">
                        <div class="card height-auto">
                            <div class="card-body">
                                <div class="heading-layout1">
                                    <div class="item-title">
                                        <h3>Add New Subject</h3>
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
                                        <div class="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Subject Name *</label>
                                            <input type="text" placeholder="" class="form-control" />
                                        </div>
                                        <div class="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Subject Type *</label>
                                            <select class="select2 form-control">
                                                <option value="">Please Select</option>
                                                <option value="1">Art</option>
                                                <option value="2">Social Science</option>
                                                <option value="3">Science</option>
                                                <option value="3">Junior Class</option>
                                            </select>
                                        </div>
                                        <div class="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Select Class *</label>
                                            <select class="select2 form-control">
                                                <option value="0">Please Select</option>
                                                <option value="1">Jss 1-3 </option>
                                                <option value="2">SSS 1-3</option>
                                            </select>
                                        </div>
                                        <div class="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Select Class Group *</label>
                                            <select class="select2 form-control">
                                                <option value="0">Please Select</option>
                                                <option value="1">A-I </option>
                                                <option value="2">A-C</option>
                                                <option value="3">D-F</option>
                                                <option value="3">G-J</option>
                                            </select>
                                        </div>
                                        <div class="col-12-xxxl col-lg-6 col-12 form-group">
                                            <label>Select Code</label>
                                            <select class="select2 form-control">
                                                <option value="0">Please Select</option>
                                                <option value="1">00524</option>
                                                <option value="2">00525</option>
                                                <option value="3">00526</option>
                                                <option value="3">00527</option>
                                                <option value="3">00528</option>
                                            </select>
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
                                        <h3>All Subjects</h3>
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
                                            <input type="text" placeholder="Search by ID ..." class="form-control" />
                                        </div>
                                        <div class="col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by Subject ..." class="form-control" />
                                        </div>
                                        <div class="col-lg-3 col-12 form-group">
                                            <input type="text" placeholder="Search by Class" class="form-control" />
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
                                                        <label class="form-check-label">ID</label>
                                                    </div>
                                                </th>
                                                <th>Subject Name</th>
                                                <th>Subject Type</th>
                                                <th>Class</th>
                                                <th>Class Group</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allSubject.map((s,index) => (
                                                <tr>
                                                <td>
                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" />
                                                        <label class="form-check-label">{s.subID}</label>
                                                    </div>
                                                </td>
                                                <td>{s.subject}</td>
                                                <td>{s.subType}</td>
                                                <td>{s.class}</td>
                                                <td>{s.classGroup}</td>
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
                    <div class="copyright">© Copyrights <a href="/">akkhor</a> 2019. All rights reserved. Designed by <a
                            href="/">PsdBosS</a></div>
                </footer>
            </div>
            </div>
    )
}

export default AllSubjects;