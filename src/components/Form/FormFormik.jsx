import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import feedBacksOperation from "../../redux/feedbacks/feedBackOperations";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormWrapper,
  TitleStyled,
  InputStyled,
  TextAreaStyled,
  FormButtonStyled,
  ErrorMessage,
} from "./FormFormik.styled";

const FormFormik = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedback.feedback);
  console.log(feedbacks);

  useEffect(() => {
    dispatch(feedBacksOperation.getAllFeedBacks());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "Must be longer than 3 letters")
        .max(20, "Not so long")
        .required("Required"),
      email: Yup.string().email("Invalid email addres").required("Required"),
      message: Yup.string()
        .min(3, "Must be longer than 3 letters")
        .max(200, "Not so long")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(feedBacksOperation.createFeedBack(values));
      resetForm({ values: "" });
      dispatch(feedBacksOperation.getAllFeedBacks());
    },
  });

  return (
    <FormWrapper>
      <TitleStyled>Reach out to us!</TitleStyled>
      <form onSubmit={formik.handleSubmit}>
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
        <InputStyled
          name="name"
          type="text"
          placeholder="Your name*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        ></InputStyled>
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <InputStyled
          name="email"
          type="email"
          placeholder="Your e-mail*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        ></InputStyled>
        {formik.touched.message && formik.errors.message ? (
          <ErrorMessage>{formik.errors.message}</ErrorMessage>
        ) : null}
        <TextAreaStyled
          name="message"
          type="textarea"
          placeholder="Your message*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></TextAreaStyled>

        <FormButtonStyled type="submit">Send message</FormButtonStyled>
      </form>
    </FormWrapper>
  );
};

export default FormFormik;
