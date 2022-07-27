import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import feedBacksOperation from "../../redux/feedbacks/feedBackOperations";
import {
  FormWrapper,
  TitleStyled,
  InputStyled,
  TextAreaStyled,
  FormButtonStyled,
} from "./Form.styled";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedback.feedback);
  console.log(feedbacks);

  useEffect(() => {
    dispatch(feedBacksOperation.getAllFeedBacks());
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "message":
        return setMessage(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(feedBacksOperation.createFeedBack({ name, email, message }));
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FormWrapper>
      <TitleStyled>Reach out to us!</TitleStyled>
      <form onSubmit={handleSubmit}>
        <InputStyled
          name="name"
          value={name}
          placeholder="Your name*"
          onChange={handleChange}
        ></InputStyled>
        <InputStyled
          name="email"
          value={email}
          placeholder="Your e-mail*"
          onChange={handleChange}
        ></InputStyled>
        <TextAreaStyled
          name="message"
          value={message}
          placeholder="Your message*"
          onChange={handleChange}
        ></TextAreaStyled>
        <FormButtonStyled>Send message</FormButtonStyled>
      </form>
    </FormWrapper>
  );
};

export default Form;
