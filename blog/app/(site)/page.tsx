 
import ThemeAppProvider from '@/context/ThemeProvider';
import { UserContext } from '@/context/UserContext';
import Header from '../components/Header/Header';
import ServerPostLists from '../serverComponents/ServerPostLists';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  reactions?: { dislikes: number; likes: number };
  tags?: string[];
  views?: number;
}

export default function Home() {
  return <ServerPostLists />;
}
