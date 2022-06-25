import logo from "assets/images/logos/logo.svg";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

export default function Logo({ isPublish = false }) {
  const content = <CustomImage src={logo} className="sm-down:h-12" />;
  return isPublish ? content : <CustomLink to="/">{content}</CustomLink>;
}
