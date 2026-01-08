import './BrewServes.css';

import hotRecipe1 from '../../assets/images/recipes/hot/1.avif';
import hotRecipe2 from '../../assets/images/recipes/hot/2.avif';
import hotRecipe3 from '../../assets/images/recipes/hot/3.avif';
import hotRecipe4 from '../../assets/images/recipes/hot/4.avif';
import hotRecipe5 from '../../assets/images/recipes/hot/5.avif';

const BrewServes = () => {
    return (
        <>
            <div className="brew-serves-row">
                <div className="serve-box" id="hot-serve-box-1">
                    <div className="serve-box-content">
                        <span className="recipe-count">RECIPE 01</span>
                        <span>Darjeeling Ginger Honey Infusion</span>
                        <p>Fresh ginger warmth balanced by the floral character of The Darjeeling Brew and natural honey sweetness.</p>
                        <div className="method">
                            <span>Method</span>
                            <p>Brew The Darjeeling Brew hot. Stir in fresh ginger extract and raw honey. Serve warm with a slice of ginger.</p>
                        </div>
                    </div>
                    <div className="serve-box-image">
                        <img src={hotRecipe1} alt="Recipe Image" loading="lazy" />
                    </div>
                </div>
                <div className="serve-box" id="hot-serve-box-2">
                    <div className="serve-box-content">
                        <span className="recipe-count">RECIPE 02</span>
                        <span>Darjeeling Citrus Glow</span>
                        <p>Zesty orange and lemon layered over the light, refined profile of The Darjeeling Brew.</p>
                        <div className="method">
                            <span>Method</span>
                            <p>Brew The Darjeeling Brew hot. Add fresh orange and lemon juice. Finish with a hint of honey and serve warm.</p>
                        </div>
                    </div>
                    <div className="serve-box-image">
                        <img src={hotRecipe2} alt="Recipe Image" loading="lazy" />
                    </div>
                </div>
                <div className="serve-box" id="hot-serve-box-3">
                    <div className="serve-box-content">
                        <span className="recipe-count">RECIPE 03</span>
                        <span>Darjeeling Citrus Glow</span>
                        <p>Zesty orange and lemon layered over the light, refined profile of The Darjeeling Brew.</p>
                        <div className="method">
                            <span>Method</span>
                            <p>Brew The Darjeeling Brew hot. Add fresh orange and lemon juice. Finish with a hint of honey and serve warm.</p>
                        </div>
                    </div>
                    <div className="serve-box-image">
                        <img src={hotRecipe3} alt="Recipe Image" loading="lazy" />
                    </div>
                </div>
                <div className="serve-box" id="hot-serve-box-4">
                    <div className="serve-box-content">
                        <span className="recipe-count">RECIPE 04</span>
                        <span>Darjeeling Citrus Glow</span>
                        <p>Zesty orange and lemon layered over the light, refined profile of The Darjeeling Brew.</p>
                        <div className="method">
                            <span>Method</span>
                            <p>Brew The Darjeeling Brew hot. Add fresh orange and lemon juice. Finish with a hint of honey and serve warm.</p>
                        </div>
                    </div>
                    <div className="serve-box-image">
                        <img src={hotRecipe4} alt="Recipe Image" loading="lazy" />
                    </div>
                </div>
                <div className="serve-box" id="hot-serve-box-5">
                    <div className="serve-box-content">
                        <span className="recipe-count">RECIPE 05</span>
                        <span>Darjeeling Citrus Glow</span>
                        <p>Zesty orange and lemon layered over the light, refined profile of The Darjeeling Brew.</p>
                        <div className="method">
                            <span>Method</span>
                            <p>Brew The Darjeeling Brew hot. Add fresh orange and lemon juice. Finish with a hint of honey and serve warm.</p>
                        </div>
                    </div>
                    <div className="serve-box-image">
                        <img src={hotRecipe5} alt="Recipe Image" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrewServes
