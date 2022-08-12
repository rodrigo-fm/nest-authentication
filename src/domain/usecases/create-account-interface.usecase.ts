// add params interface
export interface CreateAccountParams {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// add return interface

export default interface ICreateAccountUseCase {
    handle(params: CreateAccountParams): Promise<string>;
}