import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Grid sx={{ height: "100vh" }} container spacing={2}>
      <Grid item xs={6} sm={4} md={4} xl={2}>
        <Sidebar />
      </Grid>
      <Grid item sm={8} md={8} xl={10}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;
