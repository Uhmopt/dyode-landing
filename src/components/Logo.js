import logo from "assets/images/logos/logo.svg";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

export default function Logo({ isPublish = false }) {
  const content = <CustomImage src={logo} />;
  return isPublish ? content : <CustomLink to="/">{content}</CustomLink>;
}
