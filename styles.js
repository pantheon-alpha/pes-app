import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    padding-top: ${Constants.statusBarHeight + 20}px;
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    background-color: ${(props) => props.theme['SECONDARY_COLOR']};
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const TitleText = styled.Text`
    font-weight: 600;
    font-size: ${(props) => props.fontSize || '18px'};
    color: ${(props) => props.theme['TITLE_COLOR']};
`;
