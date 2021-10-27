import React from "react";
const userDetailContext = React.createContext({
    userData: "",
    auth: false,
    token : ''
});
// 1=> create context
// 2=> wrap top level componets inside thi context
export default  userDetailContext
