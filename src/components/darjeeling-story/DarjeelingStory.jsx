import { Link } from 'react-router-dom';
import './DarjeelingStory.css';
import darjeelingStoryImage from '../../assets/images/darjeeling-story.avif';
import { BsArrowRightShort } from "react-icons/bs";

const DarjeelingStory = () => {
    return (
        <>
            <section className="darjeeling-story">
                <div className="darjeeling-story-image">
                    <img src={darjeelingStoryImage} alt="Darjeeling Story" loading="lazy" />
                    <div className="layer"></div>
                </div>
                <div className="darjeeling-story-content">
                    <h6>Darjeeling Story</h6>
                    <p>High in the Himalayas, where clouds drift like whispers and the first light brushes the earth with gold, lies Darjeeling - a place the world knows not just for tea, but for its timeless magic. Here, on emerald slopes wrapped in mist, every leaf carries the purity of the mountains and the quiet blessing of Everest. For generations, Darjeeling has been cherished globally as a symbol of trust, beauty, and soulful crafts.</p>
                    <Link to="/darjeeling-story"><button>Read More <BsArrowRightShort className="icon" /></button></Link>
                </div>
            </section>
        </>
    )
}

export default DarjeelingStory
