import './App.css';
import Description  from './Description.js';

const Mensaje = (props) =>{
  return <h1 style={{color: props.color}}>
    {props.message}
  </h1>
}


function App()  {
  return (
    <div className="App">
     <Mensaje color='blue' message='LINSI'></Mensaje>
     <Mensaje color='red' message='Laboratorio de Innovaciones en Sistemas de Información'></Mensaje>
     <Mensaje message='DISI'></Mensaje>
     <Mensaje color='green'message='Departamento de Ingeniería en Sistemas de Información'></Mensaje>
     <Description color='gray' descripcion='Developed by Sebastián'></Description>
    </div>
  );
}

export default App;
