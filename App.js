import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [newGenre, setNewGenre] = useState(""); 
  const genreArray = [
    "Electronic",
    "House",
    "Jazz",
    "Rock",
    "Disco",
    "Pop",
    "Metal",
    "Classical",
    "Rap",
    "Rock",
    "Hip-hop",
  ];
  // array storing names of 'umbrella' music genres 

  const modifierArray = [
    "Psychadelic",
    "Italo",
    "Heavy",
    "Pirate",
    "Robot",
    "Egyptian",
    "Euro",
    "Industrial",
    "Halloween",
    "Dance",
    "Power",
    "Space",
    "Cowboy",
    "Medieval",
    "Deep",
    "Progressive",
  ];
  // array that stores music subgenre terms 

  const [modalVisible, setModalVisable] = useState(false); 

  const imageSelect = useState(null); 

  const [buttonsPressed, setButtonPressed] = useState(0);
  // buttonsPressed allows storage of the number of buttons a user has pressed to prevent them pressing too many at once

  const [tempGenre, setTempGenre] = useState("");
  // tempGenre stores the concatenated string of text selected when using the touchable opacity genre images

  const randomGenre = () => {};

  const emptyGenerate = () =>
    modifierArray[Math.floor(Math.random() * modifierArray.length)] +
    " " +
    genreArray[Math.floor(Math.random() * genreArray.length)];
  // selects a random item within the modifier array and genre array and concatenates them

  return (
    <SafeAreaView style={styles.container}>
      <>
      <View style={styles.topBar}>
        <Image 
        source={require("./assets/logo.png")}
        style={styles.logo}
        >
        </Image>
        <TouchableOpacity
          style={ styles.helpBtn }
          onPress={() => setModalVisable(true)}
          // displays the 'help' modal's contents upon press
        >
          <Text style={ styles.buttonText }>Help</Text>
        </TouchableOpacity>
      </View>
        <Modal visible={modalVisible} animationType={"slide"}>
          <View style={styles.helpModal}>
            <Text
              style={ styles.helpModalText }
            >
              Create a custom genre by pressing 'Generate' or by selecting up to 5 images and then pressing 'Generate'! 
              {"\n"}{"\n"}Have fun and experiment!
              {"\n"}{"\n"}
              Images credits: {"\n"}{"\n"}
              Alex Andrews{"\n"}
              Binyamin Mellish{"\n"}
              Brett Sayles{"\n"}
              Briana Amick{"\n"}
              Clem Ono Jeghuo{"\n"}
              Eleazar Ceballos{"\n"}
              Jeremy Bishop{"\n"}
              Jerome Govender{"\n"}
              Koolshooters{"\n"}
              Lorenzo Pacifico{"\n"}
              Monstera{"\n"}
              Pavel Danilyuk{"\n"}
              Pixabay{"\n"}
              Sharon McCutcheon{"\n"}
              U{"\n"}
              Victor Freitas{"\n"}
              Wendy Wei{"\n"}
              Wilson Vitorino{"\n"}
              {"\n"}
              Sourced courtesy of Pexels
            </Text>
            <TouchableOpacity
              style={ styles.helpCloseBtn }
              onPress={() => setModalVisable(false)}
              // closes 'help' modal
            >
              <Text style={ styles.buttonText }>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </>
      <Text
        style={ styles.newGenreText }
      >
        {newGenre}
      </Text>
      <TouchableOpacity
      // new genre generate button
        style={ styles.newGenreBtn }
        onPress={() => {
          if (tempGenre === "") {
            setNewGenre(emptyGenerate());
            // generates a randomised genre from the 'genre' and 'modifier' arrays
          } else setNewGenre(tempGenre);
          setButtonPressed(0); // sets the buttonPressed state to 0, preventing the 'too many buttons pressed' state / alert from triggering erroneously 
          setTempGenre(""); // empties the tempGenre variable
        }}
      >
        <Text style={ styles.generateButtonText }>Generate!</Text>
      </TouchableOpacity>

      <ScrollView
        style={ styles.scrollView }
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          // styles child views to center dynamically within the ScrollView
        }}
      >
        <View
          style={ styles.view }
        >
          <TouchableOpacity
          // "Classical" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Classical");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/classical.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Country" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Country");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/country.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Cowboy" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Cowboy");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/cowboy.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Dance" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Dance");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/dance.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Disco" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Disco");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/disco.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Egyptian" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Egyptian");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/egyptian.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Electronic" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Electronic");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/electronic.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Euro" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Euro");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/euro.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Halloween" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Halloween");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/halloween.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Heavy" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Heavy");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/heavy.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Hip-Hop" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Hip-hop");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/hiphop.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "House" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "House");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/house.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Industrial" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Industrial");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/industrial.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Italo" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Italo");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/italo.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Jazz" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Jazz");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/jazz.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Medieval" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Medieval");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/medieval.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Metal" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Metal");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/metal.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Pirate" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Pirate");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/pirate.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Pop" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Pop");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/pop.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Power" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Power");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/power.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Psychadelic" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Psychadelic");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/psychadelic.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Rap" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Rap");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/rap.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Deep" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Deep");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/deep.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Robot" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Robot");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/robot.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Rock" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Rock");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/rock.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Space" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Space");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/space.jpg")}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
          // "Progressive" image-button
            onPress={() => {
              if (buttonsPressed > 4) {
                alert("Too many images selected");
              } else {
                setTempGenre(tempGenre + " " + "Progressive");
                setButtonPressed(buttonsPressed + 1);
              }
            }}
          >
            <Image
              source={require("./assets/progressive.jpg")}
              style={styles.image}
            ></Image> 
            {/* the image contained within the touchable opacity wrapper acts as its interactable area, creating an image-button */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // main stylesheet used for all classes 
  container: {
    flex: 1,
    backgroundColor: "#1A936F",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
  },
  logo: {
    width: 200,
    resizeMode: "contain",
    alignSelf: "flex-start",
    marginLeft: 8,
    marginRight: 45,
  },
  image: {
    height: 130,
    aspectRatio: 1,
    margin: 8,
    resizeMode: "cover",
    borderRadius: 10,
  },
  helpModal: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#1A936F",
  },
  scrollView: {
    width: "100%", 
    height: "100%", 
    backgroundColor: "#88D498",
    paddingTop: 8,
  },
  view: {
    flexWrap: "wrap",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 16,
  },
  newGenreText: {
    marginTop: 10,
    marginBottom: 25,
    textAlign: "center",
    fontSize: 30,
  },
  newGenreBtn: {
    width: 120,
    height: 60,
    backgroundColor: "#114B5F",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  helpBtn: {
    width: 80,
    height: 40,
    backgroundColor: "#114B5F",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: "flex-end",
    marginRight: 8,
    marginLeft: 45,
  },
  helpModalText: {
    fontSize: 16,
    marginTop: 25,
    marginBottom: 10,
    padding: 30,
  },
  helpCloseBtn: {
    backgroundColor: "#114B5F",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: 40,
    borderRadius: 10,
    color: "#ffffff",
  },
  buttonText: {
    fontFamily: "sans-serif",
    color: "#9fe1ad",
    fontSize: 14,
  },
    generateButtonText: {
    fontFamily: "sans-serif",
    color: "#9fe1ad",
    fontSize: 18,
  },
});
