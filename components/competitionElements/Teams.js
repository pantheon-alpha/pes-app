import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import City from '../../assets/images/teams/man-city'
import Icon from 'react-native-vector-icons/AntDesign'

import TeamsData from '../../data/TeamsData'

export default function Teams() {
  return (
    <View style={styles.container}>
        <FlatList
            data={TeamsData}
            renderItem={({item}) =>
                <View style={styles.teamCard}>
                    <City width={20} height={20} />
                    <Text style={styles.text}>{item.team}</Text>
                    <Icon name="heart" size={15} color="#F4F2E0" style={{position: 'absolute', right: 10}} />
                </View>
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#161616',
        paddingHorizontal: 35,
        paddingVertical: 20,
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#F4F2E0',
        lineHeight: 20,
        paddingHorizontal: 10
    },
    teamCard: {
        width: '100%',
        height: 50,
        backgroundColor: '#161616',
        flexDirection: 'row',
        //marginBottom: 10,
        alignItems: 'center',
        borderBottomColor: '#282828',
        borderBottomWidth: 1,
        
    },

})