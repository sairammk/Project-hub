import logo from './logo.svg';
import './App.css';
import Topnavbar from './components/Topnavbar';
import NewProject from './components/NewProject';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <>
      <Topnavbar />
      <ProjectList />
      <NewProject />
    </>
  );
}

export default App;
