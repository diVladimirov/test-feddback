import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  left: 147px;
  top: 179px;
  width: 563px;
  height: 575px;
  padding: 0px 3px;
`;

export const TitleStyled = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  margin-bottom: 30px;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 93px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 31px 0px 30px 46px;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2d2d2d;
  }
  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 189px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 31px 0px 0px 46px;
  margin-bottom: 23px;
  resize: none;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2d2d2d;
  }
  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;
export const FormButtonStyled = styled.button`
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  z-index: 1;

  :hover,
  :focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
