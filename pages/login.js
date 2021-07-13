import { Button } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import logo from "../assets/loginScreen.png";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <ImgContainer>
          <Image src={logo} alt="logo" height={200} width={200} />
        </ImgContainer>
        <Button onClick={signIn} variant="outlined">
          sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 4em;
`;
const ImgContainer = styled.div`
  margin: 0 0 2.5em 0.5em;
`;
