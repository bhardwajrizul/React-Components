
import Button from "../components/Button";

import { GiArrowDunk } from "react-icons/gi";
import { VscCircleSlash } from "react-icons/vsc";

function handleClick() {
  alert("Hello World");
}

function ButtonPage() {
  return (
    <>
      <div>
        <Button primary outline className="mb-4" onClick={handleClick} >
          <GiArrowDunk />
          Special Button
        </Button>
      </div>
      <div>
        <Button secondary>
          Button
        </Button>
      </div>
      <div>
        <Button success>
          Button
        </Button>
      </div>
      <div>
        <Button warning>
          Button
        </Button>
      </div>
      <div>
        <Button outline warning rounded >
        <VscCircleSlash />
          Download !
        </Button>
      </div>
      
    </>
  );
}

export default ButtonPage;
