import { Image, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ImageShop from '../asset/img/fastfood.png';

export default function Navbar() {
  const navegate = useNavigate();
  const redirect = () => {
    navegate("/")
  };

  return (
    <Box
      display="block"
      alignItems="center"
      justifyContent="space-evenly"
      borderBottom="3px Solid #AED6F1"
    >

      <Image
        src={ImageShop}
        alt="Logotype"
        width={75}
        alignItems="center"
        margin="0 auto"
        cursor="pointer"
        onClick={redirect}
      />
      <Heading
        as="h1"
        size="sm"
        isTruncated
        textTransform="uppercase"
        textAlign="center"
        fontWeight="900"
        fontSize="36px"
        paddingBottom="5"
        fontFamily={"'Merienda', cursive"}
      >Food Truck New Generation</Heading>
    </Box>
  );
};