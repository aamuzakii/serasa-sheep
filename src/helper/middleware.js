export default function middleware(page) {
  let navStyle = document.querySelector('.nav-container').style
  let body = document.querySelector('body').style
  let html = document.querySelector('html').style
  let a = document.querySelector('.nav-container').style
  a.display = 'block'
  window.scrollTo(0, 0) // solve bug
  if (typeof window !== 'undefined') localStorage.setItem('prev_page', 'non-zepto')

  switch (page) {
    case 'hall-video':
      a.position = 'absolute'
      a.top = '0px'
      a.display = 'block'
      break
    case 'journal':
      a.position = 'static'
      a.display = 'block'
      break
    case 'project':
      a.display = 'block'
      let width = document.body.clientWidth
      if (width < 425) {
        // mobile device
        a.position = 'static'
      } else {
        a.position = 'fixed'
      }
      break
    case 'project-parallax':
      a.display = 'none'
      break
    case 'projects':
      a.display = 'block'
      break
    case 'about':
      break
    case 'contact':
      a.display = 'block'
      a.position = 'absolute'
      a.top = '0px'
      break
    case 'zepto': // team
      if (typeof window !== 'undefined') localStorage.setItem('prev_page', 'zepto')

      a.position = 'absolute'
      a.top = '0px'
      a.display = 'block'
      break
    default:
      navStyle.display = 'block'
      break
  }
}
