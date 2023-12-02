import { useState } from 'react'
import {Link} from 'react-router-dom'
import OTPInput, { ResendOTP } from "otp-input-react";
import PhoneNumberValidation from '../PhoneNumberValidation'
import OTPValidation from '../OTPValidation';
import Dashboard from '../Dashboard';
import './index.css'

const LoginForm=()=>{
  
    const [status,setStatus]=useState('LOGIN')
    const [OTP, setOTP] = useState("");
    const [dashboard,setDashboard]=useState(false)

    const onClickGetOtp=()=>{
        setStatus("VERIFY")
    }
    
    const onClickVerify=()=>{
        setStatus("SUCCESS")
    }

    const onClickContinue=()=>{
        setDashboard(true)
    }


    const renderLogin=()=>(
        <div className='loginContainer'>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg'/>
                <div className='welcomeContainer'>
                    <a className='welcome'>Welcome</a>
                    <a className='welcomePara'>Welcome to <span className='span_dooper'>DOOPER</span>, please enter your details</a>
                    <div className='phoneNumberContainer'> 
                        <label className='label'>Phone Number</label>
                        {<PhoneNumberValidation/>}
                        <button className='loginBtn' onClick={onClickGetOtp}>Send OTP</button>
                    </div>
                </div>
                <div className=''>
                    <div className='checkBoxContainer'>
                        <input type='checkbox' className='checkBox'/>
                        <p>By signing up you agree to <span className='span_dooper'>Terms of use</span></p>
                    </div>
                    <div className='checkBoxContainer'>
                        <input type='checkbox' className='checkBox'/>
                        <p>By signing up you agree to <span className='span_dooper'>Marketing condition</span></p>
                    </div>
                </div>
                <p className='bottomText'>Join the community of smart and experienced doctors.
                 Login to access your personalized dashboard,
                 track your record or process and get informed by our services</p>
        </div>
    )
    
    const inputStyles={
        height:40,
        width:60,
        borderRadius:8,
        placeHolder:'-',
        borderWidth:0.8,
        borderColor:"#E3E6E8",
        marginTop:20,
        marginRight:6,
        marginLeft:6,
        marginBottom:10,
    }
    const places=["-","-","-","-"]

    const renderVerify=()=>(
            <div className='loginContainer'>
                <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg'/>
                <div className='otpContainer'>
                    <a className='verify'>Verify</a>
                    <a className='verifyPara'>Enter OTP which we sent to you</a>
                    <OTPValidation/>
                    <button className='verifyBtn' onClick={onClickVerify}>Verify OTP</button>
                </div>
                <p className='bottomText'>Join the community of smart and experienced doctors.
                     Login to access your personalized dashboard,
                     track your record or process and get informed by our services
                </p>
            </div>
    )

    const renderSuccess=()=>(
        <div className='successContainer'>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg'/>
            <div className='successImgContainer'>
                <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img"/>
                <a className='successful'>Successful</a>
                <a className='successfulPara'>OPT Is verified successfully, Start your work as pharmacy</a>
                <button className='successBtn' onClick={onClickContinue}>Continue</button>
            </div>
        </div>
    )

    /*const renderReview=()=>(
        <div className='reviewContainer'>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694708937/Dooper_Logo.png" alt="dooper img" className='dooperImg'/>
            <div className='reviewImgContainer'>
                <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695039440/Frame_htzijd.png" alt="review img"/>
                <a className='review'>Profile Under Review</a>
                <a className='reviewPara'>You profile is under review, which will be shown if the sign-up is completed.</a>
            </div>
        </div>
    )*/



    const renderResult=()=>{
        switch (status) {
            case "LOGIN":
                return renderLogin()
            case "VERIFY":
               return renderVerify()
            case  "SUCCESS":
                return renderSuccess()
            /*case "REVIEW":
                return renderReview()*/
            default:
                return null;
        }
}



   return (
        <div>
            {dashboard? <Dashboard/>: <div className="maincontainer">
            <div className="leftcontainer">
                <p className='dooper'>DOOPER</p>
                <div className='headingContainer'>
                    <h1 className='heading'>Start your journey with us</h1>
                    <p className='para'>Discover the world's best community of doctors and DHAs</p>
                </div>
                <div className='ratingContainer'>
                    <p className='ratingText'>Simply unbelievable! I am really satisfied with the doctor
                    who treated me. This is absolutely wonderful!</p>
                    <div className='ratingProfile'>
                        <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694709052/rating_img.png" alt="rating" className='ratingImg'/>
                        <div>
                            <p className='timson'>Timson K</p>
                            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694713305/stars_c00urb.png" alt="stars" className='stars'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightContainer">
                {renderResult()}
           </div>
        </div>}
        </div>
    )
}

export default LoginForm