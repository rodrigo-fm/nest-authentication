export default interface IUserRepository {
    search(): Promise<any>;
    getAll(): Promise<any>;
    findById(id: number): Promise<any>;
}