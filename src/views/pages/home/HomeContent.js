import Center from "components/Center";
import CustomTypo from "components/CustomTypo";
import CategoryGrid from "./forms/CategoryGrid";

export default function HomeContent() {
  return (
    <div>
      <CategoryGrid />
      <Center className="mt-12 mb-9">
        <CustomTypo variant="h1">New Arrival</CustomTypo>
      </Center>
    </div>
  );
}
