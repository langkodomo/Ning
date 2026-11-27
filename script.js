onload = () => {
  document.body.classList.remove("container");
  
  // Fix the main.js 404 error
  const scriptElements = document.querySelectorAll('script');
  scriptElements.forEach(script => {
    if (script.src.includes('main.js')) {
      script.remove();
    }
  });
};