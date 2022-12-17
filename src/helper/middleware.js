export default function middleware(page) {
  let navStyle = document.querySelector('.nav-container').style
  let body = document.querySelector('body').style
  let html = document.querySelector('html').style
  navStyle.display = 'block'
  window.scrollTo(0, 0) // solve bug
  if (typeof window !== 'undefined') localStorage.setItem('prev_page', 'non-zepto')

  switch (page) {
    case 'hall-video':
      navStyle.position = 'absolute'
      navStyle.top = '0px'
      navStyle.display = 'block'
      break
    case 'journal':
      navStyle.position = 'static'
      navStyle.display = 'block'
      break
    case 'project':
      navStyle.display = 'block'
      let width = document.body.clientWidth
      if (width < 425) {
        // mobile device
        navStyle.position = 'static'
      } else {
        navStyle.position = 'fixed'
      }
      break
    case 'project-parallax':
      navStyle.display = 'none'
      break
    case 'projects':
      navStyle.display = 'block'
      break
    case 'about':
      break
    case 'contact':
      navStyle.display = 'block'
      navStyle.position = 'absolute'
      navStyle.top = '0px'
      break
    case 'zepto': // team
      if (typeof window !== 'undefined') localStorage.setItem('prev_page', 'zepto')

      navStyle.position = 'absolute'
      navStyle.top = '0px'
      navStyle.display = 'block'
      break
    default:
      navStyle.display = 'block'
      break
  }
}
