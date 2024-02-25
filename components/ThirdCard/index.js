
import ThirdStartCard from "../ThirdStartCard"
import ThirdEndCard from "../ThirdEndCard"
import BuilderMiddleCard from "../BuilderMiddleCard"
import "./index.css"
const ThirdCard =()=>{
    return(
        <div className="card1">
            <ThirdStartCard/>
            <BuilderMiddleCard/>
            <ThirdEndCard/>
        </div>
    )
}

export default ThirdCard