import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ShaikhAlkaf7")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className=" text-center bg-gray-600 m-4 text-white p-4 text-3xl">
      Github followers:{data.name}
      <img
        src={data.avatar_url}
        alt=""
        width={300}
        className=" rounded-lg mt-5"
      />
    </div>
  );
}
export default Github;
