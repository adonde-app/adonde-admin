import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import StickyFooter from "./StickyFooter";
import { SidoSggData } from "../locales/ko";

const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isModify, setIsModify] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    nickname: "",
    dateofbirth: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [storedCities, setStoredCities] = useState(null);
  const [deleteCities, setDeleteCities] = useState([]);

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
          storedCities: storedCities,
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
        setStoredCities(res.data.storedCities);
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
  const checkSelecItems = () => {
    console.log("checkSelecItems", selectedOption);

    //선택한 도시들 user의 storedCities에 push
    selectedOption.map((city) => {
      console.log("city", city.value);
      //특별시일 경우 *2 해서 다시 저장
      var pattern = /\s/g;
      if (city.value.match(pattern)) {
        //특별시가 아님
        storedCities.push(city.value);
      } else {
        //특별시
        const tempCity = city.value + " " + city.value;
        storedCities.push(tempCity);
      }
      return storedCities;
    });

    //중복값 제거
    const uniqueArr = storedCities.filter((element, index) => {
      return storedCities.indexOf(element) === index;
    });
    console.log("uniqueArr", uniqueArr);
    setStoredCities(uniqueArr);
  };
  const deleteStoredCities = () => {
    //선택한 도시들 user의 storedCities에 push
    selectedOption.map((city) => {
      console.log("city", city.value);
      setDeleteCities([]);
      //특별시일 경우 *2 해서 다시 저장
      var pattern = /\s/g;
      if (city.value.match(pattern)) {
        deleteCities.push(city.value);
        //특별시가 아님
        // const filtered1 = storedCities.filter(
        //   (element) => element !== city.value
        // );
        // console.log("특별시 아닌거 삭제", filtered1);
        // console.log("확인", storedCities);
        // setStoredCities(filtered1);
      } else {
        //특별시
        const tempCity = city.value + " " + city.value;
        deleteCities.push(tempCity);
        // console.log("특별시임", tempCity);
        // console.log("확인", storedCities);
        // const filtered2 = storedCities.filter(
        //   (element) => element !== tempCity
        // );
        // console.log("특별시 인거 삭제", filtered2);
        // setStoredCities(filtered2);
      }

      return 0;
    });

    console.log("delete", deleteCities);
    //deleteCities에 있는 값들 삭제하기
    for (let i = 0; i < deleteCities.length; i++) {
      for (let j = 0; j < storedCities.length; j++) {
        if (storedCities[j] === deleteCities[i]) {
          storedCities.splice(j, 1);
          j--;
        }
      }
    }
    console.log("delete", storedCities);
  };
  return (
    <div>
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
                  <p>storedCities : </p>
                  {storedCities != null ? (
                    <div>
                      {storedCities.map((city) => (
                        <li key={city}>{city}</li>
                      ))}
                    </div>
                  ) : (
                    <div>...</div>
                  )}
                  <Select
                    isDisabled={!isModify}
                    isMulti
                    options={SidoSggData}
                    defaultValue={selectedOption}
                    onChange={(newValues) => {
                      setSelectedOption(newValues);
                      console.log(selectedOption);
                    }}
                  />
                  <Button
                    disabled={!isModify}
                    variant="contained"
                    onClick={checkSelecItems}
                  >
                    도시 추가
                  </Button>
                  <Button
                    disabled={!isModify}
                    variant="contained"
                    onClick={deleteStoredCities}
                  >
                    도시 삭제
                  </Button>
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
      <StickyFooter />
    </div>
  );
};

export default UserInfo;
