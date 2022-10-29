import React, {useEffect, useState} from 'react'
import ProjectParallax from './ProjectParallax'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_PROJECT} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import spinner from '../assets/spinner.png'

const ParallaxParent = () => {
  const {id} = useParams()
  const [richText, setRichText] = useState('')
  const [isPreloadReady, setisPreloadReady] = useState(false)

  const {loading, error, data, refetch} = useQuery(GET_SINGLE_PROJECT, {
    fetchPolicy: 'network-only',
    variables: {projectSysId: id},
  })

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.project.description.json))
    }
  }, [data])

  function preloadImages(images) {
    for (let i = 0; i < images.length; i++) {
      let l = document.createElement('link')
      l.rel = 'preload'
      l.as = 'image'
      l.href = images[i]
      document.head.appendChild(l)
    }
  }

  let imageUrlHeap = []

  if (!data) return
  let {description, picturesCollection} = data.project

  imageUrlHeap = picturesCollection.items.map(({url}) => url)

  preloadImages(imageUrlHeap)

  setTimeout(() => {
    setisPreloadReady(true)
  }, 900)
  if (!isPreloadReady) return <img className="spinner" src={spinner} alt="spinner" />

  return (
    <>
      <ProjectParallax arr={picturesCollection.items} richText={richText} />
    </>
  )
}

export default ParallaxParent
