import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'

export default function Detailt() {
    const navigation = useNavigation();

    function navigateToIncidents() {
        navigation.navigate('Incidents');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity style={styles.back} onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>Non-Profit:</Text>
                <Text style={styles.incidentValue}>APAE</Text>
                
                <Text style={styles.incidentProperty}>Incident:</Text>
                <Text style={styles.incidentValue}>Kill biroliro</Text>

                <Text style={styles.incidentProperty}>Value:</Text>
                <Text style={styles.incidentValue}>Free</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the hero of this incident.</Text>

                <Text style={styles.heroDescription}>Contact them!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onpress={() => {}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onpress={() => {}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

import styles from './styles'