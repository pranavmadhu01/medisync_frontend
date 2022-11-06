import styles from "../styles/components/Header.module.css";
import Profile from "./Profile";
import Search from "./Search"
const Header = ({ name = "Medicine" }) => {
  return (
    <header className={styles.header}>
      <span className={styles.headerTitle}>{name}</span>
      <Search />
      <Profile />
    </header>
  );
};
export default Header;
