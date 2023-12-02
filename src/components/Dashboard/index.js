import { Component } from 'react';
import {FiPhone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {CiCalendarDate} from 'react-icons/ci'
import {BiTimeFive} from 'react-icons/bi'
import {BiSolidLeftArrowAlt} from 'react-icons/bi'
import Header from '../Header'
import {HiPhone} from 'react-icons/hi'
import {TiLocation} from 'react-icons/ti'
import {RiUploadCloudLine} from 'react-icons/ri'
import OTPInput, { ResendOTP } from "otp-input-react";
import Pagination from '../Pagination';
import OTPValidation from '../OTPValidation';
import './index.css' 


const inputStyles={
    height:40,
    width:40,
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


class Dashboard extends Component{
    state={availability:false,selectedSection:"Medicines", QuotationStatus:false,sendQuotation:false,prescription:false,addQuote:false, quoteStatus:"PENDING",deliveryStatus:"PENDING",startDelivery:false,deliveryPop:false,delivered:false}

    onClickChangeAvailability=()=>{
        this.setState(prevState=>({availability:!prevState.availability}))
    }
    
    onClickChangeQuotationStatus=()=>{
        this.setState({QuotationStatus:true})
    }

    onClickSelectSection=(section)=>{
        this.setState({selectedSection:section})
    }
    
    onClickChangeSendQuotation=()=>{
        this.setState(prevState=>({
            sendQuotation:!prevState.sendQuotation
        }))
    }

    renderPopup=()=>(
        <div className='popupContainer'>
            <div className='popUp'>
                <p className='popupPara'>Your <span className='span'>Availability</span> is disabled. Please enable your Availability to get new bookings</p>
                <button className='popupBtn' onClick={this.onClickChangeAvailability}>Enable Availability</button>            
            </div>
        </div>
    )

    onClickChangePrescription=()=>{
        this.setState(prevState=>({
            prescription:!prevState.prescription
        }))
    }

    renderPrescription=()=>(
        <div className='popupContainer' onClick={this.onClickChangePrescription}>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1696342167/image_201_qbntie.png" alt="prescription" className='prescriptionImg'/>
        </div>
    )
    
    onClickAddQuotation=()=>{
        this.setState(prevState=>({
            addQuote:!prevState.addQuote
        }))
    }
    onClickGoToDb=()=>{
        this.setState(prevState=>({
            addQuote:!prevState.addQuote,startDelivery:!prevState.startDelivery
        }))
    }
    
    onClickSendQuote=()=>{
        this.setState({quoteStatus:"SEND"})
    }

    renderQuotationPopUp=()=>(
        <div className='popupContainer'>
            <div className='addQuotationPopup'>
            <h1 className='addQuoteTxt'>Add Quotation</h1>
            <div className='uploadInput'>
                <label className='uploadTxt'>Upload Quotation</label>
                <div className='quoteInput'>
                    <div className='uploadLogo'>
                        <RiUploadCloudLine/>
                    </div>
                    <p className='placeHolder'>Place Holder</p>
                </div>
                <div className='line'>
                    <div className='or'>
                        or
                    </div>
                </div>
                <div className='uploadInput'>
                    <label htmlFor='price' className='uploadTxt'>Price</label>
                    <div>
                        <input id="price" type="text" placeholder='Enter price' className='textInput'/>
                    </div>
                </div>

                <div className='uploadInput'>
                    <label htmlFor="discount"  className='uploadTxt'>Discount</label>
                    <div>
                        <input id="discount" type="text" placeholder='Enter discount' className='textInput'/>
                    </div>
                </div>
                <button className='sendBtn' onClick={this.onClickSendQuote}>Send</button>
            </div>
        </div>
        </div>
    )
    
    
    renderQuoteSuccessPopup=()=>(
        <div className='popupContainer'>
                <div className='successImgContainer quoteSuccessContainer'>
                    <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img" className='quoteSuccessImg'/>
                    <a className='successful success'>Quotation Sent</a>
                    <a className='quoteSuccessPara'>Quotation for request #12345 is sent successfully</a>
                    <button className='successBtn quoteSuccessBtn' onClick={this.onClickGoToDb}>Go To Dashboard</button>
                </div>
        </div>
    )

    renderAddQuotationPopUp=()=>{
         const {quoteStatus}=this.state

         switch (quoteStatus) {
            case "PENDING":
                return this.renderQuotationPopUp()
            case "SEND":
                return this.renderQuoteSuccessPopup()
            default:
                return null;
         }
    }


    renderMedicinesContainer=()=>{

        const {QuotationStatus,delivered}=this.state
        const dateClass=delivered?"dateDelivered":"date"
    return (
       <div className='middleMainContainer'>
            <div className='cardsContainer'>
                <div className='card' onClick={this.onClickChangeSendQuotation}>
                    <div className='adiv'>
                        <a className='adivInner'>
                            <p className='patientId'>#123456</p>
                            <div className='adivInner'>
                            <p className={dateClass}><span className='spanIcon'><CiCalendarDate/></span>  13 June, 2023   </p>
                            <p className={dateClass}><span className='spanIcon'><BiTimeFive/></span>  09:00AM</p>
                            </div>
                        </a>
                        <a className='vaccines'>
                            <p className='vaccine'>Vaccine 1</p>
                            <hr className='vaccineHr'/>
                            <p className='vaccine'>Vaccine 2</p>
                            <hr className='vaccineHr'/>
                            <p className='vaccine'>Vaccine 3</p>
                        </a>
                    </div>
                    <hr className='cardHr'/>
                    <div className='middleCardContainer'>
                        <div className='profileImgContainer'>
                            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695474313/Ellipse_2_b3u52q.png" alt="profileImg"/>
                            <div>
                                <a className='patientName'>Patient Name</a><br/>
                                {delivered?<div><a className='details'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='details'>Height : 6” 3 inches | Weight : 76</a></div>:<a className='address'>XYZ, streetname, city</a>}
                            </div>
                        </div>
                        {delivered?<button className='delivered'>Delivered</button>:QuotationStatus?<button className='accepted'>Accepted</button>:<button className='requested'>Quotation Requested</button>}
                    </div>
                    <hr className='cardHr'/>
                    <div className='QuotationBtn'>
                        {QuotationStatus?<div className='adivInner'><p>Quotation :</p><p>Rs 500</p></div>:<button className='sendQuotation' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                    </div>
                </div>
            </div>
            <div className='paginationContainer'>
                <Pagination/>
            </div>
        </div>
    )
    }

    renderVaccineContainer=()=>{

        const {QuotationStatus}=this.state

        return (
            <div className='middleMainContainer'>
                 <div className='cardsContainer'>
                     <div className='card' onClick={this.onClickChangeSendQuotation}>
                         <div className='adiv'>
                             <a className='adivInner'>
                                 <p className='patientId'>#123456</p>
                                 <div className='adivInner'>
                                 <p className='date'><span className='spanIcon'><CiCalendarDate/></span>  13 June, 2023   </p>
                                 <p className='date'><span className='spanIcon'><BiTimeFive/></span>  09:00AM</p>
                                 </div>
                             </a>
                             <a className='vaccines'>
                                 <p className='vaccine'>Vaccine 1</p>
                                 <hr className='vaccineHr'/>
                                 <p className='vaccine'>Vaccine 2</p>
                                 <hr className='vaccineHr'/>
                                 <p className='vaccine'>Vaccine 3</p>
                             </a>
                         </div>
                         <hr className='cardHr'/>
                         <div className='middleCardContainer'>
                             <div className='profileImgContainer'>
                                 <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695474313/Ellipse_2_b3u52q.png" alt="profileImg"/>
                                 <div>
                                     <a className='patientName'>Patient Name</a><br/>
                                     <a className='address'>XYZ, streetname, city</a>
                                 </div>
                             </div>
                             {QuotationStatus?<button className='accepted'>Accepted</button>:<button className='requested'>Quotation Requested</button>}
                         </div>
                         <hr className='cardHr'/>
                         <div className='QuotationBtn'>
                             {QuotationStatus?<div className='adivInner'><p>Quotation :</p><p>Rs 500</p></div>:<button className='sendQuotation' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                         </div>
                     </div>
                 </div>
                 <div className='paginationContainer'>
                     <Pagination/>
                 </div>
             </div>
         )
    }
    
    onClickVerifyOtp=()=>{
        this.setState({
            deliveryStatus:"SEND"
        })
    }
    

    renderVerifyPopUp=()=>{
        const {OTP}=this.state
    return(
        <div className='popupContainer'>
            <div className='otpContainer deliveryOtpContainer'>
                <a className='verify'>Verify</a>
                <a className='verifyPara'>Ask patient for OTP</a>
                <OTPValidation/>
                <button className='verifyBtn' onClick={this.onClickVerifyOtp}>Verify OTP</button>
            </div>
        </div>
    )
    }

    renderOTPSuccessPopup=()=>(
        <div className='popupContainer'>
                <div className='successImgContainer quoteSuccessContainer'>
                    <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img" className='quoteSuccessImg'/>
                    <a className='successful success'>Successful</a>
                    <a className='quoteSuccessPara'>OTP is verified successfully</a>
                    <button className='successBtn quoteSuccessBtn'>Give Feedback</button>
                    <a onClick={this.onClickLater} className='later'>Later</a>
                </div>
        </div>
    )

    renderStartDeliveryPopup=()=>{
        const {deliveryStatus}=this.state

         switch (deliveryStatus) {
            case "PENDING":
                return this.renderVerifyPopUp()
            case "SEND":
                return this.renderOTPSuccessPopup()
            default:
                return null;
         }
    }
    
    onClickStartDelivery=()=>{
        this.setState(prevState=>({
            deliveryPop:!prevState.deliveryPop
        }))
    }
    
    onClickLater=()=>{
        this.setState(prevState=>({
            deliveryPop:!prevState.deliveryPop,delivered:!prevState.delivered
        }))
    }

    renderAddQuotation=()=>{
        const {startDelivery}=this.state

    return (
        <div className='addQuotationContainer'>
            <div className='case'>
                <div className='arrow' onClick={this.onClickChangeSendQuotation}><BiSolidLeftArrowAlt/></div>
                <h1 className='caseHead'> Case #123456</h1>
            </div>
            <div className='caseDetailsContainer'>
                <div className='quoteContainer'>
                    <div className='adivInner'>
                        <div className='profileImgContainer margin'>
                            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1696333379/Ellipse_2_w3cjwe.png" className='quoteProfileImg' alt="profileImg"/>
                            <div>
                                <a className='patientName'>Patient Name</a><br/>
                                <a className='address'>XYZ, streetname, city</a><br/>
                                <a className='details'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='details'>Height : 6” 3 inches | Weight : 76</a>
                            </div>
                        </div>
                        <div className='adivInner'>
                                <div className='lightPinkContainer'>
                                    <HiPhone/>
                                </div>
                                <div className='lightPinkContainer'>
                                    <TiLocation/>
                                </div>
                        </div>
                    </div>
                    <hr className='cardHr'/>
                    <div className='adivInner margin'>
                        <div className='vaccines'>
                            <button className='profileVaccineBtn'>Vaccine 1</button>
                            <button className='profileVaccineBtn'>Vaccine 2</button>
                            <button className='profileVaccineBtn'>Vaccine 3</button>
                        </div>
                        <button className='prescriptionBtn' onClick={this.onClickChangePrescription}>View Prescription</button>
                    </div>
                    <hr className='cardHr'/>

                    <div className='margin'>
                        <a>Need</a>
                        <a className='need'>
                            <div className='case'>
                                <div className='date'><CiCalendarDate/></div>
                                <p className='date date1'>  13 June, 2023   </p>
                            </div>
                            <div className='case case1'>
                                <div className='date'><BiTimeFive/></div>
                                <p className='date date1'>   09:00AM</p>
                            </div>
                        </a>
                    </div>

                    <hr className='cardHr'/>
                    {startDelivery?<div className='margin'>
                            <label>Dosage Instruction</label>
                            <input type="text" className='dosageInput'/>
                            <button className='startDeliveryBtn' onClick={this.onClickStartDelivery}>Start Delivery</button>
                    </div>:<div className='need margin'>
                        <button className='addQuoteBtn' onClick={this.onClickAddQuotation}>
                            Add Quotation
                        </button>
                    </div>}
                </div>
                {startDelivery&& (
                    <div className='priceDetails'>
                        <p className='received'>Payment Received</p>
                        <div className='adivInner'>
                            <p className='costName'>Sub Total</p>
                            <p className='cost'>Rs. 600</p>
                        </div>
                        <div className='adivInner'>
                            <p className='costName'>Discount</p>
                            <p className='cost'>Rs. 100</p>
                        </div>
                        <hr className='cardHr'/>
                        <div className='adivInner'>
                            <p>Total</p>
                            <p>Rs 500</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    }

    render(){
        const {availability,selectedSection,sendQuotation,prescription,addQuote,deliveryPop}=this.state 
        const availableBtn=availability?"buttonAfter":"buttonBefore"
        const Medicines=selectedSection==="Medicines"?"selected":"section"
        const Vaccination= selectedSection==="Vaccination"?"selected":"section"
        return(
            <>
             {availability?null: this.renderPopup()}
             {prescription?this.renderPrescription():null}
             {addQuote?this.renderAddQuotationPopUp():null}
             {deliveryPop?this.renderStartDeliveryPopup():null}
            <Header/>
            <div className='dashboardContainer'>
                <div>
                    <div className='top'>
                        <h2 className='dashboard '>Dashboard</h2>
                        <div className='availabilityBtn'>
                            <p className='availability'>Availability</p>
                            <div type="button" className={availableBtn} onClick={this.onClickChangeAvailability}></div>
                        </div>
                    </div>
                    <div className='sections'>
                        <div className={Medicines} onClick={()=>this.onClickSelectSection("Medicines")}>
                            Medicines
                        </div>
                        <div className={Vaccination} onClick={()=>this.onClickSelectSection("Vaccination")}>
                            Vaccination
                        </div>
                    </div>
                </div>

                <div className='middleContainer'>
                    {sendQuotation?this.renderAddQuotation():selectedSection==="Medicines"?this.renderMedicinesContainer():this.renderVaccineContainer()}
                </div>

                <div className='footer'>
                    <div className='main'>
                    <div className='itemsContainer'>
                        <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695106832/Dooper_Logo_1500x1500_4_1_c8cicw.png" className='dooperWhite' alt="footer dooper"/>
                        <div className='icon-text'>
                            <div className='whiteContainer'>
                                <FiPhone/>
                            </div>
                            <div>
                                <a className='contact'>Phone</a><br/>
                                <a className='contact'>+1 23 456 7980</a>
                            </div>
                        </div>
                        <div className='icon-text'>
                            <div className='whiteContainer'>
                                <FiMail/>
                            </div>
                            <div>
                                <a className='contact'>Mail</a><br/>
                                <a className='contact'>inf@2dooper.com</a>
                            </div>
                        </div>
                    </div>  
                    <div className='itemsContainer'>
                        <p className='listHead'>Quick Links</p>
                        <ul>
                            <li className='listItem'>Pricing</li>
                            <li className='listItem'>Doctors</li>
                            <li className='listItem'>Services</li>
                            <li className='listItem'>Testimonials</li>
                            <li className='listItem'>FAQs</li>
                        </ul>
                    </div>
                    <div className='itemsContainer'>
                        <p className='listHead'>Other</p>
                        <ul>
                            <li className='listItem'>Make Appointment</li>
                            <li className='listItem'>Emergency Call</li>
                            <li className='listItem'>Testimonials</li>
                        </ul>
                    </div>
                    <div className='itemsContainer'>
                        <p className='listHead'>Links</p>
                        <ul>
                            <li className='listItem'>Blogs</li>
                            <li className='listItem'>Privacy Policy</li>
                            <li className='listItem'>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className='itemsContainer'>
                        <p className='listHead'>Quick Links</p>
                        <div className='icon-text'>
                            <div className='whiteContainer'>
                                <AiFillInstagram/>
                            </div>
                            <div className='whiteContainer'>
                                <BsFacebook/>
                            </div>
                            <div className='whiteContainer'>
                                <BsLinkedin/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr className='hr'/>
                    <div className='copyWrite'>
                    Copyright © 2023 | All rights reserved by dooper
                    </div>
                </div>
            </div>

            </>
        
        )
    }
}
    
    
    

export default Dashboard;