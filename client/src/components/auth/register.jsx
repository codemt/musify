import React, { Component } from 'react'

 class Register extends Component {
    constructor(props){

          super(props);
          this.state = {

                name : '',
                email : '',
                password : '',
                confirm_password :'',
                errors:{}


          }

          

       

    }

    handleChange = (e) => {


      e.preventDefault();

      this.setState({ [e.target.name]: e.target.value }, () => {

        console.log("School Name is:", this.state.name);
        console.log("School Board  is :", this.state.email);
        
       

      });

    }

    onSubmit = (e) => {

        e.preventDefault();

        console.log(this.state);

    }
  render() {

  
    return (
        <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form onSubmit={this.onSubmit}>
              <div class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Name" name="name"  onChange={this.handleChange} required />
            </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" onChange={this.handleChange}  />
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                  <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" onChange={this.handleChange}  />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="confirm_password" onChange={this.handleChange}  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Register;