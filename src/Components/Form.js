import React from 'react';
import App from '../App';
import "../App.css"

const validateForm = errors => {
    let valid=true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            firstname: null, 
            lastname: null,
            phone: null,
            email: null,
            password: null,
            errors: {
                firstname: "", 
                lastname: "",
                phone: "",
                email: "",
                password: "",
            }
        }
        
    }
        handleChange= ({target}) => {
            this.setState({ [target.name] : target.value})
            let errors = this.state.errors
            switch(target.name) {
                case 'firstname':
                    errors.firstname = target.value.length<3 ? "Name must be more than 2 characters" : "";
                    break;
                case 'lastname':
                        errors.lastname = target.value.length ==0 ? "last name must not be empty" : "";
                        break;
                case "email": 
                        errors.email = target.value ? "email must contain @ character": "";
                        break;
                case "phone": 
                        errors.email = target.value ? "phone must contain numbers only": "";
                         break;
                case "password":
                        errors.password = target.value.length<7 ? "password must contain 7 character atleast": "";
                        break;
                default:
                        break;
            }
            this.setState({errors, [target.name] : target.value}, () => {
                console.log(errors)
            })
        }

        handleSubmit= e => {
            e.preventDefault();
            alert("Sign Up Complete")
            if(validateForm(this.state.errors)){
                console.log("valid form");
            }
            else{
                console.log("Invalid form")
            }
            this.setState({ [e.name]: e.value =""})
          
        }
       
    render() {
        return(
            <section>
            <form className="formstyle"  onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="firstname">First Name</label>
                 
                    <input 
                        type="text"
                        name="firstName"
                        value= {this.state.firstname}
                        onChange= {this.handleChange}
                     />
                 
                </div>
                <div> 
                  <label htmlFor="lastname">Lastname</label>
                  
                     <input 
                        type="text"
                        name="lastName"
                        value= {this.state.lastname}
                        onChange= {this.handleChange}
                      />
                    
                </div>
                <div>
                <label htmlFor="email">Email</label>
               
                    <input 
                       type="email"
                       name="email"
                       value= {this.state.email}
                       onChange= {this.handleChange}
                   />
                
                </div>
                 <div>
                <label htmlFor="phone">Phone</label>
              
                <input 
                   type="phone"
                   name="phone"
                   value= {this.state.phone}
                   onChange= {this.handleChange}
                   />
                  
                </div>
               <div>
                <label htmlFor="password">Password</label>
               
                <input 
                   type="password"
                   name="password"
                   value= {this.state.password}
                   onChange= {this.handleChange}
                   />
                   </div>
                  
                   <button type="submit">Sign Up</button>
            </form>
                 
            </section>
        )
    }
}

export default Form
