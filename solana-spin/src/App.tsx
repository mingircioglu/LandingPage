import React from "react";

const styles = `
:root { --bg:#0b0c10; --card:#121319; --txt:#e8eaf0; --muted:#a8afbf; }
*{box-sizing:border-box}
body{
  margin:0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:radial-gradient(80% 100% at 50% 0%, #151826 0%, #0b0c10 60%);
}
.wrap{max-width:680px;margin:0 auto;padding:28px}
.card{background:var(--card);border:1px solid #1f2330;border-radius:16px;padding:28px;margin-top:28px}
h1{margin:0 0 12px;font-size:28px;color:var(--txt);line-height:1.2}
p{color:var(--muted);margin:8px 0 0}
.cta{display:inline-block;margin-top:18px;padding:14px 20px;border-radius:12px;
     background:#7c5cff;color:#fff;text-decoration:none;font-weight:600}
.cta:active{transform:translateY(1px)}
.footer{margin-top:18px;font-size:12px;color:#9aa3b2}
.logo{display:flex;gap:10px;align-items:center;margin-bottom:10px}
.badge{background:#1b1f2d;color:#cfd6ea;padding:2px 8px;border-radius:999px;font-size:12px;margin-left:6px}
.grid{display:grid;gap:12px;margin-top:12px}
.pill{background:#171b27;color:#cfd6ea;border:1px solid #242838;border-radius:10px;padding:10px 12px}
`;

export default function SolanaSpinDemo(): JSX.Element {
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
            <div className="pill">⚡ Fast: 15s </div>
            <div className="pill">🛡️ No KYC</div>
            <div className="pill">👛 Phantom supported</div>
            <div className="pill">📱 Mobile ready</div>
          </div>

          {/* CTA to your Telegram bot/channel */}
          <a
            className="cta"
            href="https://t.me/BonusSolanaBot"
            target="_blank"
            rel="noopener"
          >
            Open on Telegram
          </a>

          <div className="footer">
            <div>Not financial advice. SOLANA FUNDATION.</div>
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
