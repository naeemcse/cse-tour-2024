import Form from "@components/Form";
import Navbar from "@components/Navbar";
import Hero from "./../../components/Hero";
import Footer from "@components/Footer";
import DailySchedule from "@components/DaySchedule";
import Schedule from "@components/Schedule";


const Login = () => {
  return (
    <>
      {/* <button className="btn btn-primary">Hello daisyUI!</button> */}
      {/* <Navbar/> */}
      <Hero />
      {/* <DailySchedule /> */}
      <Schedule/>
      <Footer />
    </>
  );
};

export default Login;
