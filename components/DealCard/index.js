

import "./index.css"
const DealCard =()=>{
    return (
        <div className="dealCard">
            <img src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=740&t=st=1708797332~exp=1708797932~hmac=9633ee66f9e3405a4e5a786901849347739cfa4a408b521642745b09dbb95f5c" alt="img" className="image"/>
            <div>
                <button type="button" className="btn1">20% OFF</button>
                <button type="button" className="btn2">Limited time</button>
            </div>
            <h3 className="head3">Webbuilder1</h3>
            <p className="para4">Comouter Modern classic with wix <br/> support</p>
            <p><span className="span1">$39.96</span> <span className="span2">$49.96</span> <span className="span3">20% off</span></p>
            <button type="button" className="viewbutton">View Deal</button>


        </div>
    )

}

export default DealCard