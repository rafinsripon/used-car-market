import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/BigSpinner/SmallSpinner";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const select = form.select.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,select, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        saveduser(name, select, email)
        navigate(from, {replace: true})
        toast.success("User Create Success");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  //saved User form database
  const saveduser = (name, select, email) => {
    const user = {name, select, email}
    fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
  }
  
  //sign with goole
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user;
      toast.success('User Signin Success Fully');
      navigate(from, {replace: true})
      console.log(user);
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <select name="select" className="select select-bordered w-full">
                <option>Buyer</option>
                <option>Saller</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md hover:bg-gray-700 hover:text-gray-100"
              >
                {loading ? <SmallSpinner /> : "Sign Up"}
              </PrimaryButton>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-lg dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Log in with Google"
            className="rounded-sm py-2 border-2 border-secondary flex items-center gap-4 w-full justify-center font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            Sign With Google
          </button>
        </div>
        <p className="px-6 text-center text-gray-400 font-bold text-lg mt-3">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
