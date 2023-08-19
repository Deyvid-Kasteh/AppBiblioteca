import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AuthContext } from "../../components/contexts/Authentication.js";
import avatarPadrao from "../images/avatarPadrao.png";

const Avatar = (params) => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);

  if (usuario) {
    if (usuario.user.photo) {
      const fotoPerfil = usuario.user.photo;
      return (
        <Image
          // style={styles.profileImage}
          source={{
            uri: `${fotoPerfil}`,
          }}
        />
      );
    } else {
      return (
        <Image
          // style={styles.profileImage}
          source={{
            uri: "https://avatars.githubusercontent.com/u/99744584?s=96&v=4",
          }}
        />
      );
    }
  } else {
    return <Image
      // style={styles.profileImage} source={avatarPadrao} />;
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
