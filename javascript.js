document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    const inr = parseFloat(document.getElementById("inrAmount").value);
    if (isNaN(inr)) return;

    document.getElementById("result").innerHTML = `
      USD: $${(inr * 0.012).toFixed(2)}<br>
      EUR: €${(inr * 0.011).toFixed(2)}<br>
      MYR: RM${(inr * 0.055).toFixed(2)}<br>
      GBP: £${(inr * 0.0095).toFixed(2)}<br>
      JPY: ¥${(inr * 1.7).toFixed(2)}
    `;
  });
});
function goBack() {
  window.location.href = "currency-info.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    const usd = parseFloat(document.getElementById("usdAmount").value);
    if (isNaN(usd)) return;

    document.getElementById("result").innerHTML = `
      INR: ₹${(usd * 83).toFixed(2)}<br>
      EUR: €${(usd * 0.91).toFixed(2)}<br>
      MYR: RM${(usd * 4.7).toFixed(2)}<br>
      GBP: £${(usd * 0.79).toFixed(2)}<br>
      JPY: ¥${(usd * 133).toFixed(2)}
    `;
  });
});
function goBack() {
  window.location.href = "currency-info.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    const eur = parseFloat(document.getElementById("eurAmount").value);
    if (isNaN(eur)) return;

    document.getElementById("result").innerHTML = `
      INR: ₹${(eur * 91).toFixed(2)}<br>
      USD: $${(eur * 1.1).toFixed(2)}<br>
      MYR: RM${(eur * 5.1).toFixed(2)}<br>
      GBP: £${(eur * 0.86).toFixed(2)}<br>
      JPY: ¥${(eur * 140).toFixed(2)}
    `;
  });
});
function goBack() {
  window.location.href = "currency-info.html"; 
} 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    const myr = parseFloat(document.getElementById("myrAmount").value);
    if (isNaN(myr)) return;

    document.getElementById("result").innerHTML = `
      INR: ₹${(myr * 18).toFixed(2)}<br>
      USD: $${(myr * 0.21).toFixed(2)}<br>
      EUR: €${(myr * 0.20).toFixed(2)}<br>
      GBP: £${(myr * 0.17).toFixed(2)}<br>
      JPY: ¥${(myr * 30).toFixed(2)}
    `;
  });
});
function goBack() {
  window.location.href = "currency-info.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    const gbp = parseFloat(document.getElementById("gbpAmount").value);
    if (isNaN(gbp)) return;

    document.getElementById("result").innerHTML = `
      INR: ₹${(gbp * 104).toFixed(2)}<br>
      USD: $${(gbp * 1.27).toFixed(2)}<br>
      EUR: €${(gbp * 1.16).toFixed(2)}<br>
      MYR: RM${(gbp * 5.7).toFixed(2)}<br>
      JPY: ¥${(gbp * 162).toFixed(2)}
    `;
  });
});
function goBack() {
  window.location.href = "currency-info.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("convertBtn").addEventListener("click", function () {
    const jpy = parseFloat(document.getElementById("jpyAmount").value);
    if (isNaN(jpy)) return;

    document.getElementById("result").innerHTML = `
      INR: ₹${(jpy * 0.61).toFixed(2)}<br>
      USD: $${(jpy * 0.0075).toFixed(4)}<br>
      EUR: €${(jpy * 0.0071).toFixed(4)}<br>
      MYR: RM${(jpy * 0.033).toFixed(4)}<br>
      GBP: £${(jpy * 0.0062).toFixed(4)}
    `;
  });
});
function goBack() {
  window.location.href = "currency-info.html"; 
}
