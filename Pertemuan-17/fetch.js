// Function untuk mengambil data user dari API
function ambilDataUser() {
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
  
  // Memanggil function ambilDataUser
  ambilDataUser();
  