import StickyFooter from "../component/StickyFooter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
const Users = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h1>users</h1>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              월별 user 추이
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              사용자 list
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <StickyFooter />
    </div>
  );
};

export default Users;
