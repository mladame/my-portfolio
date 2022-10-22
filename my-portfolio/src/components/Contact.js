import { useState } from 'react';
import { send } from 'emailjs-com';
import '../styles/Contact.js';

function ContactForm() {
    // Declare state variable toSend, set initial values to null
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    // When user clicks submit, use emailjs to send email with input values
    const onSubmit = (e) => {
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */ }
    };

    // Helper function, set data toSend, target names = target values
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    retun(
        <div className='contactContainer'>
            {/* when user clicks submit, call onSubmit to send email */}
            <form onSubmit={onSubmit}>
                {/* User Name save as from_name */}
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                {/* User Email save as reply_to */}
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                {/* User Message */}
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type="submit" />Submit<button />
            </form>
        </div>
    );
}

export default ContactForm;