import React from 'react'

export const Footer = () => {
  return (
<div className="footer"  style={{background:'#ebe9e4',paddingTop:'15px',}}>
<footer className="site__footer">
            <div className="site-footer">
                <div className="container">
                    <div className="site-footer__widgets">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="site-footer__widget footer-contacts">
                                    <h5 className="footer-contacts__title">Contact Us</h5>
                                    <div className="footer-contacts__text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.</div>
                                    <ul className="footer-contacts__contacts">
                                         <h6>715 Fake Street,
                                            New York 10021 USA</h6>
                                            <h6>stroyka@example.com</h6>
                                         
                                       
                                         <h6>(800) 060-0730,
                                            (800) 060-0730</h6>
                                         <h6>Mon-Sat 10:00pm - 7:00pm
                                      </h6>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">Information</h5>
                                    <ul className="footer-links__list">
                                    <h6>Help Center</h6>
                                    <h6>Contact Us</h6>
                                    <h6>Report Abuse</h6>
                                    <h6>Terms & Conditions</h6>
                                    <h6>Privacy & Policy</h6>
                                    

                                   
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">My Account</h5>
                                    <ul className="footer-links__list">
                                    <h6>Store Location</h6>
                                    <h6>Order History</h6>
                                    <h6>Help Center</h6>
                                    <h6>Newsletter</h6>
                                    <h6>Gift Certificates</h6>
                                    <h6>Affiliate</h6>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="site-footer__widget footer-newsletter">
                                    <h5 className="footer-newsletter__title">Newsletter</h5>
                                    <div className="footer-newsletter__text">Praesent pellentesque volutpat ex, vitae auctor
                                        lorem pulvinar mollis felis at lacinia.</div>

                                        <form action="#" class="footer-newsletter__form"><label class="sr-only"
                                            htmlFor="footer-newsletter-address">Email Address</label>
                                            <p ><span><input type="text"
                                            class=" form-control"
                                            id="footer-newsletter-address" placeholder="Email Address..."/> <button
                                            class="footer-newsletter__form-button btn btn-primary" style={{marginTop:'5px'}}>Subscribe</button></span></p>
                                             
                                    </form>

                                    <div className="footer-newsletter__text footer-newsletter__text--social">Follow us on
                                        social networks</div>
                                    <ul className="footer-newsletter__social-links">
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="site-footer__bottom">
                        <div class="site-footer__copyright">
                           <p style={{ paddingLeft: '50px',}}>  copyright 2022@<span style={{ color: 'tomato' }}>HtmLover</span>  all rights reserved</p>
                        </div>
                        {/* <div class="site-footer__payments"><img src="images/payments.png" alt=""/></div> */}
                        
                    </div>
                </div>
            </div>
        </footer>
</div>


    
      );
  
}




