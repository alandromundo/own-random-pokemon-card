import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox='0 0 400 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='13' y='4' rx='2' ry='2' width='348' height='151' />
    <circle cx='181' cy='157' r='66' />
    <rect x='83' y='238' rx='10' ry='10' width='202' height='40' />
  </ContentLoader>
)

export default SkeletonLoader
