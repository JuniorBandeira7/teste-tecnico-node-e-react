import { useCallback, useState } from "react"

export const EditPage = () => {
    const [email, setEmail] = useState('') // essa string vazia é o que vem renderizado por princípio
    const [password, setPassword] = useState('')

    const handleEntrar = useCallback(() => {
            console.log(email)
            console.log(password)
        },
        [email, password]
    )
    return (
        <div className="form-container">
        <h1>Alterar informações de conta</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName1" className="form-label">Nome do usuário</label>
            <input type="text" className="form-control" id="exampleInputUserName1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="div-button">
            <button type="button" onClick={handleEntrar} className="btn btn-dark">Atualizar</button>
          </div>
        </form>
      </div>
    )
}