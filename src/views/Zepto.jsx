import React, {useEffect, useState} from 'react'
import middleware from '../helper/middleware'
import {useQuery} from '@apollo/client'
import {GET_ABOUT_PAGE} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'
import {useZepto} from '../helper/useZepto'

const Zepto = () => {
  let {loading, error, data, refetch} = useQuery(GET_ABOUT_PAGE, {
    fetchPolicy: 'network-only',
    variables: {staticSysId: '7xr37H6HNyz32EhhYCb9kZ'},
  })
  const [richText, setRichText] = useState('')

  useEffect(() => {
    if (localStorage.getItem('prev_page') === 'non-zepto') {
      window.location.reload(false)
    }
    middleware('zepto')
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.staticData.content.json))
    }
  }, [data])

  useZepto()

  return (
    <div className="main">
      <div className="annn">
        <Markup content={richText} />
      </div>
      <div className="mainBoxes fs"></div>
      <div className="mainClose">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" fill="none">
          <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4" />
          <path d="M15,16L45,46 M45,16L15,46" stroke="#000" strokeWidth="3.5" opacity="0.5" />
          <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

export default Zepto
