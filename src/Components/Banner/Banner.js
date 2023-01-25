import './Banner.scss';

import Cloud1 from '../../Images/cloud1.png';
import Cloud2 from '../../Images/cloud1.png';
import Cloud3 from '../../Images/cloud1.png';
import Cloud4 from '../../Images/cloud1.png';
import Cloud5 from '../../Images/cloud1.png';



const Banner = props => {

    return (
        <div className="clouds">
            <img src={Cloud1} id="--i" alt =" "/>
            <img src={Cloud2} id="--i" alt =" "/>
            <img src={Cloud3} alt =" "/>
            <img src={Cloud4} alt =" "/>
            <img src={Cloud5} alt =" "/>
            <div className='white'></div>
        </div>

    );
};

export default Banner;
