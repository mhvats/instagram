import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Body } from "./component/Body";
import { Profile } from "./component/Profile";
import "./App.css";
export const App = () => {
  return (
    <div className="container">
      <Header />
      <Profile username="_.prachiiii._17" />
      <Body username="_.prachiiii._17" />
      <Footer />
    </div>
  );
};
  