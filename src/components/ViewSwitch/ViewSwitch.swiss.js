import { styleSheet } from "swiss-react";
export default styleSheet("ViewSwitch", {
  Wrapper: {
    // _el:"a" defines HTML tag
    _size: ["150px", "60px"],
    backgroundColor: "white",
    boxShadow:
      "0px 2px 10px rgba(21, 20, 26, 0.15), 0px 2px 2px rgba(41, 39, 51, 0.13)",
    _flex: ["row", "center", "center"],
    borderRadius: "4px"
  },

  IconWrapper: {
    _size: ["50%", "100%"],
    _flex: ["row", "center", "center"],
    padding: "25px"
  },

  Icon: {
    _size: ["18px", "10px"],
    backgroundColor: "red"
  }
});
