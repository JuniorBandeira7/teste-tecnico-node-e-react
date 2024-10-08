import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IUser, UsersService } from '../../services/api/Users/UsersService'
import { ErrorException } from '../../services/api/ErrorException'
import { useNavigate } from 'react-router-dom'

export const UserPage = () => {
  const { id } = useParams()
  const [user, setUser] = useState<IUser | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      UsersService.checkUser().then((result) => {
        if (result._id == id){// Verifica se o id retornado pela função checkUser é o mesmo passado na url
          UsersService.getById(id).then((result) => { 
            if (result instanceof ErrorException) {
              alert(result.message)
            } else {
              setUser(result)
            }
          });
        }else {
          navigate("/")
        }
      })
      
    }
  }, [id])

  const handleEditar = useCallback(() =>{
    navigate(`/editar/${id}`)
  }, [id, navigate])
  
  

  return (
    <div className="form-container">
      <h1>{user?.name}</h1>
      <div className="user-information-container">
        {user ? (
          <>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <div className="div-button" style={{ marginTop: '50px' }}>
        <button type="button" className="btn btn-dark" onClick={handleEditar}>Editar informações</button>
      </div>
    </div>
  )
}
