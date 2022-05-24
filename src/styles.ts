import styled from "styled-components/native";

const colors = {
  githubBackgroundColor: "#010409",
  minorFont: "#8b949e",
  nameTitle: "#c9d1d9 ",
  backgroundBtn: "#21262d",
  red: "blue",
  greenL3: "#26a641",
  greenL1: "#0e4429",
};

const gap = 8;

interface HistoryDotsProps {
  color: "greenL3" | "greenL1";
}

export const SafeViewContainer = styled.SafeAreaView`
  background-color: ${colors.githubBackgroundColor};
  padding: 14px;
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 260px;
  height: 260px;
  border-radius: 300px;
  border-width: 2px;
  border-color: ${colors.nameTitle};
`;

export const ContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const NameTitle = styled.Text`
  color: ${colors.nameTitle};
  font-size: 35px;
  margin-top: 20px;
  font-weight: 500;
`;

export const MinorFont = styled.Text`
  font-size: 20px;
  margin: 0 0 5px 0;
  color: ${colors.minorFont};
`;

export const Description = styled.Text`
  margin: 15px 0;
  font-size: 20px;
  color: ${colors.nameTitle};
  font-weight: 400;
`;

export const EditButton = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.backgroundBtn};
  border-radius: 5px;
  border: 1.5px solid ${colors.minorFont};
`;

export const ButtonText = styled.Text`
  color: ${colors.nameTitle};
  font-size: 18px;
`;

export const HistoryDotsWrapper = styled.View`
  width: 290px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  /* padding: 0 ${gap / -2}px; */
`;

export const HistoryDots = styled.View<HistoryDotsProps>`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  margin: 3px;
  background-color: ${({ color }) => colors[color]};
  /* margin: 0 ${gap / 2}px; */
`;
