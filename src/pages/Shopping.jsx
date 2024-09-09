import React, { useState } from "react";
import Comman from "../componant/comman/Comman";
import { Container, Row, Col } from "reactstrap";
import { CiSearch } from "react-icons/ci";
import module from "./shop.module.css";
import ProductData from "../componant/Product/ProductData";
import ProductList from "../UI/ProductList";
import { Link } from "react-router-dom";
function Shopping() {
  const [productDatas, setProductDatas] = useState(ProductData);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "watch") {
      const filterProduct = ProductData.filter((catItem) => {
        return catItem.name.toLowerCase().includes(filterValue.toLowerCase());
      });
      setProductDatas(filterProduct);
    }
    if (filterValue === "mobile") {
      const filterProduct = ProductData.filter((catItem) => {
        return catItem.name.toLowerCase().includes(filterValue.toLowerCase());
      });
      setProductDatas(filterProduct);
    }
    if (filterValue === "chair") {
      const filterProduct = ProductData.filter((catItem) => {
        return catItem.category
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      });
      setProductDatas(filterProduct);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProduct = ProductData.filter((cateItem) => {
      return cateItem.category
        .toLocaleLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setProductDatas(searchProduct);
  };
  const handleSort = (e) => {
    const sortValue = e.target.value;
    const sortProduct = [...ProductData].sort((a, b) => {
      if (sortValue === "ascending") {
        return a.name.localeCompare(b.name);
      } else if (sortValue === "descending") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
    setProductDatas(sortProduct);
  };

  return (
    <>
      <Comman title="Wellcome to shopping"></Comman>
      <Container>
        <Row>
          <Col md="3" lg="3">
            <div className={module.Filter_wegit}>
              <select onChange={handleFilter}>
                <option>Filter by Catergory</option>
                <option value="watch">Watch</option>
                <option value="chair">Chair</option>
                <option value="mobile">Mobile</option>
                <option value="Mobie">obile</option>
              </select>
            </div>
          </Col>
          <Col md="3" lg="3">
            <div className={module.Filter_wegit}>
              <select onChange={handleSort}>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col md="3" lg="6">
            <div className={module.search_box}>
              <input type="text" placeholder="Search" onChange={handleSearch} />
              <span>
                <CiSearch />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {productDatas.length <= 0 ? (
            <p>there is no product</p>
          ) : (
            <ProductList data={productDatas} />
          )}
        </Row>
      </Container>
    </>
  );
}

export default Shopping;
