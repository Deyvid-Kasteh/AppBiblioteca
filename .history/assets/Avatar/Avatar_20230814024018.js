import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AuthContext } from '../../components/contexts/Authentication.js'
import avatarPadrao from "../avatarPadrao.png";


const Avatar = () => {
    const { usuarioEstaLogado, usuario } =
    useContext(AuthContext);

  if (usuarioEstaLogado) {
    return (
      <Image
        style={styles.profileImage}
        source={{
          uri: `${ usuario.photo }`,
        }}
      />
    );
  } else {
    return <Image style={styles.profileImage} source={avatarPadrao} />;
  }

  // return (
  //   <Image
  //     style={styles.profileImage}
  //     source={{
  //       uri: "https://avatars.githubusercontent.com/u/99744584?s=96&v=4",
  //     }}
  //   />
  // );
};

export default Avatar;

const styles = StyleSheet.create({
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 15
  },
});
