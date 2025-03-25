import Header from './components/Header/Header';
import SingleCard from './components/SingleCard/SingleCard';

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Header size="l"> HankVanRoses' Blog </Header>
      <SingleCard size="l" />
    </div>
  );
}
