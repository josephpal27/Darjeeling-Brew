import './BrewServes.css';

const BrewServes = ({ data }) => {
    return (
        <>
            <div className="brew-serves-row">
                {
                    data.map((item, index) => (
                        <div className="serve-box" id={item.id} key={index}>
                            <div className="serve-box-content">
                                <span className="recipe-count">RECIPE {item.count}</span>
                                <span>{item.name}</span>
                                <p>{item.description}</p>
                                <div className="method">
                                    <span>Method</span>
                                    <p>{item.method}</p>
                                </div>
                            </div>
                            <div className="serve-box-image">
                                <img src={item.recipeImage} alt="Recipe Image" loading="lazy" />
                            </div>
                            {item.backgroundImage && (
                                <div className="serve-box-bg">
                                    <img src={item.backgroundImage} alt="Background" loading="lazy" />
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BrewServes
