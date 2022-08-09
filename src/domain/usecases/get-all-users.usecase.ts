export default interface IGetAllUsersUseCase {
    handle(): Promise<string>;
}