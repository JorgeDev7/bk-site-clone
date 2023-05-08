import { useContext } from "react";
import BkContext from "../context/bkProvider";

const useBk = () => {
    return useContext(BkContext);
}

export default useBk;