export default function middleware(page) {
  let navStyle = document.querySelector('.nav-container').style
  let body = document.querySelector('body').style
  let html = document.querySelector('html').style
  switch (page) {
    case '/':
      break
    case 'journal':
      break
    case 'projects':
      break
    case 'project':
      break
    case 'about':
      break
    case 'contact':
      break
    case 'zepto':
      html.width = '100%'
      html.height = '110%'
      html.maxHeight = '880px'
      html.overflow = 'hidden'
      html.position = 'absolute'

      body.width = '100%'
      body.height = '110%'
      body.maxHeight = '880px'
      body.overflow = 'hidden'
      body.position = 'absolute'

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
