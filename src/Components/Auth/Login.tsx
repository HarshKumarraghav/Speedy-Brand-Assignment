import { useNavigate } from "react-router-dom";

const Login = () => {
  const Router = useNavigate();
  return (
    <section className="w-screen h-screen flex justify-center items-center backgroundImage">
      <main className="w-4/5 h-3/5 lg:h-3/4 md:w-2/3 lg:w-1/3 flex justify-center items-center flex-col  backgroundprop">
        <div className="flex gap-x-4 text-2xl text-primary items-center font-bold bg-white px-4 py-2 rounded-md mb-8">
          <img src="/Images/speedy.svg" alt="companylogo" />
          <h1>Speedy</h1>
        </div>
        <h1 className="text-2xl font-semibold text-center text-white">
          Dummy Login Page!
        </h1>

        <h2 className="text-xl font-medium text-center text-white mb-10">
          please just click the login button.
        </h2>
        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={() => {
            Router("/dashboard");
          }}
        >
          <div className="flex flex-col justify-between items-center w-full gap-y-7">
            <div className="flex flex-col w-full items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-4/5 h-12 px-5 rounded-lg shadow-md outline-primary text-gray-600"
              />
            </div>
            <div className="flex flex-col w-full items-center">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-4/5 h-12 px-5 rounded-lg shadow-md outline-primary text-gray-600"
              />
            </div>

            <button
              type="submit"
              className={`w-4/5 h-12 mb-5 rounded-lg shadow-light-shadow outline-none bg-primary shadow-md text-white font-bold `}
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Login;
