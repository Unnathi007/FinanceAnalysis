import React from 'react';
import "../assets/styles/footer.css";
import instagramIcon from '../assets/images/instagram.png'
import twitterIcon from '../assets/images/twitter.png'
import facebookIcon from '../assets/images/facebook.png'

export default function Footer(){
    return (
        <div className="footer">
            <p>
                <span><a href="#"><img src={instagramIcon} width="18" height="18"  /></a></span>
                <span><a href="#"><img src={twitterIcon} width="20" height="20"  /></a></span>
                <span><a href="#"><img src={facebookIcon} width="20" height="20"  /></a></span>
            </p>
            <p>Copyright @ ExpenseAnalysis 2022</p>
            
        </div>
    )
}