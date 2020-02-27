import React from 'react'
import Sidebar from '../Sidebar';

function AdminLogin() {
    return(
        <div class="dashboard-page-one">
            <Sidebar />
        <div class="dashboard-content-one">
        
        <div class="breadcrumbs-area">
            <h3>Admin</h3>
            
        </div>
        
        <div class="card height-auto">
            <div class="card-body">
            <h3>LogIn</h3>
                
                <form class="new-added-form">
                    <div class="row">
                        <div class=" col-12 form-group">
                            <label>Username</label>
                            <input type="text" placeholder="" class="form-control" />
                        </div>
                        <div class="col-12 form-group">
                            <label>Password</label>
                            <input type="password" placeholder="" class="form-control" />
                        </div>
                        
                        
                        <div class="col-12 form-group mg-t-8">
                            <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"><a href="/dashboard">Submit</a></button>
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

export default AdminLogin;