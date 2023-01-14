import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import City from '../../assets/images/teams/man-city'

export default function Table(props) {
  

    return (
    <View style={styles.tableCard}>
        <Text style={styles.tableCardText}>{props.position}</Text>
        <View style={styles.tableCardClub}>
            <City style={styles.tableCardClubLogo} height={15} width={15}/>
            <Text style={styles.tableCardClubText}>{props.club}</Text>
        </View>
        <Text style={styles.tableCardText}>{props.played}</Text>
        <Text style={styles.tableCardText}>{props.won}</Text>
        <Text style={styles.tableCardText}>{props.drawn}</Text>
        <Text style={styles.tableCardText}>{props.lost}</Text>
        <Text style={styles.tableCardText}>{props.goalDifference}</Text>
        <Text style={styles.tableCardText}>{props.points}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    tableCard: {
        backgroundColor: '#161616',
        flex: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 40,
        //border: 2px solid #F4F2E0;
        borderColor: '#282828',
        borderBottomWidth: 1,

    },

    tableCardOne: {
        backgroundColor: '#F4F2E0',
        flex: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 40,
        //border: 2px solid #F4F2E0;
        borderColor: '#282828',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#F4F2E0',
    },

    tableCardClub: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        //borderColor: '#282828',
        //borderWidth: 1,
        padding: 5,
        //marginTop: 15,
        //lineHeight: 30,
    },

    tableCardClubLogo: {
        flex: 1,
        marginRight: 10,
        //fontSize: 12,
        //color: '#F4F2E0',
        //textAlign: 'left',
        //marginTop: 15,
        //lineHeight: 30,
    },

    tableCardClubText: {
        flex: 2,
        fontSize: 12,
        color: '#F4F2E0',
        textAlign: 'left',
        //marginTop: 15,
        //lineHeight: 30,
    },

    tableCardText: {
        flex: 1,
        fontSize: 12,
        color: '#F4F2E0',
        textAlign: 'center',
        //marginTop: 15,
        //lineHeight: 30,
    },
})