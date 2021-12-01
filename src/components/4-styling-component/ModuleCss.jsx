import styles from './style.module.css'; // Import css modules stylesheet as styles
import './style.css'; // Import regular stylesheet

const ModuleCss = () => {
  const gaya = {
    color: 'red',
    fontSize: 45,
  };

  return (
    <>
      <h1 className={styles.textColor}>Welcome to the hell brother</h1>
      <h1 class="text-biru">ini yang pakai stylesheet css biasa</h1>
      <h1>
        ini yang pakai inline <span style={gaya}>css dengan gaya</span>
      </h1>
    </>
  );
};

export default ModuleCss;
