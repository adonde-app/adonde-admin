import StickyFooter from "../component/StickyFooter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);

  // getUsers();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://adonde-kr.herokuapp.com/user/findAll"
        );

        console.log("res", res.data);
        setUsers(res.data);
        // console.log("state user", users);
      } catch (e) {
        // 실패 시 처리
        console.error(e);
      }
    };
    getUsers();
  }, []);

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
              }}
            >
              {users == null ? (
                <div>로딩중</div>
              ) : (
                users.map((user) => (
                  <li key={user.id}>
                    {user.email} ({user.nickname}) {user.createdAt}
                  </li>
                ))
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <StickyFooter />
    </div>
  );
};

export default Users;
