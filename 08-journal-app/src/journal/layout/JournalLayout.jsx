import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";
import { Toolbar } from "@mui/material"

const drawrWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
    className="animate__animated animate__bounceIn"
      sx={{ display: "flex" }}
    >
      <NavBar drawerWidth={drawrWidth}/>
      <SideBar drawerWidth={drawrWidth}/>

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}
