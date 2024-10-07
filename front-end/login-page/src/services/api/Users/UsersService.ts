import { Api } from "../ApiConfig"
import { ErrorException } from "../ErrorException"

export interface IUser {
    id: any
    name: string
    email: string
    password: string
}

const getById = async (id: any): Promise<IUser | ErrorException> => {
    try{
        const { data } = await Api().get(`/${id}`)
        return  data
    } catch(error: any){
        return new ErrorException(error.message || "Erro ao buscar usuário")
    } 
}

const create = async (dataToCreate: Omit<IUser, 'id'>): Promise<IUser | ErrorException> => {
    try{
        const { data } = await Api().post('/register', dataToCreate)
        return  data
    } catch(error: any){
        return new ErrorException(error.message || "Erro ao criar usuário")
    } 
}

const login = async (dataToCreate: Omit<IUser, 'id' | 'name'>): Promise<IUser | ErrorException> => {
    try{
        const { data } = await Api().post('/login', dataToCreate)
        return  data
    } catch(error: any){
        return new ErrorException(error.message || "Erro ao logar")
    } 
}

const updateById = async (id: any, dataToUpdate: Omit<IUser, 'id'>): Promise<IUser | ErrorException> => {
    try{
        const { data } = await Api().patch(`/edit/${id}`, dataToUpdate)
        return  data
    } catch(error: any){
        return new ErrorException(error.message || "Erro ao atualizar usuário")
    } 
}

export const UsersService = {
    getById,
    create,
    updateById,
    login
}