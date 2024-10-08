import React from 'react'

function Argonsignin() {
  return (
    <div>
      <div className="row ht-100v flex-row-reverse no-gutters">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="signup-form">
                <div className="auth-logo text-center mb-5">
                    <div className="row">
                        <div className="col-md-2">
                            <img src="assets/images/logo-64x64.png" className="logo-img" alt="Logo"/>
                        </div>
                        <div className="col-md-10">
                            <p>Argon Social Network</p>
                            <span>Design System</span>
                        </div>
                    </div>
                </div>
                <form action="" method="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" name="" placeholder="Email Address"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="password" className="form-control" name="" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <a href="forgot-password.html">Forgot password?</a>
                        </div>
                        <div className="col-md-6">
                            <label className="custom-control material-checkbox">
                                <input type="checkbox" className="material-control-input"/>
                                <span className="material-control-indicator"></span>
                                <span className="material-control-description">Remember Me</span>
                            </label>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="form-group">
                                <button type="button" className="btn btn-primary sign-up">Sign In</button>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mt-4">
                            <p className="text-muted">Start using your fingerprint</p>
                            <a href="#" className="btn btn-outline-primary btn-sm sign-up" data-toggle="modal" data-target="#fingerprintModal">Use Fingerprint</a>
                        </div>
                        <div className="col-md-12 text-center mt-5">
                            <span className="go-login">Not yet a member? <a href="sign-up.html">Sign Up</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
            <div className="auth-left-content mt-5 mb-5 text-center">
                <div className="weather-small text-white">
                    <p className="current-weather"><i className='bx bx-sun'></i> <span>14&deg;</span></p>
                    <p className="weather-city">Gyumri</p>
                </div>
                <div className="text-white mt-5 mb-5">
                    <h2 className="create-account mb-3">Welcome Back</h2>
                    <p>Thank you for joining. Updates and new features are released daily.</p>
                </div>
                <div className="auth-quick-links">
                    <a href="#" className="btn btn-outline-primary">Purchase template</a>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade fingerprint-modal" id="fingerprintModal" tabindex="-1" role="dialog" aria-labelledby="fingerprintModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body text-center">
                    <h3 className="text-muted display-5">Place your Finger on the Device Now</h3>
                    <img src="assets/images/icons/auth-fingerprint.png" alt="Fingerprint"/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Argonsignin
