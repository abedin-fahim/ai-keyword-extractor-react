import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  const toast = useToast();
  const copyHandler = () => {
    navigator.clipboard.writeText(keywords);
    toast({
      title: 'Keywords copied.',
      description: 'The keywords successfully copied to clipboard!',
      status: 'success',
      duration: 5000,
      isClosable: false,
    });
    closeModal();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            {loading ? (
              <CircularProgress
                isIndeterminate
                color='blue.300'
              />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            {!loading && (
              <Button
                textAlign='center'
                colorScheme='blue'
                mr={3}
                onClick={copyHandler}
              >
                Copy
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default KeywordsModal;
