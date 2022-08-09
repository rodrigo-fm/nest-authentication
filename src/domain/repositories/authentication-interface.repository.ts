export interface CreateAccountRepositoryParams {
    name: string;
    email: string;
    password: string;
}

export default interface IAuthenticationRepository {
    login(email: string, password: string): Promise<void>;
    createAccount(params: CreateAccountRepositoryParams): Promise<void>;
}