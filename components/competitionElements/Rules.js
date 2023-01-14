import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import RulesData from '../../data/RulesData'

export default function Rules() {
  return (
    <View style={styles.container}>
        <FlatList
            data={RulesData}
            renderItem={({item}) =>
            <View style={styles.ruleCard}>
                <Text style={styles.text}>{item.id}. {item.rule}</Text>
            </View>
            }
            keyExtractor={item => item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#282828',
        paddingHorizontal: 35,
        paddingVertical: 20,
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#F4F2E0',
        lineHeight: 20,
    },
    ruleCard: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#282828',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },

})