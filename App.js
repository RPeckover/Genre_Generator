// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
// import { random } from "lodash";
// FIND OUT HOW TO IMPORT RANDOMISATION FUNCTIONALITY - LODASH CAUSING ERRORS CURRENTLY

export default function App() {
  const [newGenre, setNewGenre] = useState(""); //at some point take random words from arrays, use setNewGenre function to plug the array strings into a text field to output to user
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
  // array storing names of large music genres 
  // add funk?

  const modifyerArray = [
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

  const imageSelect = useState(null); //IS THIS WORKABLE AS A STATE VARIABLE FOR SECOND RANDOM GENRE FUNCTION

  const [buttonsPressed, setButtonPressed] = useState(0);
  // buttonsPressed allows storage of the number of buttons a user has pressed to prevent them pressing too many at once

  const [tempGenre, setTempGenre] = useState("");

  const randomGenre = () => {};

  const emptyGenerate = () =>
    modifyerArray[math.random(modifyerArray.length - 1)] +
    " " +
    genreArray[math.random(genreArray.length - 1)];

  //setNewGenre genreArray

  return (
    <View style={styles.container}>
      <>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            backgroundColor: "#114B5F",
            fontSize: 14,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            borderRadius: 10,
            alignSelf: "flex-end",
            marginTop: 25,
            marginRight: 5,
          }}
          onPress={() => setModalVisable(true)}
        >
          <Text style={{ fontSize: 14 }}>Help</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType={"slide"}>
          <View style={styles.modal}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 25,
                marginBottom: 10,
                textAlign: "center",
                padding: 30,
              }}
            >
              Generate a custom genre by clicking 'generate' or by selecting
              images from the scroll bar!
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#114B5F",
                alignItems: "center",
                justifyContent: "center",
                width: "20%",
                height: 40,
                borderRadius: 10,
              }}
              onPress={() => setModalVisable(false)}
            >
              <Text style={{ fontFamily: "sans-serif" }}>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </>

      {/* Put code for modal button to make modal visible (place in upper right corner) */}

      <Text
        style={ new_genre_text }
      >
        {newGenre}
      </Text>
      <TouchableOpacity
        style={{
          width: 120,
          height: 60,
          backgroundColor: "#114B5F",
          fontSize: 20,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          if (tempGenre === "") {
            setNewGenre(emptyGenerate());
          } else setNewGenre(tempGenre);
          setButtonPressed(0); // sets the buttonPressed state to 0, preventing the 'too many buttons pressed' state / alert from triggering erroneously 
          setTempGenre("");
        }}
        /*PRINT tempGenre IN THE GENRE GENERATION TEXT SPOT - making tempGenre eaqual to newGenre doesnt work*/
      >
        <Text style={{ fontSize: 18 }}>Generate!</Text>
      </TouchableOpacity>

      <ScrollView
        style={ styles.scrollView }
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexWrap: "wrap",
            width: "80%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

/*
set up two horizontal scrollviews (one for each array) inside of each have touchableOpacity, 
inside each of those, have an image - when setting image sizes, set width and height to 'undefined', set the resize mode to 'contain'
*/

//if using horizonal scroll, direct the user to scroll in this manner with UI (arrow plus the word 'scroll' or similar)

//Math.floor(Math.random * INSERT ARRAY LENGTH)

//use %s for slacling to keep consistant accross devices

//Feedback - make sure user knows they have selected an image and can select more

//could have two columns of images using flex wrap, make images a little larger

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A936F",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 110,
    aspectRatio: 1,
    margin: 10,
    resizeMode: "contain",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#1A936F",
  },
  scrollView: {
    width: "100%", 
    height: "100%", 
    backgroundColor: "#88D498",
  },
  new_genre_text: {
    marginTop: 10,
    marginBottom: 25,
    textAlign: "center",
    fontSize: 30,
  },
});
