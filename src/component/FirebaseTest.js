import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
const FirebaseTest = () => {
  //   const [imageUrl, setImageUrl] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  //   const storageRef = ref(storage, `logo.png`);
  //   const imageListRef = ref(storage, "images/");
  //   const url = async () => {
  //     const imageUrl = await getDownloadURL(storageRef);
  //     setImageUrl(imageUrl);
  //     console.log("imgurl", imageUrl);
  //   };

  const upload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // 업로드 되자마자 뜨게 만들기
      getDownloadURL(snapshot.ref).then((url) => {
        alert("upload 완료!");
        setUploadImgUrl(url);
        console.log("uploadurl", url);
        setImageList((prev) => [...prev, url]);
      });
      //
    });
  };

  useEffect(() => {
    console.log(storage);
    // listAll(imageListRef).then((response) => {
    //   response.items.forEach((item) => {
    //     getDownloadURL(item).then((url) => {
    //       setImageList((prev) => [...prev, url]);
    //     });
    //   });
    // });
    // console.log(storageRef);
    // url();
  }, []);
  return (
    <div>
      <p>FirebaseTest</p>
      {/* <img src={imageUrl} width={50} alt="logo"></img> */}
      <img src={uploadImgUrl} width={50} alt="upload"></img>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={upload}>업로드</button>
      {imageList.map((el) => {
        return <img key={el} src={el} alt="imglist" />;
      })}
    </div>
  );
};

export default FirebaseTest;
