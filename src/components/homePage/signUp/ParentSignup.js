import React from 'react'
import Sidebar from '../Sidebar';

function ParentSignup() {
    return(
        <div class="dashboard-page-one">
            <Sidebar />
        <div class="dashboard-content-one">
        
        <div class="breadcrumbs-area">
            <h3>Parent</h3>
            
        </div>
        
        <div class="card height-auto">
            <div class="card-body">
            <h3>SignUp</h3>
                
                <form class="new-added-form">
                    <div class="row">
                        <div class="col-lg-6 col-12 form-group">
                            <label>Firstname</label>
                            <input type="text" placeholder="" class="form-control" />
                        </div>
                        <div class="col-lg-6 col-12 form-group">
                            <label>Lastname</label>
                            <input type="text" placeholder="" class="form-control" />
                        </div>
                        <div class="col-lg-6 col-12 form-group">
                            <label>Username</label>
                            <input type="text" placeholder="" class="form-control" />
                        </div>
                        <div class="col-lg-6 col-12 form-group">
                            <label>Email</label>
                            <input type="email" placeholder="" class="form-control" />
                        </div>
                        <div class="col-lg-6 col-12 form-group">
                            <label>Password</label>
                            <input type="password" placeholder="" class="form-control" />
                        </div>
                        <div class="col-lg-6 col-12 form-group">
                            <label>Phone number</label>
                            <input type="number" placeholder="" class="form-control" />
                        </div>
                        
                        <div class="col-12 form-group mg-t-8">
                            <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Submit</button>
                            <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        <footer class="footer-wrap-layout1">
            <div class="copyright">© Copyrights <a href="/">akkhor</a> 2019. All rights reserved. Designed by <a href="/">PsdBosS</a></div>
        </footer>
    </div>
    </div>
    )
}

export default ParentSignup;