import { useState } from "react";
import PopupEdit from "../../components/popUpedit";

function Project() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPopup((prev) => !prev)}>Show pop up</button>
      {showPopup && <PopupEdit todo = "Create" title={"Project"} />}
    </div>
  );
}

export default Project;
