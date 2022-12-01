import StickyFooter from "../component/StickyFooter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FirebaseTest from "../component/FirebaseTest";
const Advert = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h1>Advert</h1>
        <FirebaseTest></FirebaseTest>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              list
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <StickyFooter />
    </div>
  );
};

export default Advert;
