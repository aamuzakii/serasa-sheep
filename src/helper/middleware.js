export default function middleware(page) {
  let navStyle = document.querySelector('.nav-container').style
  let body = document.querySelector('body').style
  let html = document.querySelector('html').style
  let a = document.querySelector('.nav-container').style
  a.display = 'block'
  window.scrollTo(0, 0) // solve bug

  switch (page) {
    case '/':
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
    case 'projects':
      a.display = 'block'
      break
    case 'about':
      break
    case 'contact':
      break
    case 'zepto':
      a.position = 'absolute'
      a.top = '0px'
      a.display = 'block'

      // html.width = '100%'
      // html.height = '110%'
      // html.maxHeight = '880px'
      // html.overflow = 'hidden'
      // html.position = 'absolute'

      // body.width = '100%'
      // body.height = '110%'
      // body.maxHeight = '880px'
      // body.overflow = 'hidden'
      // body.position = 'absolute'

      break
    default:
      navStyle.display = 'block'
      break
  }
}

// html,
// body,
// div {
//   width: 100%;
//   height: 110%;
//   max-height: 880px;
//   overflow: hidden;
//   position: absolute;
// }
