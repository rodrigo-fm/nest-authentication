// add params interface
export interface CreateAccountParams {
    name: string;
    email: string;
    passsword: string;
}

// add return interface

export default interface ICreateAccountUseCase {
    handle(params: CreateAccountParams): Promise<void>;
}