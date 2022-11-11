import { createContext, useContext } from "react";
import { rootStore } from "../stores";

const storeContext = createContext(rootStore);

export default useStore = () => {
    useContext(storeContext);
}