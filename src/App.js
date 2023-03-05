import NavigationBar from "./component/NavigationBar";
import Card from "./component/Card";
import "./App.css";
import { MainCard } from "./component/MainCard";

function App() {
  return (
    <>
      <NavigationBar />
      <section className="mainbody">
        <MainCard />
      </section>
    </>
  );
}

export default App;
