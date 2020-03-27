import React from 'react';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png'

export default function Incident() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>0 incidents</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose and be the hero of one the incidents. Let's save the day!</Text>
        
            <FlatList style={styles.incidentList}
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Non-Profit:</Text>
                        <Text style={styles.incidentValue}>APAE</Text>
                        
                        <Text style={styles.incidentProperty}>Incident:</Text>
                        <Text style={styles.incidentValue}>Kill biroliro</Text>

                        <Text style={styles.incidentProperty}>Value:</Text>
                        <Text style={styles.incidentValue}>Free</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                            <Text style={styles.detailsButtonText}>Incident's details</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
};

import styles from './styles';