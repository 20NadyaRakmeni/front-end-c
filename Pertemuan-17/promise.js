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
  
  // Memanggil function messages
  messages();
  