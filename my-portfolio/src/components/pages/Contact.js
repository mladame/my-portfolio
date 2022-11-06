import { useState } from 'react';
// import { send } from 'emailjs-com';
import { checkEmail } from '../../utils/helpers';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


function ContactForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Helper function, set data toSend, target names = target values
    const handleChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const onSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)     
        e.preventDefault();
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.     
        if (!checkEmail(email) || !name || !message) {
            setErrorMessage('Email or username is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it       return;       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.     
        }

        setName('');
        setMessage('');
        setEmail('');
    }

    return (
        <div className='contactContainer'>
            {/* when user clicks submit, call onSubmit to send email */}
            <form onSubmit={onSubmit} className="form-container">
                {/* User Name save as from_name */}
                <Stack className='stack-container'>
                    <div className='name-email'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Your name'
                            className='user-name'
                            value={name}
                            onChange={handleChange}
                        />
                        {/* User Email save as reply_to */}
                        <input
                            type='text'
                            name='email'
                            placeholder='Your email'
                            className='user-email'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    {/* User Message */}
                    <div className='message-submit-btn'>
                        <Stack>
                            <input
                                type='text'
                                name='message'
                                placeholder='Your message'
                                className='user-message'
                                value={message}
                                onChange={handleChange}
                            />
                            <Button variant="secondary" type="submit" className='submit-btn'>Submit</Button>{' '}
                        </Stack>
                    </div>
                </Stack>

            </form>
        </div>
    );
}

export default ContactForm;