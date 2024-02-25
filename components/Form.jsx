"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import Select from "react-select";
// import {useState} from React;

const Form = ({ type }) => {
  const options = ["S", "M", "L", "XL", "2XL", "other "];
  const batches = ["11","12","13","14","15","16","other"]
  const onOptionChangeHandler = (event) => {
    event.target.value;
    // setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  // const [show,setShow] = useState('password') ;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      }

      if (res.error) {
        toast.error("Something went wrong");
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        router.push("/chats");
      }

      if (res.error) {
        toast.error("Invalid email or password");
      }
    }
  };
  const showPass = () => {
    var inputElement = document.getElementById("pass");

    // Check the current type and change it accordingly
    if (inputElement.type === "text") {
      inputElement.type = "password";
    } else {
      inputElement.type = "text";
    }
  };

  return (
    <div className="auth">
      <div className="content">
        <img src="/assets/cselogo.jpeg" alt="logo" className="logo" />

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {type === "register" && (
            <div>
              <div>
                <div className="input">
                  <input
                    defaultValue=""
                    {...register("username", {
                      required: "Student ID  is required",
                      validate: (value) => {
                        if (value.length < 8) {
                          return "Student ID  must be at least 8 characters";
                        }
                      },
                    })}
                    type="text"
                    placeholder="write your class roll or id"
                    className="input-field"
                  />
                  <PersonOutline sx={{ color: "#737373" }} />
                </div>
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div>
                {/* Name  */}
                <div className="input mt-2">
                  <input
                    defaultValue=""
                    {...register("firstName", {
                      required: "Name is required",
                    })}
                    type="text"
                    placeholder="write your name "
                    className="input-field"
                  />
                  <PersonOutline sx={{ color: "#737373" }} />
                </div>
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="input mt-2">
              <label>Gender</label>

                <select {...register("gender")} className="p-2">
                  <option value="female">Female</option>
                  <option value="male" selected >Male</option>
                 
                </select>
              </div>

              <div className="input mt-2">
                <label>T-shir Size</label>
                {
                  <select
                    onChange={onOptionChangeHandler}
                    {...register("tShirtSize", {
                      required: "T-Shirt Size is required",
                    })}
                  >
                    <option> Select one </option>
                    {options.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                }
              </div>

              <div className="input mt-2">
                <label>CSE Batch</label>
                <select
                 onChange={onOptionChangeHandler}
                  {...register("cseBatch", {
                    required: "CSE Batch is required ",
                  })}
                  >
                    {batches.map((option,index)=>{
                      return  <option key={index} value={option}>  {option}  </option>                       
                    _})}
                </select>
              </div>
              <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("mobile", { required: "Mobile is required" })}
                type="text"
                placeholder="Mobile Number "
                className="input-field"
              />
              <PhoneEnabledIcon sx={{ color: "#737373" }} />
            </div>
            {errors.mobile && (
              <p className="text-red-500">{errors.mobile.message}</p>
            )}
          </div>
            </div>
          )}
          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "#737373" }} />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <div className="input">
              <input
                id="pass"
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (
                      value.length < 5 ||
                      !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                    ) {
                      return "Password must be at least 5 characters and contain at least one special character";
                    }
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />

              <VisibilityIcon onClick={showPass} sx={{ color: "#737373" }} />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="button" type="submit">
            {type === "register" ? "Join Free" : "Let's Chat"}
          </button>
        </form>

        {type === "register" ? (
          <Link href="/" className="link">
            <p className="text-center">Already have an account? Sign In Here</p>
          </Link>
        ) : (
          <Link href="/register" className="link">
            <p className="text-center">Don't have an account? Register Here</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;
