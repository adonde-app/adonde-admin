import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";

const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isModify, setIsModify] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    nickname: "",
    dateofbirth: "",
  });
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
  const updateUser = async () => {
    try {
      const res = await axios.put(
        "https://adonde-kr.herokuapp.com/user/update",
        {
          id: userInfo.id,
          email: inputs.email,
          password: userInfo.password,
          nickname: inputs.nickname,
          dateofbirth: inputs.dateofbirth,
          storedCities: userInfo.storedCities,
        }
      );

      console.log("updateUser", res);
      console.log("inputs", inputs);
      alert("update user");
    } catch (e) {
      // 실패 시 처리
      console.error(e);
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

        setInputs({
          email: res.data.email,
          nickname: res.data.nickname,
          dateofbirth: res.data.dateofbirth,
        });
      } catch (e) {
        // 실패 시 처리
        console.error(e);
      }
    };
    getUsersById();
  }, [props]);
  const onChange = (e) => {
    const { value, id } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    // console.log(inputs);
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [id]: value, // id 를 가진 값을 value 로 설정
    });
  };
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

              <div>
                <p>id : {userInfo.id}</p>
                nickname :{" "}
                <TextField
                  disabled={!isModify}
                  id="nickname"
                  value={inputs.nickname}
                  variant="standard"
                  onChange={onChange}
                ></TextField>
              </div>
              <div>
                email :
                <TextField
                  disabled={!isModify}
                  id="email"
                  value={inputs.email}
                  variant="standard"
                  onChange={onChange}
                ></TextField>
              </div>
              <div>
                dateofbirth :
                <TextField
                  disabled={!isModify}
                  id="dateofbirth"
                  value={inputs.dateofbirth}
                  variant="standard"
                  onChange={onChange}
                ></TextField>
                <p>createdAt : {userInfo.createdAt}</p>
                <p>updatedAt : {userInfo.updatedAt}</p>
                <p>
                  storedCities :{" "}
                  {userInfo["storedCities"].map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </p>
              </div>
            </div>
          ) : (
            <div>로딩중</div>
          )}
          {isModify ? (
            <Button
              variant="contained"
              onClick={() => {
                setIsModify(!isModify);
                updateUser();
              }}
            >
              수정완료
            </Button>
          ) : (
            <div>
              <Button
                variant="contained"
                onClick={() => setIsModify(!isModify)}
              >
                수정
              </Button>
              <Button variant="contained" onClick={() => deleteUserById()}>
                삭제
              </Button>
            </div>
          )}
        </Paper>
        <Button
          variant="contained"
          onClick={() => {
            props.onClick();
            window.location.reload();
          }}
        >
          닫기
        </Button>
      </Grid>
    </Container>
  );
};

export default UserInfo;
