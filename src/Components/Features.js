import { useState } from "react"

const Features = () => {

    const [featureDropdown, setFeatureDropdown] = useState(false);

    const handleClick = () => {
        if(featureDropdown === false){
        setFeatureDropdown(true)
        }
        else {
            setFeatureDropdown(false)
        }
    }
    return (
        <div class="dropdown">
  <button onClick={handleClick} class="features">
    Features
  </button>
  {featureDropdown ? <ul>
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul> : null}
</div>
    )
}

export default Features