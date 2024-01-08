import MyButton from '@/app/components/MyButton';
import styles from './my1.module.css';

export default function My1() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <h1>My page1</h1>
        <p>Text for My page1</p>
      </div>
      <div style={{ height: '100vh' }} id="test-scroll">
        <p className={styles.commonText}>
          My page1 - Text for My page1, second part
        </p>
        <MyButton />
      </div>
    </>
  );
}
