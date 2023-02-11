import facebookLogo from '../../assets/social-logo/facebook.svg'
import instagramLogo from '../../assets/social-logo/instagram.svg'
import linkedinLogo from '../../assets/social-logo/linkedin.svg'

function Footer() {
    return(
        <footer className="bg-light py-5">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h3>About Our Organization</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel blandit quam, vel fringilla velit. Sed quis elit fringilla, consectetur erat non, suscipit lorem.</p>
                </div>
                <div className="col-md-4">
                <h3>Contact Us</h3>
                <ul className="list-unstyled">
                    <li className="text-muted">Address: 123 Main St, Anytown USA</li>
                    <li className="text-muted">Phone: (123) 456-7890</li>
                    <li className="text-muted">Email: info@ourorganization.com</li>
                </ul>
                </div>
                <div className="col-md-4">
                <h3>Follow Us</h3>
                <ul className="list-inline">
                    <li className="list-inline-item">
                    <a href="/"><img className='img-fluid' width={40} height={40} src={facebookLogo} alt="facebook-link"/></a>
                    </li>
                    <li className="list-inline-item">
                    <a href="/"><img className='img-fluid' width={40} height={40} src={instagramLogo} alt="instagram-link"/></a>
                    </li>
                    <li className="list-inline-item">
                    <a href="/"><img className='img-fluid' width={40} height={40} src={linkedinLogo} alt="linkedin-link"/></a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer