import React, { useState } from "react";
import { RegisterContainer, RegisterTypeButton, Registerlabel } from "./styles";
import Feather from 'react-native-vector-icons/Feather'

export default function RegisterTypes({ type, sendTypeChanged }) {

    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name) {
        if (name === 'receita') {
            setTypeChecked('receita');
            sendTypeChanged('receita');
        } else {
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    }

    return (
        <RegisterContainer>

            <RegisterTypeButton
                checked={typeChecked === 'receita' ? true : false}
                onPress={() => changeType('receita')}
            >

                <Feather name="arrow-up" size={25} color="#121212" />
                <Registerlabel>
                    Receita
                </Registerlabel>

            </RegisterTypeButton>

            <RegisterTypeButton
                checked={typeChecked === 'despesa' ? true : false}
                onPress={() => changeType('despesa')}
            >
                <Feather name="arrow-down" size={25} color="#121212" />
                <Registerlabel>
                    Despesa
                </Registerlabel>

            </RegisterTypeButton>

        </RegisterContainer>
    );
}