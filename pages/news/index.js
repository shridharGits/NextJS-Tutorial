// our-domain/news/something-important
import { Fragment } from "react"
import Link from 'next/link'
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/package'>
            10+ LPA Package coming soon
          </Link>
          </li>
        <li>SDE Shridhar Shriganesh Kalukhe</li>
      </ul>
    </Fragment> 
  )
}

export default NewsPage