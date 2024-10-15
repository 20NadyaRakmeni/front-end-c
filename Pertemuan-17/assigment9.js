// myModule.js

// Function helloWorld menggunakan Promise
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000); // Durasi 2000ms atau 2 detik
    });
  }
  
  // Async function untuk menunggu hasil dari helloWorld
  async function messages() {
    const msg = await helloWorld(); // Menunggu Promise selesai
    console.log(msg); // Output: "Hello World!"
  }
  
  // Function untuk mengambil data user dari API menggunakan fetch
  function ambilDataUserFetch() {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json(); // Mengubah response menjadi format JSON
      })
      .then((users) => {
        // Menampilkan data 'first_name' dan 'last_name' dari tiap user
        users.data.forEach(user => {
          console.log(`${user.first_name} ${user.last_name}`);
        });
      })
      .catch((error) => {
        console.error("Error:", error); // Menangani jika terjadi error
      });
  }
  
  // Async function untuk mengambil data user dari API menggunakan Axios
  async function ambilDataUserAxios() {
    try {
      const response = await axios.get("https://reqres.in/api/users"); // Menunggu response dari API
  
      // Menampilkan data 'first_name' dan 'last_name' dari tiap user
      response.data.data.forEach(user => {
        console.log(`${user.first_name} ${user.last_name}`);
      });
    } catch (error) {
      console.error("Error:", error); // Menangani jika terjadi error
    }
  }
  
  // Mengekspor fungsi-fungsi agar bisa digunakan di file lain
  module.exports = {
    helloWorld,
    messages,
    ambilDataUserFetch,
    ambilDataUserAxios
  };
  