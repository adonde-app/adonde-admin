import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
const ImgUpload = ({ laodProfileImgUrl }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const upload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `users/${imageUpload.name}`);
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // 업로드 되자마자 뜨게 만들기
      getDownloadURL(snapshot.ref).then((url) => {
        alert("upload 완료!");
        setUploadImgUrl(url);
        laodProfileImgUrl(url);
        console.log("uploadurl", url);
      });
      //
    });
  };

  useEffect(() => {
    console.log(storage);
  }, []);
  return (
    <div>
      <img src={uploadImgUrl} width={50} alt="upload"></img>
      <br />
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={upload}>선택완료</button>
    </div>
  );
};

export default ImgUpload;
