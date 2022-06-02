import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Accueuil</Text>;

const CompteRoute = () => <Text>Compte</Text>;

const StatistiqueRoute = () => <Text>Statistique</Text>;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', icon: 'home' },
        { key: 'compte', title: 'Compte', icon: 'bank' },
        { key: 'statistique', title: 'Statistique', icon: 'chart-line' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        compte: CompteRoute,
        statistique: StatistiqueRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;