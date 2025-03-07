const toggleBtn = document.querySelector('.toggle-btn');
let dark = localStorage.getItem('dark');

  const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('dark', 'active');
  }
  
const disableDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('dark', null);
  }

  toggleBtn.addEventListener('click', () =>{
    dark = localStorage.getItem('dark');
    dark !== 'active' ? enableDarkMode() : disableDarkMode();
  });
  
dark === 'active' ? enableDarkMode() : disableDarkMode();



// const toggleBtn = document.querySelector('.toggle-btn');
// let dark = localStorage.getItem('dark');

//   const enableDarkMode = () => {
//     document.body.classList.add('dark');
//     // localStorage.setItem('dark', 'active');
//   }
  
// const disableDarkMode = () => {
//     document.body.classList.remove('dark');
//     localStorage.setItem('dark', null);
//   }

//   toggleBtn.addEventListener('click', () =>{
//     dark = localStorage.setItem('dark', 'active');
//     // dark !== 'active' ? enableDarkMode() : disableDarkMode();
//     document.body.classList.toggle('dark')
//   });
  
// dark === 'active' ? enableDarkMode() : disableDarkMode();