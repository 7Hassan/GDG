import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MinLogo } from '../../utils/elements';
export const Footer = () => {
  return <footer>
    <div className="footer-container">

      <div className="icons flex items-center flex-nowrap justify-center gap-[20px]">
        Follow us:
        <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-500" />
        <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" />
        <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-600" />
        <MinLogo />
      </div>
    </div>
  </footer>
};
