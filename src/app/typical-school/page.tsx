/* Intentionally bad UI — standalone contrast demo. Not linked from Shikshya Digital. */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&family=Times+New+Roman&display=swap');
  * { box-sizing: border-box; }
  body {
    font-family: 'Comic Neue', 'Times New Roman', serif;
    background: #ffff00 url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23ff0000' stroke-width='2' opacity='.15'/%3E%3C/svg%3E");
    color: #000080;
    margin: 0;
    overflow-x: hidden;
  }
  .top-bar {
    background: linear-gradient(90deg, red, lime, blue, red);
    color: white;
    text-align: center;
    padding: 4px;
    font-size: 11px;
    font-weight: bold;
  }
  header {
    background: #0066cc;
    border: 5px ridge #999;
    padding: 10px;
    text-align: center;
  }
  header h1 {
    color: #ffff00;
    font-size: 28px;
    text-shadow: 3px 3px red;
    margin: 5px 0;
    letter-spacing: 2px;
  }
  header p { color: #fff; font-size: 14px; margin: 0; }
  nav {
    background: #333;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
    padding: 5px;
    border-bottom: 4px solid red;
  }
  nav a {
    color: #0f0;
    background: #000;
    padding: 8px 12px;
    text-decoration: underline;
    font-size: 13px;
    border: 1px solid lime;
  }
  nav a:hover { background: red; color: yellow; }
  .marquee-wrap {
    background: #000;
    color: #0f0;
    padding: 6px 0;
    font-weight: bold;
    border: 2px dashed red;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-inner {
    display: inline-block;
    animation: scroll-left 12s linear infinite;
  }
  @keyframes scroll-left {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    border: 3px double #0066cc;
  }
  .welcome-box {
    border: 4px inset #ccc;
    padding: 10px;
    background: #e0e0ff;
    margin: 10px 0;
  }
  .welcome-box h2 {
    color: red;
    font-size: 22px;
    text-decoration: underline blink;
  }
  .side-by-side {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .box {
    flex: 1;
    min-width: 200px;
    border: 3px solid red;
    padding: 8px;
    background: #ffcccc;
    font-size: 13px;
    line-height: 1.3;
  }
  .box.green { background: #ccffcc; border-color: blue; }
  .box h3 { margin: 0 0 5px; color: #800080; font-size: 16px; }
  img.placeholder {
    width: 100%;
    height: 120px;
    background: #999;
    border: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    margin: 8px 0;
  }
  table.info {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    margin: 10px 0;
  }
  table.info td, table.info th {
    border: 1px solid #000;
    padding: 4px;
    background: #ffffcc;
  }
  table.info th { background: #0066cc; color: yellow; }
  .form-ugly {
    background: #ddd;
    border: 5px groove #666;
    padding: 10px;
    margin-top: 15px;
  }
  .form-ugly input, .form-ugly textarea, .form-ugly select {
    width: 100%;
    margin: 4px 0 8px;
    font-family: inherit;
    font-size: 12px;
    border: 2px inset #888;
  }
  .form-ugly button {
    background: red;
    color: yellow;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 30px;
    border: 3px outset #f00;
    cursor: pointer;
    width: 100%;
  }
  .footer {
    background: #0066cc;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 11px;
    margin-top: 20px;
    border-top: 6px solid red;
  }
  .visitor {
    background: #000;
    color: lime;
    display: inline-block;
    padding: 3px 8px;
    font-family: monospace;
    border: 1px solid lime;
    margin-top: 8px;
  }
  .blink { animation: blink 1s step-end infinite; }
  @keyframes blink { 50% { opacity: 0; } }
  .float-bad {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: red;
    color: white;
    padding: 15px;
    border-radius: 50%;
    font-size: 11px;
    font-weight: bold;
    z-index: 999;
    border: 3px solid yellow;
    text-align: center;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 600px) {
    header h1 { font-size: 18px; }
    nav a { font-size: 11px; padding: 5px; }
  }
`;

export default function TypicalSchoolPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="top-bar">
        ★★★ भर्ना खुला छ!!! कल गर्नुहोस् 01-4XXXXXX ★★★
      </div>

      <header>
        <h1>🏫 EVEREST MODEL SCHOOL 🏫</h1>
        <p>ESTD 2065 | QUALITY EDUCATION | DISCIPLINE | SUCCESS!!!</p>
        <p style={{ fontSize: 11, marginTop: 5 }}>
          (यो नमूना मात्र — वास्तविक स्कूल होइन)
        </p>
      </header>

      <nav>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">MESSAGE FROM PRINCIPAL</a>
        <a href="#">FACILITIES</a>
        <a href="#">GALLERY</a>
        <a href="#">DOWNLOADS</a>
        <a href="#">ADMISSION</a>
        <a href="#">CONTACT</a>
        <a href="#">STAFF LOGIN</a>
      </nav>

      <div className="marquee-wrap">
        <div className="marquee-inner">
          ::: स्वागतम् ::: भर्ना २०८२ खुला छ ::: हाम्रो विद्यालय नेपालकै उत्कृष्ट :::
          विजेताहरू ::: Picnic २०८१ photos upload soon :::
        </div>
      </div>

      <div className="container">
        <div className="welcome-box">
          <h2 className="blink">Welcome to Our Official Website!!!</h2>
          <p style={{ fontSize: 13 }}>
            हाम्रो विद्यालयले गुणस्तरीय शिक्षा प्रदान गर्दछ। कृपया सबै अभिभावकहरूले
            यो वेबसाइट नियमित हेर्नुहोला। <b>UNDER CONSTRUCTION</b> — केही पेज अझै
            बन्दैछ।
          </p>
        </div>

        <div className="img.placeholder">[ SCHOOL BUILDING PHOTO — 800x600 ]</div>

        <div className="side-by-side">
          <div className="box">
            <h3>📢 NOTICE BOARD</h3>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>Exam routine — PDF download (link broken)</li>
              <li>Holiday notice 2081</li>
              <li>Fee payment reminder!!!</li>
              <li>Tiffin menu updated 2069</li>
            </ul>
          </div>
          <div className="box green">
            <h3>✨ WHY CHOOSE US?</h3>
            <p>
              ✓ Good teachers<br />
              ✓ Big building<br />
              ✓ Computer lab (sometimes)<br />
              ✓ Sports<br />
              ✓ 100% result (sometimes)
            </p>
          </div>
        </div>

        <table className="info">
          <thead>
            <tr>
              <th>कक्षा</th>
              <th>शुल्क</th>
              <th>समय</th>
              <th>रिमार्क</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nursery - 5</td>
              <td>????</td>
              <td>10-4</td>
              <td>Call office</td>
            </tr>
            <tr>
              <td>6 - 10</td>
              <td>????</td>
              <td>10-4</td>
              <td>—</td>
            </tr>
            <tr>
              <td>+2</td>
              <td>????</td>
              <td>—</td>
              <td>Science & Mgmt</td>
            </tr>
          </tbody>
        </table>

        <div className="img.placeholder">[ PRINCIPAL SIR PHOTO ]</div>

        <p style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
          *** Message from Principal: Dear parents and students, our school is the
          best. Please visit school for more information. Website may not be updated
          regularly. Thank you. ***
        </p>

        <div className="form-ugly">
          <h3 style={{ color: "blue", marginTop: 0 }}>Quick Contact Form</h3>
          <label>नाम:</label>
          <input type="text" placeholder="your name" />
          <label>फोन:</label>
          <input type="text" placeholder="98xxxxxxxx" />
          <label>सन्देश:</label>
          <textarea rows={3} placeholder="type here..." />
          <label>कक्षा:</label>
          <select>
            <option>-- select --</option>
            <option>1</option>
            <option>2</option>
            <option>other</option>
          </select>
          <button type="button">SUBMIT !!!</button>
          <p style={{ fontSize: 10, margin: "8px 0 0" }}>
            (Form does not work — demo only)
          </p>
        </div>

        <div style={{ marginTop: 15, fontSize: 11, textAlign: "center" }}>
          <span className="visitor">Visitors: 000127</span>
          <br />
          <br />
          Best viewed in Internet Explorer 6.0 | 1024x768
          <br />
          Made with ❤️ in MS FrontPage 2003 (probably)
        </div>
      </div>

      <div className="footer">
        <p>
          <b>Everest Model School</b> | Lalitpur, Nepal
          <br />
          Phone: 01-4XXXXXX | Email: info@school.com.np (maybe)
          <br />
          Copyright 2065-2082 All Rights Reserved!!!
        </p>
      </div>

      <a href="#top" className="float-bad">
        CALL<br />
        NOW!!!
      </a>
    </>
  );
}
