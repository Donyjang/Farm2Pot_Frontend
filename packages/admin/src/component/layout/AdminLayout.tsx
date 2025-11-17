import { useState } from "react";
import SiderLayout from "../common/sider/SiderLayout";
import styles from "./AdminLayout.module.scss";

function AdminLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.adminLayout}>
      <SiderLayout />

      {/* 메인 컨텐츠 */}
      <main className={styles.adminLayout__content}>
        <h1>Admin Main Page</h1>
        <p>여기에 실제 관리자 페이지 컨텐츠가 출력됩니다.</p>
      </main>
    </div>
  );
}

export default AdminLayout;
