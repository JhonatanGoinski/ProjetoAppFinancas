import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";

//importando estilos do SignIn
import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
    AreaInputHeader,
    TituloHeader

} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        if (nome === '' || email === '' || password === '') {
            return alert('Por favor! Preecha todos os campos.')
        };

        signUp(email, password, nome);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
                {/* <AreaInputHeader>
                    <TituloHeader>Sucesso Financeiro</TituloHeader>
                </AreaInputHeader> */}

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    );
}