import "./App.css";
import Header from "./components/Header/Header";
import CardTable from "./components/Card Table/CardTable";

function App() {
  return (
    <div className="App">
      {/* heder component */}
      <Header></Header>
      {/* main board here, in this component all card and your selected card will be shown.  */}
      <CardTable></CardTable>
    </div>
  );
}

export default App;
