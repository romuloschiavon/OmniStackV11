import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png'

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Hello ${incident.name}, I want to be the hero of your incident: ${incident.title}, in hopes of achieving your goal and save the day, also to collet the reward of ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;
    
    const navigateBack = () => {
        navigation.goBack();
    };

    const sendMail = () => {
        MailComposer.composeAsync({
            subject: `Hero of the incident: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message,
        })
    };

    const sendWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
                <Image source={logoImg}/>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Non-Profit:</Text>
                <Text style={styles.incidentValue}>{incident.name}, located @{incident.city}/{incident.uf}</Text>
                
                <Text style={styles.incidentProperty}>Incident:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Value:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the hero of this incident.</Text>

                <Text style={styles.heroDescription}>Contact them!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

import styles from './styles'