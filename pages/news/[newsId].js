// For extracting dynamic parameter values
import {useRouter} from 'next/router';

// domain/news/any-identifier


function DetailPage() {
      const router = useRouter();

     // .query gives us nested object
      const newsId = router.query.newsId;

      //Send a request to backend api
      //to fetch news item with newsid

      return <h1>The Detail Page</h1>
}

export default DetailPage;