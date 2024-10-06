

export const UserPage = () => {
    return (
      <div className="form-container">
        <h1>Nome do usuário</h1>
        <div className="user-information-container">
          <p>Name: Name</p>
          <p>Email: Email</p>
        </div>
        <div className="div-button" style={{ marginTop: '50px' }}>
          <button type="button" className="btn btn-dark">Editar informações</button>
        </div>
      </div>
    );
  }