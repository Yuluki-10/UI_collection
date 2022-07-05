'use strict';

{
  const dts = document.querySelectorAll('.faq__q');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('-appear')
    })
  })

} 