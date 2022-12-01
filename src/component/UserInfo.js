import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const deleteUserById = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      console.log(userInfo.id);
      try {
        const res = await axios.delete(
          "https://adonde-kr.herokuapp.com/user/deleteById",
          {
            data: {
              id: userInfo.id,
            },
          }
        );

        console.log("deleteUserById", res);
        alert("삭제되었습니다");
        props.onClick();
      } catch (e) {
        // 실패 시 처리
        console.error(e);
      }
    } else {
    }
  };

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
              <img
                src={`${userInfo.profile_image}`}
                width="300"
                alt="profile"
              ></img>
              <p>id : {userInfo.id}</p>
              <p>nickname : {userInfo.nickname}</p>
              <p>email : {userInfo.email}</p>
              <p>createdAt : {userInfo.createdAt}</p>
              <p>updatedAt : {userInfo.updatedAt}</p>
              <p>
                storedCities :{" "}
                {userInfo["storedCities"].map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </p>
            </div>
          ) : (
            <div>로딩중</div>
          )}
          <Button variant="contained">수정</Button>
          <Button variant="contained" onClick={() => deleteUserById()}>
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
