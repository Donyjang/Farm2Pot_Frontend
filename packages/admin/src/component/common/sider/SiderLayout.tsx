import { useState } from "react";
import styles from "../sider/SiderLayout.module.scss";
function SiderLayout() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* 사이드바 */}
      <aside
        className={`${styles.adminLayout__sidebar} ${open ? styles.open : ""}`}
      >
        {/* 사이드바 토글 버튼 */}
        <button
          className={styles.adminLayout__sidebar__toggleBtn}
          onClick={() => setOpen(!open)}
        >
          {open ? "⬅" : "➡"}
        </button>

        {/* Write 버튼 */}
        <button className={styles.adminLayout__sidebar__writeBtn}>
          {open ? "Write" : "✚"}
        </button>

        {/* 메뉴 목록 */}
        {open && (
          <ul className={styles.adminLayout__sidebar__menu}>
            <li>Product List</li>
            <li>Inventory</li>
            <li>Policy</li>
            <li>Box</li>
            <li>Etc</li>
          </ul>
        )}
      </aside>
    </>
  );
}

export default SiderLayout;
