import { useCallback, useState } from "react"
import { IUser, UsersService } from '../../services/api/Users/UsersService'
import { ErrorException } from '../../services/api/ErrorException'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('') // essa string vazia é o que vem renderizado por princípio
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = useCallback(() => {
        if (!email || !password) {
            alert('Todos os campos são obrigatórios!')
            return
        }

        const user: Omit<IUser, 'id' | 'name'> = {
          email,
          password
        }

        UsersService.login(user)
          .then(result => {
              if (result instanceof ErrorException) {
                  alert(result.message);
              } else {
                navigate(`/${result.userId}`)
              }
          })
    }, [email, password])

    const handleCadastro = useCallback(() =>{
      navigate(`/cadastro`)
    }, [])

    return (
        <div className="form-container">
        <h1>Entrar na conta</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="div-button">
            <button type="button" onClick={handleLogin} className="btn btn-dark">Entrar</button>
          </div>
          <div className="div-button" style={{ marginTop: '10px'}}>
            <button type="button" onClick={handleCadastro} className="btn btn-dark">Criar conta</button>
          </div>
        </form>
      </div>
    )
}