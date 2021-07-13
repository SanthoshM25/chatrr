import Image from "next/image";
import { Circle } from "better-react-spinkit";
import logo from "../assets/loginScreen.png";
const Loading = () => {
  return (
    <center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Image src={logo} alt="logo" height={200} width={200} />
        <Circle size={60} color="#111111" />
      </div>
    </center>
  );
};

export default Loading;
