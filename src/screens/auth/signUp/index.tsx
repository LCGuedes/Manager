import { useState, useMemo } from "react";
import * as _ from "./styles";
import { ActivityIndicator } from "react-native";
import Typography from "../../../components/typography";
import { signUpTypes } from "../../../types";
import { Formik } from "formik";
import { signUpSchema } from "../schemas";
import Wallet from "../../../../assets/icons/wallet-sharp-blue.svg";

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
      passwordConfirmation: "",
    }),
    []
  );

  const handleSignUp = (values: signUpTypes) => {
    setLoading(true);
  };

  return (
    <_.Container>
      <Formik
        validationSchema={signUpSchema}
        initialValues={initialValues}
        onSubmit={handleSignUp}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          touched,
          values,
        }) => (
          <_.Box>
            <Wallet width={50} height={50} />
            <_.Title>Cadastro</_.Title>

            <_.Form>
              <Typography
                label="Email:"
                fontColor="#01599a"
                marginBottom="6px"
                marginLeft="6px"
              />
              {errors.email && touched.email && (
                <_.InputError>{errors.email}</_.InputError>
              )}
              <_.Input
                keyboardType="email-address"
                value={values.email}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
              />

              <Typography
                label="Senha:"
                fontColor="#01599a"
                marginBottom="6px"
                marginLeft="6px"
              />
              {errors.password && touched.password && (
                <_.InputError>{errors.password}</_.InputError>
              )}
              <_.Input
                secureTextEntry
                value={values.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
              />

              <Typography
                label="Confirmar senha:"
                fontColor="#01599a"
                marginBottom="6px"
                marginLeft="6px"
              />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <_.InputError>{errors.passwordConfirmation}</_.InputError>
              )}
              <_.Input
                secureTextEntry
                value={values.passwordConfirmation}
                onBlur={handleBlur("passwordConfirmation")}
                onChangeText={handleChange("passwordConfirmation")}
              />

              <_.SignUpButton
                onPress={handleSubmit}
                disabled={!isValid || loading}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Typography label="Cadastrar" fontColor="white" />
                )}
              </_.SignUpButton>

              <_.SignInButton>
                <Typography
                  label="Já tem uma conta ? Entrar"
                  fontColor="#01599a"
                />
              </_.SignInButton>
            </_.Form>
          </_.Box>
        )}
      </Formik>
    </_.Container>
  );
};

export default SignUp;
