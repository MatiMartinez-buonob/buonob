import React from "react"

import Layout from "../components/shared/layout/layout"
import Header from "../components/products/Header"
import WinesGrid from "../components/products/WinesGrid"
import FinalLine from "../components/common/FinalLine"

const Products = () => {
  return (
    <Layout padding>
      <Header />
      <WinesGrid />
      <FinalLine />
    </Layout>
  )
}

export default Products
