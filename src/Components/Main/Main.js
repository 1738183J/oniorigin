import './Main.scss';
import Scroll from '../../Images/scroll.jpeg';
import Oni from '../../Images/oni.png';
import Oni2 from '../../Images/Oni2.png';
import Kanji from '../../Images/kanji.png';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'



const Main = props => {
    return (
        <div className="main-container" style={{ backgroundImage:`url(${Scroll})` , backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className='main-title'>
            <Confetti
            numberOfPieces = {25}
            colors = {['#f44336']}
            wind = {0.2}
            />
                <h2>THE ONI</h2>
                <h3>A Japanese myth</h3>
            </div>
            <div className='presentation'>
                <div className="text-presentation">
                   <p className='main-text'>There are a few famous oni in Japanese demon lore. 
                       The most famous is probably Shuten-douji. In this myth, the Shuten-douji is responsible for many women from a countryside village going missing. 
                       A group of warriors decide to go and save the women, meeting the Shuten-douji demon who has been doing all the kidnapping. They knock it unconscious with a special drink and cut off its head. Even though it is detached from the body, the head tries to bite the lead warrior, who keeps it away by putting on two other helmets. 
                       At this point it is said that the demon is defeated and returns to its true form, at 50 feet tall and with fifteen horns! The warriors take the body back to the village to show everyone that they killed the demon. In more recent times, as mentioned, there have been stories about kind demons, such as The Red Oni Who Cried. </p>
                </div>
                <div className='main-images'> 
                    <img src={Oni} className="oni"/>
                    <img src={Kanji} className="kanji"/>
                </div> 
            </div>
            <img src={Oni2} className="oni2"/>
        </div>

    );
};

export default Main;
