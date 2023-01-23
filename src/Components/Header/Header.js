import './Header.scss';
import Background from '../../Images/background.png';
import Banner from '../../Components/Banner/Banner';


const Header = props => {

    return (
        <div className="header-container" style={{ backgroundImage:`url(${Background})` , backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
            <p className="quote">
            The demon (oni) is said to be the reborn spirit of an evil person who died 
            </p>
            <p>
            or even the spirit of someone who was wronged in their previous life
            </p>
            <Banner/>
        </div>

    );
};

export default Header;
