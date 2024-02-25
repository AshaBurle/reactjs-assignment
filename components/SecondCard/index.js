import SecondStartCard from "../SecondStartCard"
import SecondEndCard from "../SecondEndCard"
import BuilderMiddleCard from "../BuilderMiddleCard"
import "./index.css"


const SecondCard =()=>{
    return(
        <div className="secCard">
        <SecondStartCard/>
        <BuilderMiddleCard/>
        <SecondEndCard/>    
           
        </div>
    )

}

export default SecondCard