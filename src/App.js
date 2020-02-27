import React, {Component} from 'react';
import {Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
const Dashboard = React.lazy(() => import('./components/Admin/Dashboard'))
const FixedHeader = React.lazy(() => import('./components/fixedComponent/FixedHeader'))
const AddParents = React.lazy(() => import ('./components/Admin/parents/AddParents'))
const AllParents = React.lazy(() => import ('./components/Admin/parents/AllParents'))
const ParentsDetails = React.lazy(() => import('./components/Admin/parents/ParentsDetails'))
const Admission = React.lazy(() => import ('./components/Admin/students/Admission'))
const AllStudents = React.lazy(() => import ('./components/Admin/students/AllStudents'))
const StudentAttendance = React.lazy(() => import ('./components/Teachers/StudentAttendance'))
const StudentDetails = React.lazy(() => import ('./components/Admin/students/StudentDetails'))
const StudentPromotion = React.lazy(() => import ('./components/Teachers/StudentPromotion'))
const AddTeacher = React.lazy(() => import ('./components/Admin/teachers/AddTeacher'))
const AllTeachers = React.lazy(() => import ('./components/Admin/teachers/AllTeachers'))
const TeacherDetails = React.lazy(() => import ('./components/Admin/teachers/TeacherDetails'))
const TeachersPayment = React.lazy(() => import ('./components/Admin/teachers/TeachersPayment'))
const AddClass = React.lazy(() => import ('./components/Admin/classes/AddClass'))
const AllClasses = React.lazy(() => import ('./components/Admin/classes/AllClasses'))
const AddExpenses = React.lazy(() => import ('./components/Admin/acconunt/AddExpenses'))
const Expenses = React.lazy(() => import ('./components/Admin/acconunt/Expenses'))
const FeesCollection = React.lazy(() => import ('./components/Admin/acconunt/FeesCollection'))
const AddBook = React.lazy(() => import ('./components/Admin/library/AddBook'))
const AllBooks = React.lazy(() => import ('./components/Admin/library/AllBooks'))
const ExamGrade = React.lazy(() => import ('./components/Admin/exam/ExamGrade'))
const ExamSchedule = React.lazy(() => import ('./components/Admin/exam/ExamSchedule'))
const Transport = React.lazy(() => import ('./components/Admin/transport/Transport'))
const Hostel = React.lazy(() => import ('./components/Admin/hostel/Hostel'))
const Notice = React.lazy(() => import ('./components/Admin/notice/Notice'))
const AdminLogin = React.lazy(() => import ('./components/homePage/logIn/AdminLogin'))
const StudentLogin = React.lazy(() => import ('./components/homePage/logIn/StudentLogin'))
const TeacherLogin = React.lazy(() => import ('./components/homePage/logIn/TeacherLogin'))
const ParentLogin = React.lazy(() => import ('./components/homePage/logIn/ParentLogin'))
const AdminSignup = React.lazy(() => import ('./components/homePage/signUp/AdminSignup'))
const ParentSignup = React.lazy(() => import ('./components/homePage/signUp/ParentSignup'))
const TeacherSignup = React.lazy(() => import ('./components/homePage/signUp/TeacherSignup'))
const StudentSignup = React.lazy(() => import ('./components/homePage/signUp/StudentSignup'))
const Home = React.lazy(() => import ('./components/homePage/Home'))
const AboutUs = React.lazy(() => import ('./components/homePage/AboutUs'))
const Features = React.lazy(() => import ('./components/homePage/Features'))
const ContactUs = React.lazy(() => import ('./components/homePage/ContactUs'))
const TeacherDashboard = React.lazy(() => import ('./components/Teachers/TeacherDashboard'))
const AllSubjects = React.lazy(() => import ('./components/Teachers/AllSubjects'))
const StudentHome = React.lazy(() => import ('./components/Students/StudentHome'))
const ParentDashboard = React.lazy(() => import ('./components/Parents/ParentDashboard'))
const loading = () => <div>loading...</div>;



class App extends Component{
  render(){
  return (
    <Router>
      <React.Suspense fallback={loading()}>
      <FixedHeader />
      <Switch>
        
        <Route
          exact = {true}
          path = '/'
          render = {props => <Home {...props} />}
        />
        <Route
          path = '/about'
          render = {props => <AboutUs {...props} />} 
        />
        <Route
          path = '/features'
          render = {props => <Features {...props} />} 
        />
        <Route
          path = '/contact'
          render = {props => <ContactUs {...props} />} 
        />

        {/* Login */}
        <Route
          path = '/parentLogin'
          render = {props => <ParentLogin {...props} />} 
        />
        <Route
          path = '/adminLogin'
          render = {props => <AdminLogin {...props} />}
        />
        <Route
          path = '/studentLogin'
          render = {props => <StudentLogin {...props} />} 
        />
        <Route
          path = '/teacherLogin'
          render = {props => <TeacherLogin {...props} />} 
        />
        {/* Signup */}
        <Route
          path = '/adminSignup'
          render = {props => <AdminSignup {...props} />}
        />
        <Route
          path = '/parentSignup'
          render = {props => <ParentSignup {...props} />}
        />
        <Route
          path = '/teacherSignup'
          render = {props => <TeacherSignup {...props} />} 
        />
        <Route
          path = '/studentSignup'
          render = {props => <StudentSignup {...props} />} 
        />


        <Route
          path = '/dashboard'
          render = {props => <Dashboard {...props} />}
        />
        {/* parents */}
        <Route
          path = '/addParents'
          render = {props => <AddParents {...props} />}
        />
        <Route
          path = '/allParents'
          render = {props => <AllParents {...props} />} 
        />
        <Route
          path = '/parentsDetails'
          render = {props => <ParentsDetails {...props} />} 
        />
        <Route
          path = '/parentDashboard'
          render = {props => <ParentDashboard {...props} />}
        />
        {/* students */}
        <Route
          path = '/admission'
          render = {props => <Admission {...props} />}
        />
        <Route
          path = '/allStudents'
          render = {props => <AllStudents {...props} />} 
        />
        <Route
          path = '/studentAttendance'
          render = {props => <StudentAttendance {...props} />} 
        />
        <Route
          path = '/studentDetails'
          render = {props => <StudentDetails {...props} />} 
        />
        <Route
          path = '/studentPromotion'
          render = {props => <StudentPromotion {...props} />}
        />
        <Route
          path = '/studentHome'
          render = {props => <StudentHome {...props} />}
        />
        {/* teachers */}
        <Route
          path = '/addTeacher'
          render = {props => <AddTeacher {...props} />} 
        />
        <Route
          path = '/allTeachers'
          render = {props => <AllTeachers {...props} />} 
        />
        <Route
          path = '/teachersDetails'
          render = {props => <TeacherDetails {...props} />} 
        />
        <Route
          path = '/teachersPayment'
          render = {props => <TeachersPayment {...props} />}
        />
        <Route
          path = '/teacherDashboard'
          render = {props => <TeacherDashboard {...props} />}
        />
        <Route
          path = '/allSubjects'
          render = {props => <AllSubjects {...props} />} 
        />
        
        {/* classes */}
        <Route
          path = '/addClass'
          component = {props => <AddClass {...props} />} 
        />
        <Route
          path = '/allClasses'
          component = {props => <AllClasses {...props} />} 
        />
        {/* fees */}
        <Route
          path = '/addExpenses'
          component = {props => <AddExpenses {...props} />}
        />
        <Route
          path = '/expenses'
          component = {props => <Expenses {...props} />}
        />
        <Route
          path = '/feesCollection'
          component = {props => <FeesCollection {...props} />}
        />
        {/* library */}
        <Route
          path = '/addBook'
          component = {props => <AddBook {...props} />}
        />
        <Route
          path = '/allBooks'
          component = {props => <AllBooks {...props} />} 
        />
        {/* Exam */}
        <Route
          path = '/examGrade'
          component = {props => <ExamGrade {...props} />} 
        />
        <Route
          path = '/examSchedule'
          component = {props => <ExamSchedule {...props} />}
        />
        {/* transport */}
        <Route
          path = '/transport'
          component = {props => <Transport {...props} />} 
        />
        {/* hostel */}
        <Route
          path = '/hostel'
          component = {props => <Hostel {...props} />} 
        />
        {/* notice */}
        <Route
          path = '/notice'
          component = {props => <Notice {...props} />}
        />

      </Switch>
      </React.Suspense>
      </Router>
  );
  }
}

export default App;
