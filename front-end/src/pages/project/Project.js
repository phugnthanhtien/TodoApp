import { useState } from "react";
import PopupEdit from "../../components/popUpedit";

function Project() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPopup((prev) => !prev)}>Show pop up</button>
      {showPopup && <PopupEdit title={"this is pop up"} />}
    </div>
  );
}

export default Project;
