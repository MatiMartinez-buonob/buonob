import React from "react"

import Layout from "../components/shared/layout/layout"
import Header from "../components/products/Header"
import WinesGrid from "../components/products/WinesGrid"
import FinalLine from "../components/common/FinalLine"
import SEO from "../components/seo"

const Products = () => {
  return (
    <Layout padding>
      <SEO title="Productos" />
      <Header />
      <WinesGrid />
      <FinalLine />
    </Layout>
  )
}

export default Products
