import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const params = useParams()

  return (
    <div className='p-2'>
      <h1>{params.productTitle}</h1>
    </div>
  )
}

export default ProductDetailPage;
