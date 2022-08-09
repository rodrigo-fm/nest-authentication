import { Provider } from "@nestjs/common";
import LoginUseCase from "src/api/usecases/login.usecase";

const useCaseProviders: Provider<any>[] = [
    {
        provide: LoginUseCase.className,
        useValue: LoginUseCase,
    },
];

export default useCaseProviders;