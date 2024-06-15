import './App.css';
import useWindowSize from './hooks/useWindowSize'; 
import DisplaySize from './components/DisplaySize';
import PersonByWindowSize from './components/PersonByWindowSize';

const App = () => {
  const { width, height } = useWindowSize();

  return (
      <div className="container">
          <DisplaySize width={width} height={height} />
          <PersonByWindowSize />
          <p>
              Resizing your window changes the names and sizes of three different avatars based on whether your window is big, medium, or small. Currently, the avatars are not displaying.
          </p>
      </div>
  );
};

export default App;
