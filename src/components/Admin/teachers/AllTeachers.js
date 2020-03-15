import React from 'react'
import FixedSidebar from '../../fixedComponent/FixedSidebar'
import { allTeacher } from '../../../API/Admin/All';


function AllTeachers() {
    return (
        <div class="dashboard-page-one">
            <FixedSidebar />
            <div class="dashboard-content-one">
               
                <div class="breadcrumbs-area">
                    <h3>Teacher</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>All Teachers</li>
                    </ul>
                </div>
               
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>All Teachers Data</h3>
                            </div>
                           <div class="dropdown">
                                <a class="dropdown-toggle" href="/" role="button" 
                                data-toggle="dropdown" aria-expanded="false">...</a>
        
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="/"><i class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="/"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="/"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <form class="mg-b-20">
                            <div class="row gutters-8">
                                <div class="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by ID ..." class="form-control" />
                                </div>
                                <div class="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Name ..." class="form-control" />
                                </div>
                                <div class="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                                    <input type="text" placeholder="Search by Phone ..." class="form-control" />
                                </div>
                                <div class="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                                    <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
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
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                        <th>Section</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>E-mail</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allTeacher.map((t,index) => (
                                        <tr>
                                        <td>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">{t.regNumber}</label>
                                            </div>
                                        </td>
                                        <td class="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                                        <td>{t.firstname} {t.lastname}</td>
                                        <td>{t.gender}</td>
                                        <td>2</td>
                                        <td>{t.subject}</td>
                                        <td>A</td>
                                        <td>{t.address}</td>
                                        <td>{t.phonenumber}</td>
                                        <td>{t.email}</td>
                                         <td>
                                            <div class="dropdown">
                                                <a href="/" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="/"><i class="fas fa-times text-orange-red"></i>Close</a>
                                                    <a class="dropdown-item" href="/"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                                    <a class="dropdown-item" href="/"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
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
                
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="/">akkhor</a> 2019. All rights reserved. Designed by <a href="/">PsdBosS</a></div>
                </footer>
            </div>
        </div>
    )
}

export default AllTeachers;