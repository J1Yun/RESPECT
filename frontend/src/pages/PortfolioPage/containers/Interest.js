import 'pages/PortfolioPage/styles/Interest.css'
const interest = [ '웹 풀스택', '머신러닝', '인공지능', '블록체인']
const Interest = () =>{
    return(<div className="interest-container">
        <div className="interest-title">
            <span>🌟</span>
            <span>Interest</span>
        </div>
        <div className="interest-div">
            <ul>
                {interest && interest.map((item)=><li>{item}</li>)}
            </ul>
        </div>
    </div>);
}
export default Interest;