// src/App.tsx

// Not: Bilerek React import etmedik (unused hatasını engellemek için).
// İpucu: index.html'de viewport'u şöyle yapman mobilde daha iyi sonuç verir:
// <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

const styles = `
:root { --bg:#0b0c10; --card:#121319; --txt:#e8eaf0; --muted:#a8afbf; }
* { box-sizing:border-box; -webkit-tap-highlight-color: transparent; }

html, body, #root { height: 100%; }

body{
  margin:0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:radial-gradient(80% 100% at 50% 0%, #151826 0%, #0b0c10 60%);
}

/* Tam ekran ortalama + güvenli alanlar */
.wrap{
  min-height:100vh;       /* eski tarayıcılar */
  min-height:100svh;      /* mobil UI şeritleri dahil küçük viewport */
  min-height:100dvh;      /* dinamik viewport - yeni tarayıcılar */
  display:flex;
  align-items:center;
  justify-content:center;
  padding: clamp(16px, 5vw, 28px);
  padding-top: calc(clamp(16px, 5vw, 28px) + env(safe-area-inset-top, 0px));
  padding-bottom: calc(clamp(16px, 5vw, 28px) + env(safe-area-inset-bottom, 0px));
}

.card{
  width:100%;
  max-width:680px;
  background:var(--card);
  border:1px solid #1f2330;
  border-radius:16px;
  padding: clamp(18px, 5vw, 28px);
  margin:0; /* ortalamayı bozmasın diye üst boşluk kaldırıldı */
}

/* Tipografi: mobil uyumlu boyutlar */
h1{
  margin:0 0 12px;
  font-size: clamp(22px, 6vw, 32px);
  color:var(--txt);
  line-height:1.2;
  text-align:center;
}
p{
  color:var(--muted);
  margin:8px 0 0;
  text-align:center;
  font-size: clamp(14px, 3.8vw, 16px);
}

/* CTA: tam genişlik + büyük dokunma alanı */
.cta{
  display:block;
  width:100%;
  text-align:center;
  margin-top:18px;
  padding:14px 20px;
  min-height:48px;
  border-radius:12px;
  background:#7c5cff;
  color:#fff;
  text-decoration:none;
  font-weight:600;
  line-height:1;
}
.cta:active{ transform:translateY(1px) }

.footer{
  margin-top:18px;
  font-size:12px;
  color:#9aa3b2;
  text-align:center;
}

.logo{
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:center;  /* mobilde ortala */
  margin-bottom:10px;
}
.badge{
  background:#1b1f2d;
  color:#cfd6ea;
  padding:2px 8px;
  border-radius:999px;
  font-size:12px;
  margin-left:6px;
}

/* Rozetler 2 sütun; geniş ekranda 4 sütun */
.grid{
  display:grid;
  gap:12px;
  margin-top:12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 560px){
  .grid{ grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
.pill{
  background:#171b27;
  color:#cfd6ea;
  border:1px solid #242838;
  border-radius:10px;
  padding:10px 12px;
  text-align:center;
}
`;

export default function SolanaSpinDemo() {
  return (
    <>
      <style>{styles}</style>

      <div className="wrap">
        <div className="card">
          <div className="logo">
            {/* Put your own Solana logo asset here */}
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/solana-sol-icon.png"
              alt="Solana"
              width={28}
              height={28}
            />
            <strong style={{ color: "#e8eaf0" }}>Solana Spin</strong>
            <span className="badge">Early Access</span>
          </div>

          <h1>
            Try <span style={{ opacity: 0.85 }}>Solana Spin</span> — in 15 seconds
          </h1>
          <p>Simple mini experience.</p>

          <div className="grid">
            <div className="pill">⚡ Fast: 15s</div>
            <div className="pill">🛡️ No KYC</div>
            <div className="pill">👛 Phantom supported</div>
            <div className="pill">📱 Mobile ready</div>
          </div>

          {/* CTA to your Telegram bot/channel */}
          <a
            className="cta"
            href="https://t.me/BonusSolanaBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on Telegram
          </a>

          <div className="footer">
            <div>Not financial advice. SOLANA FOUNDATION.</div>
            <div style={{ marginTop: 6 }}>
              <a href="https://solana.com/privacy-policy" style={{ color: "#b8c1d9" }}>
                Privacy
              </a>{" "}
              ·{" "}
              <a href="https://solana.com/en/tos" style={{ color: "#b8c1d9" }}>
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
