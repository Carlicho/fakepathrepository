import './App.css';
import Presentacionpjt from './componentes/Presentacionpjt'


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Fake path Crusade</h1>
      </div>
<Presentacionpjt
      nombre='Raiferick'
      origen='Gautas'
      cargo='Guerrero'
      descripcion='Leal a su familia y amigos, es capaz de luchar hasta la muerte, e incluso despues de ella, hay quienes dicen que murio en batalla varias veces pero su espiruto estaba tan arraigado a este mundo y a luchar por sus seres queridos, que su cuerpo sano heridas insanables como ser una flecha en el pulmon'
      imagen='raiferick'
      
      /> 
<Presentacionpjt
      nombre='Raack'
      origen='Varegos '
      cargo='Mago'
      descripcion='Lleno de un espirtu que busca sabiduria constante, encontro en el estudio de la ciencia del tiempo trucos o hechizos para manipularlo, nadie conoce su verdadera edad, se rumorea que lleva mas de 3 siglos en estas tierras'
      imagen='Raack3'
      
      /> 
<Presentacionpjt
      nombre='Dimmz'
      origen='Paladin'
      cargo='Ex guardia de la realeza'
      descripcion='Con completa disciplina, desde joven emprendio el camino hasta llegar a ser guardia de la realiza, pero debido a una invacion que nadie supo bien cuando empezo, ni como lograron infiltrarse, tuvo que uir de su tierra originaria, con la promesa de lograr reunir el poder necesario para revertir los hechos que sucedieron en su tierra natal'
      imagen='dimmz'
      
      /> 

<Presentacionpjt
      nombre='Kyrie'
      origen='Asesino'
      cargo='Asesino a sueldo, infiltrado'
      descripcion=' por mucho tiempo fue conocido como "Sin nombre", cuando nadie sabia nisiquiera si era hombre o mujer ,este personaje fue capaz de infiltrarse en multiples grupos y adaptarse tan bien, que nadie sospechava que solo era una espia, o asesino a sueldo. Una persona de su tierra, logro identificar un razgo unico y muy fuerte en todas sus "personalidades", y este era el de ser alguien que poseia un humor negro, asido, y hasta agresivo. De lo demas, nadie sabe de que bando esta o sus intenciones   '
      imagen='kyrie3'
      
      />
    
    </div>
  );
}

export default App;
