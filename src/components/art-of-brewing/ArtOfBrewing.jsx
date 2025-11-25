import './ArtOfBrewing.css';
import { Tab, Nav } from "react-bootstrap";
import curvyLine from '../../assets/images/curvy-line.avif';

import hotBrew1 from '../../assets/images/brew-icons/hot/1.png';
import hotBrew2 from '../../assets/images/brew-icons/hot/2.png';
import hotBrew3 from '../../assets/images/brew-icons/hot/3.png';
import hotBrew4 from '../../assets/images/brew-icons/hot/4.png';
import hotBrew5 from '../../assets/images/brew-icons/hot/5.png';
import hotBrew6 from '../../assets/images/brew-icons/hot/6.png';

import coldBrew1 from '../../assets/images/brew-icons/cold/1.png';
import coldBrew2 from '../../assets/images/brew-icons/cold/2.png';
import coldBrew3 from '../../assets/images/brew-icons/cold/3.png';
import coldBrew4 from '../../assets/images/brew-icons/cold/4.png';

import leaf from '../../assets/images/brew-icons/leaf.avif';

const hotBrewSteps = [
    {
        id: 1,
        img: hotBrew1,
        title: "Heat Fresh Water",
        text: ""
    },
    {
        id: 2,
        img: hotBrew2,
        title: "Add The Darjeeling Brew",
        text: "Add Darjeeling Brew Leaves and let them dance, <br /> suspended in warmth, for 4-5 minutes."
    },
    {
        id: 3,
        img: hotBrew3,
        title: "Let Time Work Its Magic",
        text: "Watch the liquor turn into golden."
    },
    {
        id: 4,
        img: hotBrew4,
        title: "Then Stop",
        text: "Before the mountain air turns bitter."
    },
    {
        id: 5,
        img: hotBrew5,
        title: "Golden Perfection",
        text: "Savour the golden perfection in a cup - smooth, crisp, and fragrant, like a Himalayan morning."
    },
    {
        id: 6,
        img: hotBrew6,
        title: "Make It Your Own",
        text: "Add a dash of milk and a dollop of <br /> honey if you so desire."
    }
];

const coldBrewSteps = [
    {
        id: 1,
        img: coldBrew1,
        title: "Begin with Stillness",
        text: "Choose a quiet moment. Take fresh cold water in a jug. The clearer the water, the clearer the mind."

    },
    {
        id: 2,
        img: coldBrew2,
        title: "Add The Darjeeling Brew",
        text: "1 spoonful of The Darjeeling Brew Leaves for every 250 ml of water. Let the leaves sink slowly, like mist settling over the Darjeeling slopes."

    },
    {
        id: 3,
        img: coldBrew3,
        title: "Let Time Work Its Magic",
        text: "Let it infuse for minimum 30 minutes upto 6-8 hours. Overnight is perfect. The flavors unfold at their own pace, becoming velvet-smooth and floral."

    },
    {
        id: 4,
        img: coldBrew4,
        title: "Pour the Golden Brew",
        text: "Remove the leaves. Pour the golden, crystal-clear brew in a glass. Watch it glisten like morning sunlight over the Himalayas."

    },
    {
        id: 5,
        img: hotBrew4,
        title: "Taste the Cool of the Mountains",
        text: "One sip and you meet a different side of Darjeeling: crisp, refreshing, hydrating, and full of antioxidants. A gentle lift, serenity and clarity in mind."

    }
];

const ArtOfBrewing = () => {
    return (
        <>
            <section className="art-of-brewing">
                <img src={leaf} alt="Leaf" loading="lazy" id="leaf-right" />
                <img src={leaf} alt="Leaf" loading="lazy" id="leaf-left" />

                <div className="art-of-brewing-head">
                    <h6>The Art of Brewing - <br /> The Darjeeling Brew Way</h6>
                    <p>Because Darjeeling Brew isn't just another cup - it's a story steeped in the mist of the Himalayas. Every swirl, every minute, and every breath of steam carries the spirit of the mountain. Brewing Darjeeling isn't an act of habit, it's an act of devotion.</p>
                </div>

                <div className="brew-tabbing">
                    <Tab.Container defaultActiveKey="tabOne">

                        {/* Tabs Navigation */}
                        <Nav variant="tabs" className="tab-head">
                            <Nav.Item>
                                <Nav.Link eventKey="tabOne">The Ritual of Hot Brewing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabTwo">The Ritual of Cold Brewing</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/* Tabs Content */}
                        <Tab.Content>

                            {/* Hot Brewing */}
                            <Tab.Pane eventKey="tabOne" className="fade show">
                                <div className="brew-timeline">
                                    <div className="curvy-line">
                                        <img src={curvyLine} alt="Line" loading="lazy" />
                                    </div>

                                    <div className="timeline-content">
                                        {hotBrewSteps.map((step) => (
                                            <div className="box" id={`hot-box-${step.id}`} key={step.id}>
                                                <div className="box-image">
                                                    <img src={step.img} alt={step.title} loading="lazy" />
                                                </div>
                                                <div className="box-content">
                                                    <span>{step.title}</span>
                                                    <p dangerouslySetInnerHTML={{ __html: step.text }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Tab.Pane>

                            {/* Cold Brewing */}
                            <Tab.Pane eventKey="tabTwo" className="fade">
                                <div className="brew-timeline">
                                    <div className="curvy-line">
                                        <img src={curvyLine} alt="Line" loading="lazy" />
                                    </div>

                                    <div className="timeline-content" id="cold-timeline-content">
                                        {coldBrewSteps.map((step) => (
                                            <div className="box" id={`cold-box-${step.id}`} key={step.id}>
                                                <div className="box-image">
                                                    <img src={step.img} alt={step.title} loading="lazy" />
                                                </div>
                                                <div className="box-content">
                                                    <span>{step.title}</span>
                                                    <p dangerouslySetInnerHTML={{ __html: step.text }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </Tab.Pane>

                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default ArtOfBrewing;
