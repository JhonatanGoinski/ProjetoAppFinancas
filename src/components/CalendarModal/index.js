import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import {
    Container,
    ButtonFilterText,
    ModalContent,
    BunttonFilter
} from "./styles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "./localeCalendar";

LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR';

export default function CalendarModal({ setVisible, handleFilter }) {

    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {
        setDateNow(new Date(date.dateString));

        let markeDay = {};

        markeDay[date.dateString] = {
            selected: true,
            selectedColor: '#3d3dbf',
            textColor: '#FFF'
        }

        setMarkedDates(markeDay);
    }

    function handleFilterDate() {
        handleFilter(dateNow);
        setVisible();
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff'
                    }}
                />


                <BunttonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </BunttonFilter>
            </ModalContent>
        </Container>
    );
}