import styles from "../styles/components/Header.module.css";
import Profile from "./Profile";
const Header = ({ name = "Medicine" }) => {
  return (
    <header className={styles.header}>
      <span className={styles.headerTitle}>{name}</span>
      <Profile />
    </header>
  );
};
export default Header;
