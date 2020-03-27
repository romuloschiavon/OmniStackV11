import React, { useState, useEffect } from 'react';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import logoImg from '../../assets/logo.png'

export default function Incident() {
    const navigation = useNavigation();
    const [ incidents, setIncidents ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    };

    async function loadIncidents(){
        if (loading){
            return
        }

        if (total > 0 && incidents.length === total) {
            return
        }

        setLoading(true);

        const response = await api.get('/incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false)
    };

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>{total} incidents</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose and be the hero of one the incidents. Let's save the day!</Text>
        
            <FlatList style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                ondEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Non-Profit:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        
                        <Text style={styles.incidentProperty}>Incident:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Value:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
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