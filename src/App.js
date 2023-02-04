import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="bg-slate-300 h-screen w-screen flex justify-center items-center flex-col">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
