import { useCallback, useState } from "react";
import { IUser, UsersService } from '../../services/api/Users/UsersService';
import { ErrorException } from '../../services/api/ErrorException';
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()

    const handleEnviar = useCallback(() => {
        if (!email || !password || !name) {
            alert('Todos os campos são obrigatórios!');
            return;
        }

        UsersService.create({ name, email, password })
            .then(result => {
                if (result instanceof ErrorException) {
                    alert(result.message);
                } else {
                    alert('Usuário criado com sucesso!');
                    navigate(`/${result.userId}`)
                }
            })
    }, [email, password, name]);

    return (
        <div className="form-container">
            <h1>Criação de conta</h1>
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
                    <button type="button" onClick={handleEnviar} className="btn btn-dark">
                      Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};
