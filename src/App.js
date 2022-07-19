
import ProjectScreen from "./screens/project/Index.tsx"
import {Route,Routes} from "react-router-dom"
import Character from "./screens/character/Index.tsx"
import Love from "./screens/love/Index.tsx"
import Money from "./screens/money/Index.tsx"
import ProjectList from "./screens/character/projectList/index.tsx"
import Questions from "./components/Questions.tsx"
function App() {
  return (
    <Routes>
        <Route path="/" element={<ProjectScreen/>}/>
        <Route path="/character" element={<Character/>}/>
        <Route path="/love" element={<Love/>}/>
        <Route path="/money" element={<Money/>}/>
        <Route path="/:params/:project" element={<ProjectList/>}>
          <Route path="/:params/:project/:index" element={<Questions/>}/>
        </Route>
    </Routes>
  );
}

export default App;
