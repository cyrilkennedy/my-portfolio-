import React from "react";
import "./../styles/Cybersecurity.css";

function Cybersecurity() {
  return (
    <div className="cybersecurity">
      <h2 className="fade-in">Cybersecurity Portfolio</h2>
      <p className="fade-in">Some of my cybersecurity research and tools:</p>
      <div className="cyber-grid">
        <div className="cyber-card fade-in">
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759160477/nmap_efcmxy.png" alt="Pen Test Report" className="img-zoom" />
          <h3>Nmap Network Scan – Kali Linux</h3>
          <p>Executed an advanced Nmap scan (-sC -sV -O -T4 -A -p-) against target 10.0.2.3. Discovered one open port (DNS on 53/tcp), detected services/versions, attempted OS fingerprinting, and performed traceroute. Demonstrates practical skills in network reconnaissance, service detection, and OS analysis.</p>
        </div>
        <div className="cyber-card fade-in" style={{ animationDelay: "0.3s" }}>
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759160710/Screenshot_From_2025-06-24_17-18-53_xi9cnl.png" alt="Network Scanner" className="img-zoom" />
          <h3>Payload Generation & Metasploit Framework (Ethical Hacking)</h3>
          <p>Captured a controlled, ethical-lab workflow for payload creation and command‑and‑control setup. Demonstrated custom payload generation (XOR encoding and obfuscation) with the final binary saved to /tmp/evil_putty.exe, followed by Metasploit Framework initialization (msfconsole) to prepare a testing environment. Highlights skills in payload engineering, evasion testing, and using Metasploit for authorized penetration testing within a lab environment.</p>
        </div>
      </div>

      <div className="cyber-grid">
        <div className="cyber-card fade-in">
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759160982/Screenshot_From_2025-05-13_15-37-59_v23zzs.png" alt="Pen Test Report" className="img-zoom" />
          <h3>Debugging Linux Package Manager (APT) Errors</h3>
          <p>Troubleshot real-world Kali Linux APT issues, including HTTP 404 and “Failed to fetch” errors when installing packages. Demonstrated proficiency in package management, repository troubleshooting, and using --fix-missing to resolve broken dependencies.</p>
        </div>
        <div className="cyber-card fade-in" style={{ animationDelay: "0.3s" }}>
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759161207/Screenshot_From_2025-06-24_17-27-55_kwikn9.png" alt="Network Scanner" className="img-zoom" />
          <h3>Metasploit Multi‑Handler Configuration — Reverse Shell</h3>
          <p>Configured exploit/multi/handler in Metasploit to receive a windows/x64/meterpreter/reverse_tcp connection. Set LHOST=192.168.182.182 and LPORT=4444, verified options, and prepared the listener to wait for an authorized payload — demonstrating practical skills in C2 setup and post‑exploitation readiness within an ethical testing environment.</p>
        </div>
      </div>
    </div>
  );
}

export default Cybersecurity;
