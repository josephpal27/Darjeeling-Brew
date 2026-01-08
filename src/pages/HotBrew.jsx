import '../css/Recipes.css';

import BrewServes from '../components/brew-serves/BrewServes';

import hotRecipe1 from '../assets/images/recipes/hot/1.avif';
import hotRecipe2 from '../assets/images/recipes/hot/2.avif';
import hotRecipe3 from '../assets/images/recipes/hot/3.avif';
import hotRecipe4 from '../assets/images/recipes/hot/4.avif';
import hotRecipe5 from '../assets/images/recipes/hot/5.avif';

const hotBrewServesData = [
    {
        id: "serve-box-1",
        count: "01",
        name: "Darjeeling Ginger Honey Infusion", 
        description: "Fresh ginger warmth balanced by the floral character of The Darjeeling Brew and natural honey sweetness.", 
        method: "Brew The Darjeeling Brew hot. Stir in fresh ginger extract and raw honey. Serve warm with a slice of ginger.", 
        recipeImage: hotRecipe1,
        backgroundImage: "/images/brew-serve-bg-1.avif"
    },
    {
        id: "serve-box-2",
        count: "02",
        name: "Darjeeling Citrus Glow", 
        description: "Zesty orange and lemon layered over the light, refined profile of The Darjeeling Brew.", 
        method: "Brew The Darjeeling Brew hot. Add fresh orange and lemon juice. Finish with a hint of honey and serve warm.", 
        recipeImage: hotRecipe2,
        backgroundImage: "/images/brew-serve-bg-2.avif"
    },
    {
        id: "serve-box-3",
        count: "03",
        name: "Darjeeling Berry Comfort Brew", 
        description: "Mild berry richness blended into the smooth, warm base of The Darjeeling Brew.", 
        method: "Steep a hot cup of Darjeeling Brew. Stir in warm mixed berry reduction. Serve hot, finished with a berry garnish.", 
        recipeImage: hotRecipe3,
        backgroundImage: null
    },
    {
        id: "serve-box-4",
        count: "04",
        name: "Darjeeling Mint Honey Brew", 
        description: "Cooling mint and gentle sweetness rounded by a hot pour of The Darjeeling Brew.", 
        method: "Infuse fresh mint leaves into The Darjeeling Brew while hot. Add honey to taste. Serve warm.", 
        recipeImage: hotRecipe4,
        backgroundImage: "/images/brew-serve-bg-4.avif"
    },
    {
        id: "serve-box-5",
        count: "05",
        name: "Darjeeling Spiced Citrus Brew", 
        description: "Light spice and citrus peel adding depth to the naturally clean profile of The Darjeeling Brew.", 
        method: "Steep a hot cup of Darjeeling Brew. Add a touch of cinnamon and citrus peel. Serve warm.", 
        recipeImage: hotRecipe5,
        backgroundImage: "/images/brew-serve-bg-5.avif"
    },
]

const HotBrew = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src="/images/banners/hot-brew-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1>SIGNATURE SERVES</h1>
                    <p>A curated collection of modern recipes crafted to highlight the versatility of The Darjeeling Brew</p>
                </div>
            </section>

            {/* Brew Serves */}
            <section className="brew-serves">
                <div className="brew-serves-head">
                    <h2>HOT BREW SERVES</h2>
                    <p>Comforting, aromatic, and calming</p>
                </div>
                {/* Brew Serves Row */}
                <BrewServes data={hotBrewServesData} />
            </section>

            {/* Brew Serves Footer */}
            <section className="brew-serves-footer">
                <p>Designed for slow moments — these warm serves enhance Darjeeling’s natural aromatics and depth, creating comfort without heaviness.</p>
            </section>
        </>
    )
}

export default HotBrew
