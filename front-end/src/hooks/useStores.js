import { createContext, useContext } from "react";
import { rootStore } from "../stores";

const storeContext = createContext(rootStore);

const useStores = () => {
    return useContext(storeContext);
}

export default useStores;