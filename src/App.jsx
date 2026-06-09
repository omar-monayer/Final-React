import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function Home() {
  return <h1>Home Page</h1>;
}

function Companies() {
  return <h1>Companies Page</h1>;
}

function Leads() {
  return <h1>Leads Page</h1>;
}

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function App() {
  return (
    <>
      <Sidebar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;