export default function middleware(page) {
  let navStyle = document.querySelector('.nav-container').style
  let body = document.querySelector('body').style
  let html = document.querySelector('html').style
  navStyle.display = 'block'
  navStyle.background = 'white'
  window.scrollTo(0, 0) // solve bug
  if (typeof window !== 'undefined') localStorage.setItem('prev_page', 'non-zepto')

  switch (page) {
    case 'hall-video':
      navStyle.background = 'rgba(0,0,0,0)'
      break;
    default:
      break;
  }
}
