import StickyFooter from "../component/StickyFooter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
const CreateUser = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    nickname: "",
    dateofbirth: "",
    profile_image: "",
  });
  const { email, nickname, dateofbirth, profile_image } = inputs;
  const onChange = (e) => {
    const { value, id } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    // console.log(inputs);
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [id]: value, // id 를 가진 값을 value 로 설정
    });
  };

  const postUserCreate = async () => {
    console.log("inputs", inputs);
    try {
      const res = await axios.post(
        "https://adonde-kr.herokuapp.com/user/create",
        {
          email: email,
          nickname: nickname,
          dateofbirth: dateofbirth,
          profile_image: profile_image,
        }
      );

      console.log("createUser", res.data);
      alert("create user!");
      props.onClick();
    } catch (e) {
      // 실패 시 처리
      console.error(e);
      alert("다시 시도해주세요");
    }
  };
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h1>createUser</h1>

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
              <TextField
                id="email"
                label="email"
                variant="standard"
                onChange={onChange}
              />
              <TextField
                id="nickname"
                label="name"
                variant="standard"
                onChange={onChange}
              />
              <TextField
                id="dateofbirth"
                label="birth"
                variant="standard"
                onChange={onChange}
              />
              <TextField
                id="profile_image"
                label="profile_img"
                variant="standard"
              />
              <Button variant="contained" onClick={postUserCreate}>
                등록하기
              </Button>
            </Paper>
            <Button variant="contained" onClick={props.onClick}>
              닫기
            </Button>
          </Grid>
        </Grid>
      </Container>
      <StickyFooter />
    </div>
  );
};

export default CreateUser;
