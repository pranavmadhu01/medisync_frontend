import { useState } from "react";
import { Avatar } from "@mui/material";
import styles from "../styles/components/Profile.module.css";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

const Profile = ({
  names = "Jennifer Darling",
  designation = "Heart expert",
}) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={styles.profileWrapper}
      onClick={() => setDropdown(!dropdown)}
    >
      <div
        className={
          !dropdown ? styles.profileDropdown : styles.profileDropdownActive
        }
      >
        <Link href="#">Logout</Link>
      </div>
      {/* <Avatar src="https://thispersondoesnotexist.com/image" /> */}
      <Avatar />
      <div className={styles.profileDescription}>
        <span className={styles.profileWrapperName}>{names}</span>
        <span className={styles.profileWrapperDesignation}>{designation}</span>
      </div>
      <BsChevronDown />
    </div>
  );
};
export default Profile;
