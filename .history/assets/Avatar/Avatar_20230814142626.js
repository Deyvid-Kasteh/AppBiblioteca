import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AuthContext } from "../../components/contexts/Authentication.js";
import avatarPadrao from "../avatarPadrao.png";

const Avatar = () => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);

  if (usuario) {
    if (usuario.user.photo) {
    }


  } else {
    return <Image style={styles.profileImage} source={avatarPadrao} />;
  }
};

export default Avatar;

const styles = StyleSheet.create({
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 15,
  },
});
