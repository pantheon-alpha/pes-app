import { StatusBar } from 'expo-status-bar';
import { Container, Header, TitleText} from './styles';
import { ThemeProvider } from 'styled-components/native';
import Theme from './theme';
import Table from './components/table';


export default function App() {
  return (

    <ThemeProvider theme={Theme}>
      <Container>
        <Header>
          <TitleText>My Todos</TitleText>
        </Header>
        <Table />
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>

  );
}
