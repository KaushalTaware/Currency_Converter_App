# 🌍 Currency Converter App  

A simple and interactive **currency converter** built with **HTML, CSS, JavaScript (frontend)** and a **Node.js + Express backend proxy** to securely handle API requests.  

## ✨ Features  
- 🔄 Real-time currency conversion  
- 🏳️ Flags automatically update with selected currencies  
- 💲 Default conversion set from **USD → INR**  
- 🔐 Backend proxy hides API key for security  

---

## 🛠️ Tech Stack  
- **Frontend**: HTML, CSS, JavaScript (Vanilla)  
- **Backend**: Node.js, Express, CORS, dotenv  
- **API**: [Exchangerate.host](https://exchangerate.host)  

---

## 🚀 How It Works  
1. User selects currencies and enters an amount.  
2. Frontend sends a request to backend proxy (`/api/convert`).  
3. Backend forwards the request to **Exchangerate.host API** using a hidden API key.  
4. Backend responds with the exchange rate → frontend updates the UI. 
