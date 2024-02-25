import BuilderCardOne from "../BuilderCardone";
import BuilderMiddleCard from "../BuilderMiddleCard";
import BuilderEndCard from "../BuilderEndCard";
import "./index.css"
const WebsiteBuilder =()=>{
    return(
       <div className="main-card">
        <BuilderCardOne/>
        <BuilderMiddleCard/>
        <BuilderEndCard/>
       </div>
    )

}

export default WebsiteBuilder