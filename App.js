import React from 'react';
import {View, Text, SectionList, TouchableOpacity, Image, StyleSheet, FlatList} from "react-native";

const PokemonData = [
  {
    element: "Grass",
    color: "green",
    data: [
      { name: "Bulbasaur", cardnumber: "1"},
      { name: "Ivysaur", cardnumber: "2"},
      { name: "Venusaur", cardnumber: "3"},
    ],
  },

  {
    element: "Psychic",
    color: "pink",
    data: [
      { name: "Mewtwo", cardnumber: "150"},
      { name: "Mew", cardnumber: "151"},
      { name: "Clefairy", cardnumber: "35"},
    ],
  },

  {
    element: "Water",
    color: "skyblue",
    data: [
      { name: "Articuno", cardnumber: "144"},
    ],
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image
        source={{ uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardnumber}-2x.png`}}
        style={styles.cardImage}/>
      </TouchableOpacity>
  )
};

export default function App() {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Pokemon</Text>
        </TouchableOpacity>

        <SectionList contentContainerStyle={{ padding: 10 }} sections={PokemonData} renderItem={renderItem}
                     renderSectionHeader={({ section }) => (
                         <Text style={[styles.headerText, { backgroundColor: section.color}]}>{section.element}</Text>
                     )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  headerText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  opacityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 5,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    color: '#333',
    fontWeight: 'bold',
  },
  cardImage: {
    width: 200,
    height: 220,
    marginLeft: 10,
    resizeMode: "contain"
  },
});
