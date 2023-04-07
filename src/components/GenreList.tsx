import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import UseGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="36px"
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Text fontSize="lg">{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
