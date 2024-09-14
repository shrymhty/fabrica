import "./authentication.styles.scss";
import SignUpForm from "../../Components/sign-up-form/sign-up.component";
import SignInForm from "../../Components/sign-in-form/sign-in.component";

const Authentication = () => {


  return (
    // <div>
    //     <h5 className="title-6 welcome-title">Welcome to Urban Chic</h5>
    <div className="auth-container">

     <SignInForm/>
      <SignUpForm />
    </div>
    // </div>
   
  );
};

export default Authentication;
