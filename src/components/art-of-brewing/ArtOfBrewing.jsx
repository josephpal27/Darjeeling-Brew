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
                            <Tab.Pane eventKey="tabOne" className="fade show">
                                <div className="brew-timeline">
                                    <div className="curvy-line">
                                        <img src={curvyLine} alt="Line" loading="lazy" />
                                    </div>
                                    <div className="timeline-content">
                                        <div className="box" id="hot-box-1">
                                            <div className="box-image">
                                                <img src={hotBrew1} alt="Hot Brew 1" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Heat Fresh Water</span>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="box" id="hot-box-2">
                                            <div className="box-image">
                                                <img src={hotBrew2} alt="Hot Brew 2" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Add The Darjeeling Brew</span>
                                                <p>Add Darjeeling Brew Leaves and let them dance, <br /> suspended in warmth, for 4-5 minutes.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="hot-box-3">
                                            <div className="box-image">
                                                <img src={hotBrew3} alt="Hot Brew 3" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Let Time Work Its Magic</span>
                                                <p>Watch the liquor turn into golden.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="hot-box-4">
                                            <div className="box-image">
                                                <img src={hotBrew4} alt="Hot Brew 4" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Then Stop</span>
                                                <p>Before the mountain air turns bitter.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="hot-box-5">
                                            <div className="box-image">
                                                <img src={hotBrew5} alt="Hot Brew 5" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Golden Perfection</span>
                                                <p>Savour the golden perfection in a cup - smooth, crisp, and fragrant, like a Himalayan morning.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="hot-box-6">
                                            <div className="box-image">
                                                <img src={hotBrew6} alt="Hot Brew 6" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Make It Your Own</span>
                                                <p>Add a dash of milk and a dollop of <br /> honey if you so desire.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabTwo" className="fade">
                                <div className="brew-timeline">
                                    <div className="curvy-line">
                                        <img src={curvyLine} alt="Line" loading="lazy" />
                                    </div>
                                    <div className="timeline-content" id="cold-timeline-content">
                                        <div className="box" id="cold-box-1">
                                            <div className="box-image">
                                                <img src={coldBrew1} alt="Cold Brew 1" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Begin with Stillness</span>
                                                <p>Choose a quiet moment. Take fresh cold water in a jug. The clearer the water, the clearer the mind.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="cold-box-2">
                                            <div className="box-image">
                                                <img src={coldBrew2} alt="Cold Brew 2" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Add The Darjeeling Brew</span>
                                                <p>1 spoonful of The Darjeeling Brew Leaves for every 250 ml of water. Let the leaves sink slowly, like mist settling over the Darjeeling slopes.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="cold-box-3">
                                            <div className="box-image">
                                                <img src={coldBrew3} alt="Cold Brew 3" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Let Time Work Its Magic</span>
                                                <p>Let it infuse for minimum 30 minutes upto 6-8 hours. Overnight is perfect. The flavors unfold at their own pace, becoming velvet-smooth and floral.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="cold-box-4">
                                            <div className="box-image">
                                                <img src={coldBrew4} alt="Cold Brew 4" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Pour the Golden Brew</span>
                                                <p>Remove the leaves. Pour the golden, crystal-clear brew in a glass. Watch it glisten like morning sunlight over the Himalayas.</p>
                                            </div>
                                        </div>
                                        <div className="box" id="cold-box-5">
                                            <div className="box-image">
                                                <img src={hotBrew4} alt="Cold Brew 5" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <span>Taste the Cool of the Mountains</span>
                                                <p>One sip and you meet a different side of Darjeeling: crisp, refreshing, hydrating, and full of antioxidants. A gentle lift, serenity and clarity in mind.</p>
                                            </div>
                                        </div>
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

export default ArtOfBrewing
