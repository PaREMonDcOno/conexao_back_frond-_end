import { useEffect,useState } from "react";
import axios from "axios";
import { use } from "react";


function App() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  const [editando, setEditando] = useState(false);
  const [idAtual, setIdAtual] = useState(null);
  async function salvar(e) {
    e.preventDefault();
    const aluno = [nome, email, curso];
    if (editando) {
      await axios.put(` https://bug-free-space-umbrella-97xwv94vvgq427rx9-3001.app.github.dev/alunos/${idAtual}`, aluno);
      setEditando(false);
      setIdAtual(null);
    } else {
      await axios.post(`https://bug-free-space-umbrella-97xwv94vvgq427rx9-3001.app.github.dev/alunos`, aluno);
      //limparFormulario();
      //BuscarAlunos();

    }
  }
  return(
    <div style={{padding:20}}>
        <h1>Crud de Alunos</h1>

        <form onSubmit={salvar}>
          <input 
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(texto) => setNome(texto.target.value)} 
           />
           <br />
              <input 
          type="email"
          placeholder="email  "
          value={email}
          onChange={(texto) => setEmail(texto.target.value)} 
           />
             <br />
              <input 
          type="text"
          placeholder="curso"
          value={curso}
          onChange={(texto) => setCurso(texto.target.value)} 
           />
           <button type="submit">
            {editando ? "Atualizar" : "Cadastrar"}
           </button>
           
          
        </form>
    </div>
  )
}
export default App;