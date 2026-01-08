import '../css/Recipes.css';

import BrewServes from '../components/brew-serves/BrewServes';

import coldRecipe1 from '../assets/images/recipes/cold/1.avif';
import coldRecipe2 from '../assets/images/recipes/cold/2.avif';
import coldRecipe3 from '../assets/images/recipes/cold/3.avif';
import coldRecipe4 from '../assets/images/recipes/cold/4.avif';
import coldRecipe5 from '../assets/images/recipes/cold/5.avif';

const coldBrewServesData = [
    {
        id: "serve-box-1",
        count: "01",
        name: "Darjeeling Ginger Ale Brew", 
        description: "Light floral notes paired with the crisp spice of ginger ale.", 
        method: "Steep the Darjeeling Brew in cold water overnight. Top with ginger ale. Serve chilled with a citrus twist.", 
        recipeImage: coldRecipe1,
        backgroundImage: "/images/brew-serve-bg-1.avif"
    },
    {
        id: "serve-box-2",
        count: "02",
        name: "Citrus Calamansi Cooler", 
        description: "Zesty citrus balanced by a smooth, mountain-grown base.", 
        method: "Steep the Darjeeling Brew in cold water overnight. Add calamansi or lime juice. Finish with soda and ice.", 
        recipeImage: coldRecipe2,
        backgroundImage: "/images/brew-serve-bg-2.avif"
    },
    {
        id: "serve-box-3",
        count: "03",
        name: "Berry Mint Infusion", 
        description: "A refreshing blend of mixed berries with cooling mint.", 
        method: "Steep the Darjeeling Brew in cold water overnight. Stir in mixed berry juice. Add fresh mint and serve over ice.", 
        recipeImage: coldRecipe3,
        backgroundImage: null
    },
    {
        id: "serve-box-4",
        count: "04",
        name: "Pineapple Ginger Splash", 
        description: "Bright pineapple sweetness with a subtle ginger taste.", 
        method: "Steep the Darjeeling Brew in cold water overnight. Blend with pineapple juice and ginger syrup. Serve chilled.", 
        recipeImage: coldRecipe4,
        backgroundImage: "/images/brew-serve-bg-4.avif"
    },
    {
        id: "serve-box-5",
        count: "05",
        name: "Lemon Honey Cold Brew", 
        description: "Clean citrus flavours softened with natural honey.", 
        method: "Steep the Darjeeling Brew in cold water overnight. Add lemon juice and a touch of honey. Serve over ice.", 
        recipeImage: coldRecipe5,
        backgroundImage: "/images/brew-serve-bg-5.avif"
    },
]

const ColdBrew = () => {
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
                    <h2>COLD BREW SERVES</h2>
                    <p>A cooler way to brew - smooth and easy</p>
                </div>
                {/* Brew Serves Row */}
                <BrewServes data={coldBrewServesData} />
            </section>

            {/* Brew Serves Footer */}
            <section className="brew-serves-footer">
                <p>Cold brewed for clarity, lightness, and a smooth, refreshing finish.</p>
            </section>
        </>
    )
}

export default ColdBrew
