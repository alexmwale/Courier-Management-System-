// ContactInfo.js
import React from 'react';
import { FaPhone, FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <ContactItem
                icon={<FaPhone className="text-custombrown text-3xl" />}
                title="Call Us"
                detail="+265 993376214"
            />
            <ContactItem
                icon={<FaClock className="text-custombrown text-3xl" />}
                title="Our Timing"
                detail={`Mon - Sat : 08:00 AM - 07:00 PM\nSun : Closed`}
            />
            <ContactItem
                icon={<FaEnvelope className="text-custombrown text-3xl" />}
                title="General Enquiries"
                detail="Deliveryexpress@gmail.com"
            />
            <ContactItem
                icon={<FaMapMarkerAlt className="text-custombrown text-3xl" />}
                title="Our Office Address"
                detail={`University of Malawi\nPO Box 280\nZomba`}
            />
        </div>
    );
};

const ContactItem = ({ icon, title, detail }) => {
    return (
        <div className="flex items-start p-4 pt-2 font-normal">
            <div className="flex flex-col items-start justify-start space-y-2 w-1/3">
                {icon}
                <h3 className="font-semibold text-center">{title}</h3>
            </div>
            <div className="w-2/3 text-black whitespace-pre-line">
                {detail}
            </div>
        </div>
    );
};

export default ContactInfo;
