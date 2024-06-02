import React, { useState } from 'react';
import '../styles/ContactPage.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [ModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        if (ModalOpen === true) {
            setModalOpen(false);
        } else {
            setModalOpen(true);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleModalOpen();
        // Here you can handle the form submission,
        // e.g., send the data to a server or an API endpoint
        window.alert('Thank you for getting in touch! I will get back to you soon.');
    };

    return (
        <div className="contact_page">
            <div className="contact_page__image"><img src="https://illustrations.popsy.co/white/freelancer.svg" alt="" /></div>
            
            <div className="contact_page__content">
                <div className='contacts_lead__title'>Get in touch!</div>
                <p className="contacts_lead__body">I’m always excited to connect with new people! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. Fill out the form below and I’ll get back to you as soon as possible. Looking forward to hearing from you!</p>

                <div onClick={handleModalOpen} className='btn connect_btn'>Lets Connect</div>

                <form onSubmit={handleSubmit} style={{bottom: ModalOpen === true ? 0 : "-120%"}} className="contact_form">
                    <div className="form_content">
                        <div className="content_close">
                            <div className="content_close__lead">Lets Connect!</div>
                            <div onClick={handleModalOpen}><IoMdCloseCircleOutline  style={{cursor: "pointer"}} size={28}/></div>
                            
                        </div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Subject:
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </label>
                        <button className='btn' type="submit">Submit</button>
                    </div>              
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
