import React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";
const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#FFF',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#3b3bdf',
                drawerActiveTintColor: '#FFF',
                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerItemStyle: { marginBottom: 10 }, // exemplo de espaçamento na parte inferior do cabeçalho
                }}
            />
            <AppDrawer.Screen
                name="Registrar"
                component={New}
                options={{
                    drawerItemStyle: { marginBottom: 10 }, // exemplo de espaçamento na parte inferior do cabeçalho
                }}
            />
            <AppDrawer.Screen
                name="Conta"
                component={Profile}
                options={{
                    drawerItemStyle: { marginBottom: 10 }, // exemplo de espaçamento na parte inferior do cabeçalho
                }}
            />
        </AppDrawer.Navigator>
    );
}
export default AppRoutes; 