import { Touchable } from "react-native";
import styled from "styled-components/native";


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['SECONDARY_COLOR']};
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme['TITLE_COLOR']};
`;

const Table = () => {
    return (
        <Container>
            <Title>Table</Title>
        </Container>
    );
}

export default Table;
