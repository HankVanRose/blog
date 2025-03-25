import Header from './components/Header/Header';
import SingleCard from './components/SingleCard/SingleCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Header size="l"> HankVanRoses' Blog </Header>
      <div className={styles.cardContainer}> {/* Новый контейнер для карточек */}
        <SingleCard size="l" />
        <SingleCard size="l" />
        <SingleCard size="l" />
      </div>
    </div>
  );
}
