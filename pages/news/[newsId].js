// our-domain/news/something-important
import { useRouter } from 'next/router'
const DetailPage = () => {
    const router = useRouter();

    if(router.query.newsId){
      console.log(router.query.newsId);
    }
    return (
      <div>
        <h1>This page is from next js [identifier]</h1>
        <p>{router.query.newsId}</p>
      </div>
    )
}
  
  export default DetailPage 