import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_COMPANY_PAGE} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'
import middleware from '../helper/middleware'

function Company() {
  let {loading, error, data, refetch} = useQuery(GET_COMPANY_PAGE, {
    fetchPolicy: 'network-only',
    variables: {staticSysId: '7xr37H6HNyz32EhhYCb9kZ'},
  })
  const [richText, setRichText] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'absolute'
    a.top = '0px'
    a.display = 'block'
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.staticData.content.json))
    }
  }, [data])

  return (
    <div className="container company">
      <div className="right">
        <Markup content={richText} />
      </div>
    </div>
  )
}

export default Company
