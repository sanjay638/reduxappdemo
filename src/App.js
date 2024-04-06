import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";

function App() {
  return (
    <Provider store={store}>
      <Cart></Cart>
    </Provider>
  );
}

export default App;
