import "./App.css";
import FormSubscription from "./components/FormSubscription";
import emailSvg from "./images/email.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="leftSection">
          <FormSubscription />
        </div>
        <div className="rightSection">
          <img src={emailSvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
