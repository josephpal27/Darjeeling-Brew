import './ArtOfBrewing.css';
import { Tab, Nav } from "react-bootstrap";
import curvyLine from '../../assets/images/curvy-line.avif';
import hotBrew1 from '../../assets/images/brew-icons/hot/1.png';
import hotBrew2 from '../../assets/images/brew-icons/hot/2.png';
import hotBrew3 from '../../assets/images/brew-icons/hot/3.png';
import hotBrew4 from '../../assets/images/brew-icons/hot/4.png';
import hotBrew5 from '../../assets/images/brew-icons/hot/5.png';
import hotBrew6 from '../../assets/images/brew-icons/hot/6.png';

const ArtOfBrewing = () => {
    return (
        <>
            <section className="art-of-brewing">
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
                                    {/* <div className="timeline-images">
                                        <img src={hotBrew1} alt="Hot Brew 1" loading="lazy" />
                                        <img src={hotBrew2} alt="Hot Brew 2" loading="lazy" />
                                        <img src={hotBrew3} alt="Hot Brew 3" loading="lazy" />
                                        <img src={hotBrew4} alt="Hot Brew 4" loading="lazy" />
                                        <img src={hotBrew5} alt="Hot Brew 5" loading="lazy" />
                                        <img src={hotBrew6} alt="Hot Brew 6" loading="lazy" />
                                    </div> */}
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
                                                <p>Add a dash of milk and a dollop of honey if you so desire.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabTwo" className="fade">
                                Content 2
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>

            </section>
        </>
    )
}

export default ArtOfBrewing
