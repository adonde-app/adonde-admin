import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
const FirebaseTest = () => {
  const [imageUrl, setImageUrl] = useState("");

  const storageRef = ref(storage, `logo.png`);
  const url = async () => {
    const imageUrl = await getDownloadURL(storageRef);
    setImageUrl(imageUrl);
    console.log(imageUrl);
  };
  useEffect(() => {
    console.log(storage);
    // console.log(storageRef);
    url();
  });
  return (
    <div>
      <p>FirebaseTest</p>
      <img src={imageUrl} width={50} alt="logo"></img>
    </div>
  );
};

export default FirebaseTest;
