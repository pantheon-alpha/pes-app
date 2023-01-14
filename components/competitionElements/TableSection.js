import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import CompTable from '../../data/CompTable'

import Table from '../../components/competitionElements/Table'

export default function TableSection() {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headSubText}>Season</Text>
            <Text style={styles.headText}>2023</Text>
        </View>
        <View style={styles.tableHeader}>
            <Text id='Team' style={styles.tableHeaderClub}>Club</Text>
            <Text style={styles.tableHeaderText}>P</Text>
            <Text style={styles.tableHeaderText}>W</Text>
            <Text style={styles.tableHeaderText}>D</Text>
            <Text style={styles.tableHeaderText}>L</Text>
            <Text style={styles.tableHeaderText}>GD</Text>
            <Text style={styles.tableHeaderText}>Pts</Text>
        </View>

        <FlatList
            data={CompTable}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Table
                    id={item.id}
                    club={item.club}
                    played={item.played}
                    won={item.won}
                    drawn={item.drawn}
                    lost={item.lost}
                    goalsFor={item.goalsFor}
                    goalsAgainst={item.goalsAgainst}
                    goalDifference={item.goalDifference}
                    points={item.points}
                    position={item.position}
                />
                
            )}
        />


        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#282828',
        //alignItems: 'center',
    },
    headerContainer: {
        //flex: 1,
        height: 50,
        backgroundColor: '#161616',
        flexDirection: 'column',
        //alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 35,
        //border: 2px solid #F4F2E0;
    },
    headText: {
        fontSize: 12,
        color: '#F4F2E0',
        //marginTop: 15,
        //lineHeight: 30,
    },
    headSubText: {
        fontSize: 6,
        color: '#818181',
        //marginTop: 15,
        //lineHeight: 30,
    },

    tableHeader: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 30,
        //backgroundColor: '#161616',
        paddingHorizontal: 35,
        //border: 2px solid #F4F2E0;

    },

    tableHeaderClub: {
        flex: 6,
        fontSize: 12,
        color: '#808080',
        //marginTop: 15,
        //lineHeight: 30,
    },

    tableHeaderText: {
        flex: 1,
        fontSize: 12,
        color: '#808080',
        
        //marginTop: 15,
        //lineHeight: 30,
    },
})