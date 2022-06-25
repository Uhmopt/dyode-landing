import accessoriesImage from "assets/images/cards/Accessories Image.png";
import mensImage from "assets/images/cards/Mens Image.png";
import womensImage from "assets/images/cards/Womens Image.png";
import productImage from "assets/images/products/Product Image 1.png";
import Center from "components/Center";
import CustomTypo from "components/CustomTypo";
import CategoryGrid from "./forms/CategoryGrid";
import ProductGrid from "./forms/ProductGrid";

export default function HomeContent() {
  return (
    <div>
      <CategoryGrid
        data={[
          { image: womensImage, title: "Women's" },
          { image: mensImage, title: "Men's" },
          { image: accessoriesImage, title: "Accessories" },
        ]}
      />
      <Center className="mt-12 mb-9">
        <CustomTypo variant="h1">New Arrival</CustomTypo>
      </Center>
      <ProductGrid
        data={[
          {
            image: productImage,
            title: "Product Title",
            name: "Women's T-Shirt",
            price: 19.99,
          },
          {
            image: productImage,
            title: "Product Title",
            name: "Women's T-Shirt",
            price: 19.99,
          },
          {
            image: productImage,
            title: "Product Title",
            name: "Women's T-Shirt",
            price: 19.99,
          },
          {
            image: productImage,
            title: "Product Title",
            name: "Women's T-Shirt",
            price: 19.99,
          },
        ]}
      />
    </div>
  );
}
