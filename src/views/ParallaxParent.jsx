import React, {useEffect, useState} from 'react'
import ProjectParallax from './ProjectParallax'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_PROJECT} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'

const ParallaxParent = () => {
  const {id} = useParams()
  const [richText, setRichText] = useState('')

  const {loading, error, data, refetch} = useQuery(GET_SINGLE_PROJECT, {
    fetchPolicy: 'network-only',
    variables: {projectSysId: id},
  })

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.project.description.json))
    }
  }, [data])

  if (!data) return
  let {description, picturesCollection} = data.project

  return (
    <>
      {}
      <ProjectParallax arr={picturesCollection.items} richText={richText} />
    </>
  )
}

export default ParallaxParent
