// Function untuk mengambil data user dari API menggunakan async/await
async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users"); // Menunggu response dari API
      const users = await response.json(); // Menunggu data diubah menjadi format JSON
  
      // Menampilkan data 'first_name' dan 'last_name' dari tiap user
      users.data.forEach(user => {
        console.log(`${user.first_name} ${user.last_name}`);
      });
    } catch (error) {
      console.error("Error:", error); // Menangani jika terjadi error
    }
  }
  
  // Memanggil function ambilDataUser
  ambilDataUser();
  