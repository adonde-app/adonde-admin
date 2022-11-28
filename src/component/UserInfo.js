import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const getUsersById = async () => {
      try {
        const res = await axios.post(
          "https://adonde-kr.herokuapp.com/user/findOneById",
          {
            id: props.value,
          }
        );

        console.log("getUsersById", res.data);
        setUserInfo(res.data);
      } catch (e) {
        // 실패 시 처리
        console.error(e);
      }
    };
    getUsersById();
  }, [props]);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          user info
          {userInfo != null ? (
            <div>
              <p>id : {userInfo.id}</p>
              <p>nickname : {userInfo.nickname}</p>
              <p>email : {userInfo.email}</p>
              <p>createdAt : {userInfo.createdAt}</p>
              <p>updatedAt : {userInfo.updatedAt}</p>
            </div>
          ) : (
            <div>로딩중</div>
          )}
          <Button variant="contained" onClick={props.onClick}>
            수정
          </Button>
          <Button variant="contained" onClick={props.onClick}>
            삭제
          </Button>
          <Button variant="contained" onClick={props.onClick}>
            닫기
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

export default UserInfo;
