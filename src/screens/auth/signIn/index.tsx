import { useState, useMemo } from "react";
import * as _ from "./styles";
import { ActivityIndicator } from "react-native";
import Typography from "../../../components/typography";
import { signInTypes } from "../../../types";
import { Formik } from "formik";
import { signInSchema } from "../schemas";
import Wallet from "../../../../assets/icons/wallet-sharp-blue.svg";

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  const handleSignIn = (values: signInTypes) => {
    setLoading(true);
  };

  return (
    <_.Container>
      <Formik
        validationSchema={signInSchema}
        initialValues={initialValues}
        onSubmit={handleSignIn}
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
            <_.Title>Entrar</_.Title>

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

              <_.SignInButton
                onPress={handleSubmit}
                disabled={!isValid || loading}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Typography label="Entrar" fontColor="white" />
                )}
              </_.SignInButton>

              <_.SignUpButton>
                <Typography
                  label="Ainda não possui uma conta ? Cadastre-se"
                  fontColor="#01599a"
                />
              </_.SignUpButton>
            </_.Form>
          </_.Box>
        )}
      </Formik>
    </_.Container>
  );
};

export default SignIn;
