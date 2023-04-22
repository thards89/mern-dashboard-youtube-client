import {
    GridColumnMenuContainer,
    GridFilterItem,
    HideGridColItem,
  } from "@mui/x-data-grid-pro";
  
  const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open } = props;
    return (
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
      >
        {/* <GridFilterItem onClick={hideMenu} column={currentColumn} /> */}
        {/* <HideGridColItem onClick={hideMenu} column={currentColumn} /> */}
      </GridColumnMenuContainer>
    );
  };
  
  export default CustomColumnMenu;