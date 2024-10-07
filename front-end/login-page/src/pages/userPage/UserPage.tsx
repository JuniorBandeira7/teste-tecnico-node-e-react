import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IUser, UsersService } from '../../services/api/Users/UsersService'
import { ErrorException } from '../../services/api/ErrorException'

export const UserPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    if (id) {
      UsersService.getById(id).then((result) => { 
        if (result instanceof ErrorException) {
          alert(result.message)
        } else {
          setUser(result)
        }
      });
    }
  }, [id])

  return (
    <div className="form-container">
      <h1>Nome do usuário</h1>
      <div className="user-information-container">
        {user ? (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <div className="div-button" style={{ marginTop: '50px' }}>
        <button type="button" className="btn btn-dark">Editar informações</button>
      </div>
    </div>
  );
};
