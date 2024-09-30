import React from 'react';
import { FaBriefcase, FaVideo, FaFilm, FaDesktop } from "react-icons/fa";
import { RiTextSpacing } from 'react-icons/ri';

const Service = () => {
    // Inline styles
    const serviceContainerStyle = {
        backgroundColor: '#ffffff', // White background
        color: '#1a202c', // Dark gray text color
        padding: '3rem 1.5rem',
        position: 'relative', // To position pseudo-elements
        overflow: 'hidden', // Ensure dots don't overflow
    };

    const headingStyle = {
        textTransform: 'uppercase',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
        color: '#ffd700', // Gold
        fontSize: '3rem', // Increased font size
        marginBottom: '1rem',
        textAlign: 'center', // Center the heading
    };

    const textStyle = {
        maxWidth: '600px',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
        lineHeight: 1.8,
        RiTextSpacing: 1,
        color: '#1a202c', // Dark gray text color
        marginBottom: '3rem', // Space below text
    };

    const iconWrapperStyle = {
        position: 'relative',
        backgroundColor: '#1a202c', // Dark background
        color: '#ffd700', // Gold icon color
        borderRadius: '50%',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80px', // Increased width
        height: '80px', // Increased height
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        fontSize: '2.5rem', // Larger icon size
        margin: '0 auto', // Center the icon
    };

    // Content with alternating text and icons
    const content = [
        {
            text: "At Pioneer Filmz, we craft compelling stories that inspire, educate, and captivate audiences. As a leading video production company, we specialize in creating high-quality documentary films, corporate films, ad films, promotional videos, and other creative content that brings your vision to life.",
            icon: <FaBriefcase />
        },
        {
            text: "Our mission is to deliver exceptional visual storytelling that resonates with your target audience. We believe in the power of film to transform perspectives, build brands, and drive results.",
            icon: <FaVideo />
        },
        {
            text: "Experienced directors and producers, skilled cinematographers and editors, creative scriptwriters and storytellers, innovative visual effects artists.",
            icon: <FaFilm />
        },
        {
            text: "Unparalleled creativity and attention to detail, personalized service tailored to your needs, state-of-the-art equipment and technology, cost-effective solutions without compromising quality, timely delivery meeting deadlines.",
            icon: <FaDesktop />
        },
    ];

    return (
        <div style={serviceContainerStyle}><br/>
            <h2 style={headingStyle}>Welcome to Pioneer Filmz</h2><br/>
            {content.map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'left' : 'right', padding: '0 2rem' }}>
                        <p style={textStyle}>{item.text}</p>
                    </div>
                    <div style={{ flex: 1, padding: '0 2rem' }}>
                        <div style={iconWrapperStyle}>
                            {item.icon}
                        </div>
                    </div>
                </div>
            ))}
            <h3 style={{ ...headingStyle, textAlign: 'center' }}>Our Expertise</h3>
            <ul style={{ textAlign: "center", maxWidth: '600px', margin: '0 auto', listStyleType: 'none', padding: 0,textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)' }}>
    <li>Documentary Films: Sharing real stories, inspiring change</li>
    <li>Corporate Films: Showcasing your brand, values, and vision</li>
    <li>Ad Films: Grabbing attention, driving sales</li>
    <li>Promotional Videos: Elevating your product, service, or event</li>
    <li>Explainer Videos: Simplifying complex ideas, engaging audiences</li>
    <li>Social Media Content: Engaging, informative, and shareable</li>
</ul>

        </div>
    );
};

export default Service;
