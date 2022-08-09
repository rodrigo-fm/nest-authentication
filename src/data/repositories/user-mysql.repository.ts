import IUserRepository from "src/domain/repositories/user-interface.repository";

export default class UserMySQLRepository implements IUserRepository {
    static className: string = 'UserMySQLRepository'

    async search(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}