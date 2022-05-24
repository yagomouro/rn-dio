import React from "react";
import { StatusBar, Pressable, Linking, FlatList } from "react-native";
import {
  Avatar,
  ButtonText,
  ContentWrapper,
  Description,
  EditButton,
  HistoryDots,
  HistoryDotsWrapper,
  MinorFont,
  NameTitle,
  SafeViewContainer,
} from "./styles";

const colorGithub = "#010409";
const githubImageProfile =
  "https://avatars.githubusercontent.com/u/77462373?v=4";
const urlToMyGithub = "https://github.com/yagomouro";

const App = () => {
  const handlePressGoToGithub = async () => {
    try {
      await Linking.openURL(urlToMyGithub);
    } catch (error) {
      console.log(error);
    }
  };

  const drewDots = [
    15, 16, 20, 24, 28, 30, 33, 36, 38, 41, 43, 46, 49, 51, 54, 55, 59, 63,
  ];

  const handleCreateHistoryDots = () => {
    var elements = [];
    for (let i = 1; i <= 13 * 6; i++) {
      if (drewDots.includes(i)) {
        elements.push(<HistoryDots key={i} color={"greenL3"} />);
      } else {
        elements.push(<HistoryDots key={i} color={"greenL1"} />);
      }
    }
    return elements;
  };

  return (
    <SafeViewContainer>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <ContentWrapper>
        <Avatar
          accessibilityLabel='Foto de perfil'
          source={{ uri: githubImageProfile }}
        />
        <NameTitle>Yago Mouro</NameTitle>
        <MinorFont>yagomouro</MinorFont>
        <Description>
          Front-End Developer | Cursando Sistemas para Internet | HTML | CSS |
          JavaScript
        </Description>
        <HistoryDotsWrapper>{handleCreateHistoryDots()}</HistoryDotsWrapper>
        <Pressable onPress={handlePressGoToGithub}>
          <EditButton>
            <ButtonText>Open in Github</ButtonText>
          </EditButton>
        </Pressable>
      </ContentWrapper>
    </SafeViewContainer>
  );
};

export default App;
