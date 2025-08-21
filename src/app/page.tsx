/* 
  작성자 : 김재혁
  작성일 : 2025-08-21
  최종 수정일 : 2025-08-21
*/

import Header from "./components/Header";

export default function Home() {
  return (
    <div id="wrap">
      <Header/>

      <main id="container">
        <section className="content">
          <div className="home one">
            <p>hello skill up</p>
          </div>
          <div className="home two"></div>
          <div className="home three"></div>
        </section>
      </main>

      <div id="footer">
        <div className="inner"></div>
      </div>
    </div>
  );
}
