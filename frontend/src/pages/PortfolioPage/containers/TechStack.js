import 'pages/PortfolioPage/styles/TechStack.css'
const advancedStack = [{'stack':'python', 'color':'#3776AB'}, {'stack':'react', 'color':'#61DAFB'},]
const experiencedStack = [{'stack':'nodedotjs', 'color':'#339933'}, {'stack':'cplusplus', 'color':'#00599C'}, {'stack':'django', 'color':'#092E20'}]
const TechStack = () =>{
    
    return(<div className="techstack-container">
        <div className="techstack-title">
            <span>🛠</span>
            <span>Tech Stack</span>
        </div>
        <div className="techstack-div">
            <div>
                <div>Advanced</div>
                {advancedStack&&advancedStack.map(item=><img style={{'filter':`invert(20%) opacity(0.6) drop-shadow(0 0 0 ${item.color})`}} height="32" width="32" src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${item.stack}.svg`} />)}
            </div>
            <div>
                <div>Experienced</div>
                {experiencedStack&&experiencedStack.map(item=><img style={{'filter':`invert(20%) opacity(0.6) drop-shadow(0 0 0 ${item.color})`}} height="32" width="32" src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${item.stack}.svg`} />)}
            </div>
        </div>
    </div>);
}
export default TechStack;