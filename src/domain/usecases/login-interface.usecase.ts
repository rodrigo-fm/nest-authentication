// add params interface

// add return interface

export default interface ILoginUseCase {
    handle(email: string, password: string): Promise<string>;
}