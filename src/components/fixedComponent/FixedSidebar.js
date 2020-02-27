import React from 'react'
import {Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'

function FixedSidebar() {
    
        return (
            
                <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
                    <div className="mobile-sidebar-header d-md-none">
                            <div className="header-logo">
                                <Link to="index.html"><img src="img/logo1.png" alt="logo" /></Link>
                            </div>
                    </div>
                        <div className="sidebar-menu-content">
                            <Navbar color="faded" light>
                                
                                
                                <Nav navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                            <i class="flaticons-dashboard"></i><span>Dashboard</span>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem tag={Link} to="/dashboard">
                                                Admin
                                                </DropdownItem>
                                            </DropdownMenu>
                                    </UncontrolledDropdown>
                                    
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-classmates"></i><span>Students</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/allStudents">
                                                All Students
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/studentDetails">
                                                Student Details
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/admission">
                                                Admission Form
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-multiple-users-silhouette"></i><span>Teachers</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/allTeachers">
                                                All Teachers
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/teachersDetails">
                                                Teachers Details
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/addTeacher">
                                                Add Teacher
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/teachersPayment">
                                                Payment
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-couple"></i><span>Parents</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/allParents">
                                                All Parents
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/parentsDetails">
                                                Parents Details
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/addParents">
                                                Add Parents
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-books"></i><span>Library</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/allBooks">
                                                All Books
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/addBook">
                                                Add New Book
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-technological"></i><span>Acconunt</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/feesCollection">
                                                All Fees Collection
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/expenses">
                                                Expenses
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/addExpenses">
                                                Add Expenses
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/allClasses">
                                                All Classes
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/addClass">
                                                Add Class
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/blah">
                                                Assign Teacher
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-shopping-list"></i><span>Exam</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/examSchedule">
                                                Exam Schedule
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/examGrade">
                                                Exam Grades
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <NavItem>
                                        <NavLink href="/transport"  className="nav-link"><i className="flaticons-bus-side-view"></i><span>Transport</span></NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/hostel"  className="nav-link"><i className="flaticons-bed"></i><span>Hostel</span></NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/notice"  className="nav-link"><i className="flaticons-script"></i><span>Notice</span></NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
         
                </div>
            </div>
        )
}

export default FixedSidebar;
