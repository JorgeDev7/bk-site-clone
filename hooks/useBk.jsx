import { useContext } from "react";
import BkContext from "../context/BkProvider";

const useBk = () => {
    return useContext(BkContext);
}

export default useBk;