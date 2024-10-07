import { useCallback, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { IUser, UsersService } from '../../services/api/Users/UsersService'
import { ErrorException } from '../../services/api/ErrorException'

export const EditPage = () => {
    const { id } = useParams()
    const [email, setEmail] = useState('') // essa string vazia é o que vem renderizado por princípio
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
      if (id) {
        UsersService.getById(id).then((result) => { 
          if (result instanceof ErrorException) {
            alert(result.message)
          } else {
            setUser(result)
            setName(result.name)
            setEmail(result.email)
          }
        });
      }
    }, [id])

    const handleEnviar = useCallback(() => {
      if (!email || !password || !name) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    UsersService.updateById(id, { name, email, password })
        .then(result => {
            if (result instanceof ErrorException) {
                alert(result.message);
            } else {
                alert('Usuário criado com sucesso!');
            }
        })
    }, [email, password, name])

    return (
        <div className="form-container">
        <h1>Alterar informações de conta</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName1" className="form-label">Nome do usuário</label>
            <input type="text" className="form-control" id="exampleInputUserName1" aria-describedby="emailHelp" value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="div-button">
            <button type="button" onClick={handleEnviar} className="btn btn-dark">Atualizar</button>
          </div>
        </form>
      </div>
    )
}