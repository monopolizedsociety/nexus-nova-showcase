const terminal = document.getElementById('terminal-output');

const lines = [
    { text: "> nexus-nova --sovereign-network --target base-bridge --target cosmos-ibc", type: "cmd" },
    { text: "[*] Initializing Sovereign Supervisor Swarm...", type: "info" },
    { text: "[*] Researcher: Broadcast FINDING_READY -> Base_Messenger_V0", type: "info" },
    { text: "[!] Supervisor: Verifying Hashing Asymmetry on Mainnet Fork...", type: "warning" },
    { text: "[+] [BASE] [PASS] test_Messenger_V0_Replay_Bypass()", type: "success" },
    { text: "[*] Researcher: Broadcast FINDING_READY -> Cosmos_IBC_Handshake", type: "info" },
    { text: "[!] Supervisor: Verifying DelayPeriod Bypass in Handshake...", type: "warning" },
    { text: "[+] [COSMOS] [PASS] TestChanUpgradeDelayPeriodBypass()", type: "success" },
    { text: "[!] Supervisor: Verifying SentinelRoot Persistence DoS...", type: "warning" },
    { text: "[+] [COSMOS] [PASS] TestUnitSentinelRootDoS()", type: "success" },
    { text: "[+] All findings verified. Technical Truth established.", type: "success" },
    { text: "> Sovereign Certificate Registry Updated.", type: "cmd" }
];

function addLine(index) {
    if (index >= lines.length) return;

    const line = lines[index];
    const div = document.createElement('div');
    div.className = `line ${line.type}`;
    div.innerText = line.text;
    terminal.appendChild(div);
    
    terminal.scrollTop = terminal.scrollHeight;

    // Fast sub-second delivery simulation
    const delay = line.type === 'success' ? 100 : Math.random() * 400 + 100;
    setTimeout(() => addLine(index + 1), delay);
}

setTimeout(() => addLine(0), 1000);

// Stats animation
const statValues = document.querySelectorAll('.stat-value');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

statValues.forEach(val => observer.observe(val));

// Value Ticker
const valueTicker = document.createElement('div');
valueTicker.style = "position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); border: 1px solid var(--primary-color); padding: 1rem 2rem; border-radius: 12px; font-family: var(--font-mono); box-shadow: var(--velocity-glow); z-index: 1000;";
valueTicker.innerHTML = `<div style="font-size: 0.6rem; color: #555;">VERIFIED BOUNTY POTENTIAL</div><div id="bounty-value" style="font-size: 1.5rem; color: var(--primary-color);">$5,000,000.00</div>`;
document.body.appendChild(valueTicker);

let currentValue = 5000000;
const targetValue = 5250000;
const increment = () => {
    if (currentValue < targetValue) {
        currentValue += Math.random() * 1000 + 500;
        document.getElementById('bounty-value').innerText = `$${currentValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        setTimeout(increment, Math.random() * 500 + 100);
    }
};
setTimeout(increment, 2000);
