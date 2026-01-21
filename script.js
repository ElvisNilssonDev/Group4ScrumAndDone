let qty = 1;

const PRICE = 1999.99;     
const SHIPPING = 300;   
let taxBase = 200;      

function money(n) {
  return "€" + n.toFixed(0);
}

function recalc() {
  const subtotal = PRICE * qty;
  const tax = Math.round((taxBase / 1999,9) * subtotal); 
  const total = subtotal + SHIPPING + tax;

  document.getElementById("qtyNum").textContent = qty;
  document.getElementById("subtotal").textContent = money(subtotal);
  document.getElementById("shipping").textContent = money(SHIPPING);
  document.getElementById("tax").textContent = money(tax);
  document.getElementById("total").textContent = money(total);
  document.getElementById("payTotal").textContent = money(total);

  const paid = document.getElementById("paidTotal");
  if (paid) paid.textContent = money(total);
}

function changeQty(delta) {
  qty = Math.max(1, qty + delta);
  recalc();
}

function applyPromo() {
  const code = (document.getElementById("promo").value || "").trim().toUpperCase();
  if (code === "ELIXIR10") {
    taxBase = 12;
  } else {
    taxBase = 19;
  }
  recalc();
}

function completePurchase() {
  const id = "ELX-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("orderId").textContent = id;

  document.getElementById("checkout").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");

  recalc();

  document.getElementById("success").scrollIntoView({ behavior: "smooth", block: "start" });
}

recalc();
