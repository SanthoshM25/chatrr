import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import moment from "moment";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
};

export default Message;

const Container = styled.div``;
const MessageElement = styled.p`
  width: fit-content;
  padding: 1em;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #b0efeb;
  border-radius: 20px 20px 4px;
`;

const Reciever = styled(MessageElement)`
  text-align: left;
  background-color: #e1e5ea;
  border-radius: 20px 20px 15px 4px;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 6px;
  font-size: 11px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
