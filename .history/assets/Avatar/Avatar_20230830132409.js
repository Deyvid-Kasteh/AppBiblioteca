import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AuthContext } from "../../components/contexts/Authentication.js";
import avatarPadrao from "../images/avatarPadrao.png";

const Avatar = (props) => {
  const { usuarioEstaLogado, usuario } = useContext(AuthContext);

  if (usuario) {
    if (usuario.details?.picture) {
      if (typeof usuario.details.picture === "string") {      const fotoPerfil = usuario.details.picture;
}
      return (
        <Image
          style={{
            width: props.width,
            height: props.height,
            borderRadius: 100,
            marginRight: 15,
          }}
          source={{
            uri: `${fotoPerfil}`,
          }}
        />
      );
    } else {
      return (
        <Image
          style={{
            width: props.width,
            height: props.height,
            borderRadius: 100,
            marginRight: 15,
          }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/99744584?s=96&v=4",
          }}
        />
      );
    }
  } else {
    return (
      <Image
        style={{
          width: props.width,
          height: props.height,
          borderRadius: 100,
          marginRight: 15,
        }}
        source={avatarPadrao}
      />
    );
  }
};

export default Avatar;

const styles = StyleSheet.create({
  // profileImage: {
  //   width: props.width,
  //   height: props.height,
  //   borderRadius: 100,
  //   marginRight: 15,
  // },
});
