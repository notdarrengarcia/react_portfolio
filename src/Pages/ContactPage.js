import React from 'react'
import ConactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title"></div>
            <Title title={'Contact'} span={'Contact'} />
            <div className="ContactPage">
            <div className="map-sect"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55271.85511641463!2d-99.17655143162014!3d30.02277012935115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86597161d333dbff%3A0xb7837af6efd44c27!2sKerrville%2C%20TX%2078028!5e0!3m2!1sen!2sus!4v1616275686855!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ConactItem icon={phone} text1={'(830)-388-9717'} title={'Phone'} />
                <ConactItem icon={email} text1={'darrengarcia159@gmail.com'} title={'Email'} />
                <ConactItem icon={location} text1={'116 Misty Ln W, Kerville TX, 78028'} title={'Address'}/>
            </div>
            </div>
        </div>
    )
}

export default ContactPage
