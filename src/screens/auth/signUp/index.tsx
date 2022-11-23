import { useState, useMemo } from "react";
import * as _ from "./styles";
import { ActivityIndicator, Alert } from "react-native";
import Typography from "../../../components/typography";
import { signUpTypes } from "../../../types";
import { Formik } from "formik";
import { signUpSchema } from "../schemas";
import { RootStackScreenProps } from "../../../types";
/* import { registerUser } from "../../../services/db/handleDb"; */

const SignUp = ({ navigation }: RootStackScreenProps<"SignUp">) => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = useMemo(
    () => ({
      user: "",
      password: "",
      passwordConfirmation: "",
    }),
    []
  );

  const handleSignUp = (values: signUpTypes) => {
    const { user, password } = values;
    /* registerUser(user, password); */
    setLoading(true);
    navigation.navigate("SignIn");
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
            <_.Title>Cadastro</_.Title>

            <_.Form>
              <Typography
                label="Usuário:"
                fontColor="#01599a"
                marginBottom="6px"
                marginLeft="6px"
              />
              {errors.user && touched.user && (
                <_.InputError>{errors.user}</_.InputError>
              )}
              <_.Input
                value={values.user}
                onBlur={handleBlur("user")}
                onChangeText={handleChange("user")}
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
