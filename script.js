import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔹 Configuración de Firebase (tuya)
const firebaseConfig = {
  apiKey: "AIzaSyDVwkPEd3vSkzBRrzlioTTNVVscYb54xf4",
  authDomain: "qh-accounts.firebaseapp.com",
  projectId: "qh-accounts",
  storageBucket: "qh-accounts.appspot.com",
  messagingSenderId: "612428730491",
  appId: "1:612428730491:web:a89c1b883ada85ee7592de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Cargar apps desde Firestore
async function cargarApps() {
  const contenedor = document.getElementById("planes");
  contenedor.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "apps"));
  querySnapshot.forEach((doc) => {
    const app = doc.data();
    contenedor.innerHTML += `
      <div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
        <img src="${app.logo}" alt="${app.nombre}" class="mx-auto h-16 mb-4">
        <h3 class="text-xl font-bold">${app.nombre}</h3>
        <p class="text-gray-500 mt-2">${app.descripcion}</p>
        <p class="text-2xl font-bold mt-4">S/ ${app.precio}</p>
        <a href="https://wa.me/51928279922" target="_blank" class="block mt-4 bg-purple-900 text-white py-2 rounded-lg hover:bg-purple-700">Comprar</a>
      </div>
    `;
  });
}

cargarApps();
