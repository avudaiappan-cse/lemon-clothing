import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryDescription,
  DirectoryItemBody,
  DirectoryItemContainer,
  DirectoryTitle,
} from "./directory-item.styles";

const DirectoryItem = ({ title, imageUrl, route }) => {
  console.log(route);
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBody>
        <DirectoryTitle>{title}</DirectoryTitle>
        <DirectoryDescription onClick={onNavigateHandler}>
          Shop Now
        </DirectoryDescription>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
