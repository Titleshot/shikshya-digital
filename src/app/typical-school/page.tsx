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
  .section-title {
    background: #0066cc;
    color: yellow;
    padding: 6px 10px;
    font-size: 18px;
    margin: 20px 0 8px;
    border: 2px solid red;
    text-align: center;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin: 10px 0;
  }
  .gallery-grid .img.placeholder { height: 90px; font-size: 10px; }
  .ramble {
    font-size: 12px;
    line-height: 1.5;
    text-align: justify;
    border: 1px dotted #666;
    padding: 8px;
    background: #fffacd;
    margin: 10px 0;
  }
  .fake-link { color: blue; text-decoration: underline; cursor: pointer; }
  .fake-link:visited { color: purple; }
  .center-banner {
    text-align: center;
    background: red;
    color: white;
    padding: 20px;
    font-size: 20px;
    margin: 15px 0;
    border: 4px double yellow;
  }
  img.placeholder {
    width: 100%;
    height: 140px;
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
        <a href="#">OLD WEBSITE</a>
        <a href="#">FACEBOOK</a>
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

        <h2 className="section-title">::: हाम्रो विद्यालयको बारेमा :::</h2>
        <div className="ramble">
          <p>
            Everest Model School २०६५ मा स्थापना भएको हो। हामी विश्वास गर्छौं कि
            शिक्षा भनेको केवल किताब पढ्नु मात्र होइन। हाम्रो विद्यालयमा विद्यार्थीहरूले
            अनुशासन, नैतिकता, र पनि पढाइ पनि सिक्छन्। हाम्रो संस्थापक श्री
            अज्ञात महाराजले भन्नुभएको थियो — &quot;पढ, लेख, र सफल बन&quot; — यो नै
            हाम्रो आदर्श वाक्य हो।
          </p>
          <p style={{ marginTop: 10 }}>
            हाम्रो विद्यालयमा ५०० भन्दा बढी विद्यार्थी अध्ययनरत छन् (लगभग)।
            हामीसँग ३० जना शिक्षक छन् (कति जना full time हो भन्ने थाहा छैन)।
            हाम्रो भवन ४ तले छ र खेल मैदान पनि छ — ठूलो हो कि सानो भन्ने कुरा
            भ्रमण गरेर हेर्नुहोस्।
          </p>
        </div>

        <div className="center-banner blink">
          ★ ADMISSION OPEN 2082 ★<br />
          <span style={{ fontSize: 14 }}>First come first serve!!!</span>
        </div>

        <h2 className="section-title">::: सुविधाहरू (FACILITIES) :::</h2>
        <div className="side-by-side">
          <div className="box">
            <h3>📚 Library</h3>
            <div className="img.placeholder">[ LIBRARY PHOTO ]</div>
            <p>पुस्तकहरू छन्। धेरै पुराना।</p>
          </div>
          <div className="box green">
            <h3>💻 Computer Lab</h3>
            <div className="img.placeholder">[ 10 COMPUTERS ]</div>
            <p>Windows XP installed (maybe)</p>
          </div>
        </div>
        <div className="side-by-side">
          <div className="box green">
            <h3>🔬 Science Lab</h3>
            <div className="img.placeholder">[ LAB PHOTO ]</div>
            <p>कहिलेकाही प्रयोग हुन्छ</p>
          </div>
          <div className="box">
            <h3>⚽ Playground</h3>
            <div className="img.placeholder">[ FIELD ]</div>
            <p>Football, cricket, kabaddi</p>
          </div>
        </div>
        <div className="img.placeholder" style={{ height: 180 }}>
          [ CANTEEN / TUCK SHOP — MENU NOT AVAILABLE ONLINE ]
        </div>

        <h2 className="section-title">::: ग्यालेरी (PHOTOS) :::</h2>
        <p style={{ fontSize: 11, color: "gray", textAlign: "center" }}>
          Click to enlarge (does not work)
        </p>
        <div className="gallery-grid">
          {[
            "Sports Day 2079",
            "Annual Day",
            "Picnic",
            "Class 5",
            "Teachers",
            "Award",
            "Tour",
            "Exam",
            "Cultural",
          ].map((label) => (
            <div key={label} className="img.placeholder">
              [{label}]
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10, textAlign: "center" }}>
          More photos coming soon... please check back in 2083
        </p>

        <h2 className="section-title">::: डाउनलोडहरू :::</h2>
        <ul style={{ fontSize: 13, lineHeight: 2 }}>
          <li>
            <span className="fake-link">Admission Form.pdf</span> — (file not found)
          </li>
          <li>
            <span className="fake-link">School Prospectus 2069.pdf</span> — outdated
          </li>
          <li>
            <span className="fake-link">Fee Structure.doc</span> — open in Word 2003
          </li>
          <li>
            <span className="fake-link">Holiday List 2080.pdf</span>
          </li>
          <li>
            <span className="fake-link">Uniform Size Chart.jpg</span> — low quality
          </li>
        </ul>

        <h2 className="section-title">::: कार्यक्रम तालिका :::</h2>
        <table className="info">
          <thead>
            <tr>
              <th>मिति</th>
              <th>कार्यक्रम</th>
              <th>समय</th>
              <th>स्थान</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>२०८१/१०/१५</td>
              <td>Parent Meeting</td>
              <td>???</td>
              <td>Hall</td>
            </tr>
            <tr>
              <td>२०८१/११/०१</td>
              <td>Annual Exam</td>
              <td>10-4</td>
              <td>Classrooms</td>
            </tr>
            <tr>
              <td>२०८१/१२/??</td>
              <td>Winter Vacation</td>
              <td>—</td>
              <td>Home</td>
            </tr>
            <tr>
              <td>TBA</td>
              <td>Sports Week</td>
              <td>TBA</td>
              <td>Ground</td>
            </tr>
            <tr>
              <td>TBA</td>
              <td>Result Day</td>
              <td>Morning</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <h2 className="section-title">::: शिक्षकहरू (STAFF) :::</h2>
        <table className="info">
          <thead>
            <tr>
              <th>नाम</th>
              <th>विषय</th>
              <th>फोन</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Principal Sir</td>
              <td>All</td>
              <td>Office मा सोध्नुहोस्</td>
            </tr>
            <tr>
              <td>Ram Sir</td>
              <td>Math</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Sita Ma&apos;am</td>
              <td>English</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Hari Sir</td>
              <td>Science</td>
              <td>—</td>
            </tr>
            <tr>
              <td>???</td>
              <td>Computer</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <h2 className="section-title">::: बारम्बार सोधिने प्रश्न (FAQ) :::</h2>
        <div className="box" style={{ marginBottom: 10 }}>
          <p>
            <b>Q: भर्ना कहिले खुल्छ?</b>
            <br />
            A: अहिले खुला छ। कल आउनुहोस्।
          </p>
          <p style={{ marginTop: 8 }}>
            <b>Q: शुल्क कति हो?</b>
            <br />
            A: Office मा सोध्नुहोस्। वेबसाइटमा update भएको छैन।
          </p>
          <p style={{ marginTop: 8 }}>
            <b>Q: Transport छ?</b>
            <br />
            A: हो, केही route मा।
          </p>
          <p style={{ marginTop: 8 }}>
            <b>Q: Website कहिले update हुन्छ?</b>
            <br />
            A: हामी कोशिस गर्छौं। धन्यवाद।
          </p>
        </div>

        <div className="marquee-wrap" style={{ margin: "15px 0" }}>
          <div className="marquee-inner" style={{ animationDuration: "18s" }}>
            *** HOT NEWS *** Result published — check notice board *** Tiffin fee due ***
            Parent meeting Friday *** Don&apos;t forget homework ***
          </div>
        </div>

        <h2 className="section-title">::: कसरी आउने? (LOCATION) :::</h2>
        <div className="img.placeholder" style={{ height: 200 }}>
          [ GOOGLE MAP — NOT EMBEDDED — PLEASE CALL FOR DIRECTIONS ]
        </div>
        <p style={{ fontSize: 12 }}>
          ठेगाना: ललितपुर, नेपाल (ठ्याक्कै ठेगाना भन्न मिल्दैन — landmark: पुरानो
          मन्दिर नजिक)
          <br />
          <br />
          <b>सम्पर्क:</b> फोन 01-4XXXXXX | इमेल: info@school.com.np (काम नगर्न सक्छ)
        </p>

        <div className="side-by-side">
          <div className="box green">
            <h3>🏆 हाम्रा उपलब्धिहरू</h3>
            <ul style={{ paddingLeft: 18, margin: 0, fontSize: 12 }}>
              <li>District topper 2075 (verify)</li>
              <li>Football winner 2078</li>
              <li>100% SLC pass (some years)</li>
              <li>Best school award (self declared)</li>
            </ul>
          </div>
          <div className="box">
            <h3>📋 भर्ना कसरी गर्ने?</h3>
            <ol style={{ paddingLeft: 18, margin: 0, fontSize: 12 }}>
              <li>विद्यालय आउनुहोस्</li>
              <li>फर्म भर्नुहोस्</li>
              <li>पैसा तिर्नुहोस्</li>
              <li>कक्षामा बस्नुहोस्</li>
            </ol>
          </div>
        </div>

        <div className="img.placeholder" style={{ height: 160 }}>
          [ GROUP PHOTO — ALL STUDENTS — VERY SMALL FACES ]
        </div>

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
