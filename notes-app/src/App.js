import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  return (
    <>
      <div className="container-style">
        <div className="row-style">
          <Header />
          <Filter />
          <Form />
          <NoteList />
        </div>
      </div>
    </>
  );
}

export default App;
