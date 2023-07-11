import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg';

import React from 'react';

const Header = () => {
  return (
    <>
      <Image
        src={logo}
        alt='logo'
        width={50}
        marginBlock='1rem'
      />
      <Heading
        color='white'
        marginBottom='1rem'
      >
        AI keyword extractor
      </Heading>
      <Text
        fontSize={25}
        textAlign='center'
      >
        Paste in your text below and let the AI extract the keywords for you!
      </Text>
    </>
  );
};

export default Header;
