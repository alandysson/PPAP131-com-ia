
import './App.css'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header verde */}
      <header className="bg-green-700 w-full h-16"></header>

      {/* Formulário */}
      <div className="flex justify-center items-center flex-1">
        <div className="w-full p-6 px-96">
          <h1 className="text-xl font-bold mb-6">
            Cadastre o aluno
          </h1>
          <form className="space-y-4">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite o nome do aluno"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* CPF */}
            <div>
              <label htmlFor="cpf" className="block font-medium mb-1">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="Digite o CPF do aluno"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Nome da mãe */}
            <div>
              <label htmlFor="motherName" className="block font-medium mb-1">
                Nome da mãe:
              </label>
              <input
                type="text"
                id="motherName"
                placeholder="Digite o nome da mãe do aluno"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Curso */}
            <div>
              <label htmlFor="course" className="block font-medium mb-1">
                Curso:
              </label>
              <select
                id="course"
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option>Selecione o curso</option>
                <option>Curso 1</option>
                <option>Curso 2</option>
              </select>
            </div>

            {/* Estado */}
            <div>
              <label htmlFor="state" className="block font-medium mb-1">
                Estado:
              </label>
              <select
                id="state"
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option>Selecione o estado</option>
                <option>Estado 1</option>
                <option>Estado 2</option>
              </select>
            </div>

            {/* Cidade */}
            <div>
              <label htmlFor="city" className="block font-medium mb-1">
                Cidade:
              </label>
              <select
                id="city"
                className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option>Selecione a cidade</option>
                <option>Cidade 1</option>
                <option>Cidade 2</option>
              </select>
            </div>

            {/* Botões */}
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
