import React from 'react'
import {Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'

function TeacherSidebar() {
    
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
                                    <NavItem>
                                        <NavLink href="/teacherDashboard"  className="nav-link"><i className="flaticons-dashboard"></i><span>Dashboard</span></NavLink>
                                    </NavItem>
                                    
                                    <NavItem>
                                        <NavLink href="/studentAttendance"  className="nav-link"><i className="flaticons-checklist"></i><span>Student Attendance</span></NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/studentPromotion"  className="nav-link"><i className="flaticons-classmates"></i><span>Student Promotion</span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/allSubjects"  className="nav-link"><i className="flaticons-script"></i><span>All Subjects</span></NavLink>
                                    </NavItem>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-books"></i><span>Quiz</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/allBooks">
                                                Tests
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/addBook">
                                                Exam
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    
                                </Nav>
                            </Navbar>
         
                </div>
            </div>
        )
}

export default TeacherSidebar;
