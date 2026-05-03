const terminal = document.getElementById('terminal-output');

const lines = [
    { text: "> nexus-nova --sovereign-network --mode deterministic", type: "cmd" },
    { text: "[*] Initializing Sovereign Supervisor Swarm...", type: "info" },
    { text: "[*] Synced with local_model_config.json (Ollama)", type: "info" },
    { text: "[*] Researcher: Broadcast FINDING_READY -> EventBus", type: "info" },
    { text: "[!] Supervisor: Intercepting finding #0x77A2...", type: "warning" },
    { text: "[!] Supervisor: Adversarial critique triggered. Checking signature fidelity...", type: "warning" },
    { text: "[*] Researcher: Recalibrating BOLA payload for WAF evasion...", type: "info" },
    { text: "[*] Applying 'No Lies' Protocol structural check...", type: "info" },
    { text: "[+] JIT Verification Signature: PASSED (Body Marker: 0x921)", type: "success" },
    { text: "[+] Sovereign Certificate Issued: Score 0.98", type: "success" },
    { text: "[+] Technical Truth established in 917.72ms", type: "success" },
    { text: "> Result: Capital extraction verified. HALT instruction ready.", type: "cmd" }
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
