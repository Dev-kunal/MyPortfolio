import './footer.css';

export const Footer = () => {
    return (
        <footer id="contact" className='footer'>
            <div className='faint-heading center'>&lt; Connect /&gt;</div>
            <div className='social-links'>
                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/Dev-kunal'
                >
                    <i className='fab fa-github'></i>
                </a>

                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://twitter.com/kunal_tijare'
                >
                    <i className='fab fa-twitter'></i>
                </a>

                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.instagram.com/kunal_tijare/'
                >
                    <i className='fab fa-instagram'></i>
                </a>
                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.linkedin.com/in/kunal-tijare-aaab76179'
                >
                    <i className='fab fa-linkedin'></i>
                </a>

                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='mailto: kunaltijare77@gmail.com'
                >
                    <i className='fas fa-at'></i>
                </a>
            </div>
        </footer>
    );
};
