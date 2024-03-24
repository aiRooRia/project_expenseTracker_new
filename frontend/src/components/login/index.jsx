import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { signUpSchema } from "./validationschema.js";
import { Context } from "../export/export";
import { useRouter } from "next/router.js";

export const Login = () => {
  const [warningMessage, setWarningMessage] = useState("");
  const { signUpUserInfo, setSignUpUserInfo } = useContext(Context);
  const [signUp, setSignUp] = useState(false);
  const { push } = useRouter();
  const formikSignUp = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      rePassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/users`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const response = await res.json();

        if (response.message) {
          setWarningMessage(response.message);
        } else if (response.success) {
          setSignUpUserInfo({
            ...signUpUserInfo,
            name: values.name,
            email: values.email,
            password: values.password,
          });
          console.log(signUpUserInfo);
          push("/loading");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  // const fetchUsers = async () => {
  //   try {
  //     const res = await fetch(API_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name, email, password }),
  //     });
  //     const data = await res.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {}, [warningMessage]);

  // const addUser = () => {
  //   fetchUsers();
  // };
  const handleSignup = () => {
    setSignUp(true);
    setWarningMessage("");
  };
  const handleLogin = () => {
    setSignUp(false);
  };
  return (
    <div className="w-screen h-screen flex">
      <div className="w-6/12 bg-[#191b1d] flex justify-center items-center">
        {!signUp && (
          <div className="w-[600px] bg-white flex flex-col items-center gap-[40px] p-4 rounded-xl ">
            <div className="flex gap-3">
              <img src="beer.svg" alt="" width={35} />
              <h1 className=" font-bold text-black  text-4xl">aiRo!</h1>
            </div>
            <div className="flex flex-col gap-3 items-center ">
              <h1 className="text-black text-4xl">Welcome back</h1>
              <p className="text-gray-600 text-lg">
                Welcome back, Please enter your details
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center w-[80%]">
              <label className="input input-bordered flex items-center gap-2 w-full h-[60px]">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full h-[60px]">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" className="grow" value="password" />
              </label>
              <Link
                href={"/loading"}
                className="btn btn-primary w-full h-[60px]"
              >
                Log in
              </Link>
            </div>
            <div className="flex gap-3">
              <p>Don’t have account?</p>
              <button onClick={handleSignup} className=" text-blue-600">
                Sign up
              </button>
            </div>
          </div>
        )}
        {signUp && (
          <div className="w-[600px] bg-white flex flex-col items-center gap-[40px] p-4 rounded-xl ">
            <div className="flex gap-3">
              <img src="beer.svg" alt="" width={35} />
              <h1 className=" font-bold text-black  text-4xl">aiRo!</h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <h1>Create Beer account</h1>
              <p>Sign up below to create your Wallet account</p>
            </div>
            <div className="w-[80%] flex flex-col gap-3">
              <FormikProvider value={formikSignUp}>
                <form
                  onSubmit={formikSignUp.handleSubmit}
                  className="flex flex-col gap-3"
                  action=""
                >
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      id=""
                      type="text"
                      className="grow"
                      placeholder="Name"
                      onChange={formikSignUp.handleChange}
                      value={formikSignUp.values.name}
                      name="name"
                    />
                    {formikSignUp.errors.name && formikSignUp.touched.name ? (
                      <div className="text-red-500 text-xs" id="">
                        {formikSignUp.errors.name}
                      </div>
                    ) : null}
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      id=""
                      type="text"
                      className="grow"
                      placeholder="email"
                      onChange={formikSignUp.handleChange}
                      value={formikSignUp.values.email}
                      name="email"
                    />
                    {formikSignUp.errors.email && formikSignUp.touched.email ? (
                      <div className="text-red-500 text-xs" id="">
                        {formikSignUp.errors.email}
                      </div>
                    ) : null}
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      id=""
                      type="password"
                      className="grow"
                      placeholder="password"
                      onChange={formikSignUp.handleChange}
                      value={formikSignUp.values.password}
                      name="password"
                    />
                    {formikSignUp.errors.password &&
                    formikSignUp.touched.password ? (
                      <div className="text-red-500 text-xs" id="">
                        {formikSignUp.errors.password}
                      </div>
                    ) : null}
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      id=""
                      type="password"
                      className="grow"
                      placeholder="re-password"
                      onChange={formikSignUp.handleChange}
                      name="rePassword"
                    />
                    {formikSignUp.errors.rePassword &&
                    formikSignUp.touched.rePassword ? (
                      <div className="text-red-500 text-xs" id="">
                        {formikSignUp.errors.rePassword}
                      </div>
                    ) : null}
                    {warningMessage && (
                      <p className="text-red-500 text-xs">{warningMessage}</p>
                    )}
                  </label>
                  <button
                    type="submit"
                    className="btn btn-primary w-full h-[60px]"
                  >
                    Sign up
                  </button>
                </form>
              </FormikProvider>
            </div>
            <div className="flex gap-3">
              <p>Already have account ?</p>
              <button onClick={handleLogin} className=" text-blue-600">
                Login
              </button>{" "}
            </div>
          </div>
        )}
      </div>
      <div className="w-6/12 flex bg-[#1d232a] justify-center items-center"></div>
    </div>
  );
};
