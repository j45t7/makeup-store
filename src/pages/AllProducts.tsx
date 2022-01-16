import { NavLink } from 'react-router-dom'
import ProductItem from '../components/ProductItem/ProductItem'
import { useAppSelector } from '../hooks/hooks'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  PageTitleWrapper,
} from '../components/GlobalStyles/GlobalStyles'

const AllProducts = () => {
  const products = useAppSelector((state) => state.products.products)
  return (
    <ContainerWrapper>
      {/* TODO: pages */}
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>Our Products</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Subtitle>
        </TitleWrapper>
      </PageTitleWrapper>
      <ProductsWrapper>
        {products.map((product) => (
          <NavLink key={product.id} to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </NavLink>
        ))}
      </ProductsWrapper>
    </ContainerWrapper>
  )
}

export default AllProducts
