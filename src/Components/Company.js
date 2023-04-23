import { useState } from "react";

const Company = () => {
        const [companyDropdown, setCompanyDropdown] = useState(false);

        const handleClick = () => {
            if(companyDropdown === false){
            setCompanyDropdown(true)
            }
            else {
                setCompanyDropdown(false)
            }
        }
        return (
            <div class="dropdown">
      <button onClick={handleClick} className="company">
        Company
      </button>
      {companyDropdown ? <ul>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
      </ul> : null}
    </div>
    )
}

export default Company