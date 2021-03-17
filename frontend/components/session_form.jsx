import React from "react";
import {Link, Redirect} from "react-router-dom"
import errors_reducer from "../reducers/errors_reducer";

export default class SessionForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            full_name: "",
            display_name: "", 
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange (field) {
        return (e) => {
            this.setState({[field]: e.target.value});

        };
    }

    handleSubmit (e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm(this.state);
        if (this.props.errors.length === 0) {
            // <Redirect to="/"/>
            this.props.history.push("/");
        }
    }

    render () {
        const formType = this.props.formType;
        const errorMessages = this.props.errors.map(
            (error, idx) => (<li key={idx}>{error}</li>)
        )
        return (
            <div className="sessionFormPage">
                <div className="sf-header">
                        <img className="logo" src={slackerRGBUrl}></img>
                    <div className="link">
                        <p>New to Slacker?</p>
                        <Link to={`/${formType === "signup" ? "login" : "signup"}`}>
                            {formType === "signup" ? "Login" : "Create an account"}
                        </Link>
                    </div>
                </div>
                <div>
                <h1>{formType === "signup" ? "Sign Up" : "Sign in to Slacker"}</h1>
                    <p>We suggest using the <strong>email address you use at work.</strong></p>
                {formType === "signup" ? <p><span className="star">*</span> = required field</p> :""}
                </div>
                <div>
                {this.props.errors.length === 0 ? "" :
                    (<ul className="errors">
                        {errorMessages}
                    </ul>)
                
                }
                </div>
                <div>
                <form className="sessionForm">
                    {(formType === "signup") ? (
                        <label>Full Name<span className="star">*</span>: 
                            <input type="text" onChange={this.handleChange('full_name')} value={this.state.full_name}/>
                        </label>
                    ) : ""}
                    {(formType === "signup") ? (
                        <label>Display Name:
                            <input type="text" onChange={this.handleChange('display_name')} value={this.state.display_name}/>
                        </label>

                    ) : ""}
                    {/* <label>Email<span className="star">*</span>: */}
                        <input type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder="name@work-email.com"/>
                    {/* </label> */}
                    {/* <label>Password<span className="star">*</span>: */}
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder="Password"/>
                    {/* </label> */}
                    <button onClick={this.handleSubmit}>{this.props.formType === "signup" ? "Sign Up" : "Sign In with Email"}</button>
                </form>
                </div>
                
            </div>
        )
    }
}
