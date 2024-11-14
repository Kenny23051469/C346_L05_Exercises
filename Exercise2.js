import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList} from 'react-native';

const datasource = [
    {
        data: [
            { key: 'a' },
            { key: 'e' },
            { key: 'i' },
            { key: 'o' },
            { key: 'u' },
        ],
        title: "Vowels",
        color: "skyblue"
    },
    {
        data: [
            { key: 'b' },
            { key: 'c' },
            { key: 'd' },
            { key: 'f' },
            { key: 'g' },
            { key: 'h' },
            { key: 'j' },
            { key: 'k' },
            { key: 'l' },
            { key: 'm' },
            { key: 'n' },
            { key: 'p' },
            { key: 'q' },
            { key: 'r' },
            { key: 's' },
            { key: 't' },
            { key: 'v' },
            { key: 'w' },
            { key: 'x' },
            { key: 'y' },
            { key: 'z' },
        ],
        title: "Consonants",
        color: "khaki"
    }
];


const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    )
}

export default function App() {
    return (
        <View style={{marginTop: 20}}>
            <SectionList contentContainerStyle={{padding: 10}} sections = {datasource} renderItem={renderItem}
                         renderSectionHeader={({section }) =>(
                             <Text style={[styles.headerText, { backgroundColor: section.color }]}>{section.title}</Text>
                         )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,

        textAlign: 'left',
    }
});
