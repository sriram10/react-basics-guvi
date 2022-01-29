import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

const DealInfoPage = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const [q] = useSearchParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${params.dealId}`)
      .then(res => res.json())
      .then(response => {
        setData(response)
      })
      .catch(e => {
        console.log(e)
      })
  }, [params.dealId])

  console.log('Query String > ', q.get('type'))

  return (
    <div className='p-2'>
      <h1>{data.title}</h1>
      <img src={data.url} />
    </div>
  )
}

export default DealInfoPage;
