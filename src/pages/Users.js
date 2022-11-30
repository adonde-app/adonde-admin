import StickyFooter from "../component/StickyFooter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import UserInfo from "../component/UserInfo";
import CreateUser from "../component/CreateUser";
import Chart from "../component/Chart";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [isUserClick, setIsUserClick] = useState(false);
  const [isCreateUserClick, setIsCreateUserClick] = useState(false);
  const [userId, SetUserId] = useState(null);
  const [year, setYear] = useState("2022");

  // getUsers();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://adonde-kr.herokuapp.com/user/findAll"
        );

        console.log("getUsers", res.data);
        setUsers(res.data);
        // console.log("state user", users);
      } catch (e) {
        // 실패 시 처리
        console.error(e);
      }
    };
    getUsers();
  }, [isCreateUserClick]);

  if (isUserClick) {
    // getUsersById();
    return (
      <UserInfo
        onClick={() => {
          setIsUserClick(false);
        }}
        value={userId}
      ></UserInfo>
    );
  } else if (isCreateUserClick) {
    return (
      <CreateUser
        onClick={() => {
          setIsCreateUserClick(false);
        }}
      ></CreateUser>
    );
  }
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
                height: 300,
              }}
            >
              <Grid container>
                <div
                  style={{
                    color: "white",
                    backgroundColor: "grey",
                    width: 40,
                    borderRadius: 10,
                  }}
                  onClick={() => {
                    setYear("2021");
                  }}
                >
                  2021
                </div>
                <div
                  style={{
                    color: "white",
                    backgroundColor: "grey",
                    width: 40,
                    borderRadius: 10,
                  }}
                  onClick={() => {
                    setYear("2022");
                  }}
                >
                  2022
                </div>
              </Grid>
              <Chart value={year} />
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
              <h1>userlist</h1>
              {users == null ? (
                <div>로딩중</div>
              ) : (
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead sx={{ backgroundColor: "black" }}>
                      <TableRow>
                        <TableCell sx={{ color: "white" }}>id</TableCell>
                        <TableCell sx={{ color: "white" }} align="right">
                          nickname
                        </TableCell>
                        <TableCell sx={{ color: "white" }} align="right">
                          createdAt
                        </TableCell>
                        <TableCell sx={{ color: "white" }} align="right">
                          email
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          onClick={() => {
                            setIsUserClick(true);
                            SetUserId(user.id);
                          }}
                          key={user.id}
                        >
                          <TableCell component="th" scope="row">
                            {user.id}
                          </TableCell>
                          <TableCell align="right">{user.nickname}</TableCell>
                          <TableCell align="right">
                            {user.createdAt.split("T")[0]}
                          </TableCell>
                          <TableCell align="right">{user.email} </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            onClick={() => {
              setIsCreateUserClick(true);
            }}
          >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              + 사용자 등록하기
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <StickyFooter />
    </div>
  );
};

export default Users;
