import { styleSheet } from "swiss-react";
export default styleSheet("SearchField", {
  Wrapper: {
    backgroundColor: "white",
    boxShadow:
      "0px 2px 10px rgba(21, 20, 26, 0.15), 0px 2px 2px rgba(41, 39, 51, 0.13)",
    _size: ["70%", "60px"],
    borderRadius: "px",
    padding: "25px",
    _flex: ["row", "between", "center"],
    fontFamily: "sans-serif"
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
