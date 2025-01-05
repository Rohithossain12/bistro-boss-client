import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../provider/AuthProvider";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("user login successful");
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("user login unsuccessful");
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value) == true) {
      toast.success("Captcha Matched");
      setDisabled(false);
    } else {
      toast.error("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  return (
    <div className="flex md:flex-row flex-col justify-center items-center">
      <Helmet>
        <title>Bistro Boss | Login </title>
      </Helmet>
      <div className="flex-1">
        <img
          className="w-full h-full "
          src="https://img.freepik.com/premium-vector/boys-are-signed-account_118167-6055.jpg?semt=ais_hybrid"
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 shadow-2xl ">
          <h2 className="text-center font-bold text-2xl">Please Login</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered"
                required
              />
              <p
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="ml-5">
            <small>
              New Here ?
              <Link to="/register" className="text-green-500">
                Create an Account
              </Link>{" "}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
