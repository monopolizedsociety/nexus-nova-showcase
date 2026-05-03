const terminal = document.getElementById('terminal-output');

const lines = [
    { text: "> nexus-nova --target mainnet-fork --mode zero-touch", type: "cmd" },
    { text: "[*] Initializing TruthVerifier Engine...", type: "info" },
    { text: "[*] Mapping state-space and oracle dependencies...", type: "info" },
    { text: "[!] Warning: Price misalignment detected in Aave V3", type: "warning" },
    { text: "[*] Generating hardened attack blueprint...", type: "info" },
    { text: "[*] Executing sub-second Physical Verification...", type: "info" },
    { text: "[+] EXPLOIT VERIFIED: Delta +4,200.5 ETH in liquidity pool", type: "success" },
    { text: "[+] Logic Invariant Check: PASSED", type: "success" },
    { text: "[+] Finalizing report: 917.72ms total latency", type: "success" },
    { text: "> Target verified. Technical Truth established.", type: "cmd" }
];

function addLine(index) {
    if (index >= lines.length) return;

    const line = lines[index];
    const div = document.createElement('div');
    div.className = `line ${line.type}`;
    div.innerText = line.text;
    terminal.appendChild(div);
    
    // Auto scroll
    terminal.scrollTop = terminal.scrollHeight;

    setTimeout(() => addLine(index + 1), Math.random() * 500 + 200);
}

// Start terminal after a short delay
setTimeout(() => addLine(0), 1000);

// Simple scroll reveal
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.stat-card');
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
