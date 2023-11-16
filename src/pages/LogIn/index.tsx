import { ContainerForm, ContainerLogin, InputForm } from "./styles";

export function Login() {
    return(
        <ContainerLogin>
            <ContainerForm>
                <h1>Back to your digital life</h1>
                <p>Choose one of the option to go</p>

                <InputForm placeholder="rosch.arthur@gmail.com"/>
                <InputForm  placeholder="password"/>
            </ContainerForm>
        </ContainerLogin>
    )
}