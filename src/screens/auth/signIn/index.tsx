import { useState, useMemo } from "react";
import * as _ from "./styles";
import { ActivityIndicator } from "react-native";
import Typography from "../../../components/typography";
import { RootStackScreenProps, signInTypes } from "../../../types";
import { Formik } from "formik";
import { signInSchema } from "../schemas";

import { loginUser } from "../../../models/db/handleDb";
import Input from "../../../components/Input";

const SignIn = ({ navigation }: RootStackScreenProps<"SignIn">) => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = useMemo(
    () => ({
      user: "",
      password: "",
    }),
    []
  );

  const handleSignIn = (values: signInTypes) => {
    const { user, password } = values;
    loginUser(user, password);
    setLoading(true);
    navigation.navigate("Home");
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
            <_.Title>Entrar</_.Title>

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
              <Input
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
              <Input
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

              <_.SignUpButton onPress={() => navigation.navigate("SignUp")}>
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
