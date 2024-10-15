// Pastikan Axios sudah diimpor
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> (jika di browser)

// Function untuk mengambil data user dari API menggunakan Axios
async function ambilDataUser() {
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
  
  // Memanggil function ambilDataUser
  ambilDataUser();
  