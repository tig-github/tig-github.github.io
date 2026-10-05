/*
Modal that displays links for a given resource
*/
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Stack,
    Text,
    List,
    ListItem,
    Link,
} from '@chakra-ui/react';
  
const ResourceModal = ({isOpen, onClose, resource, resourceLinks, icon}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} variant="purple" preserveScrollBarGap>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text align="center" fontSize="3xl"> 
                        {resource} Resources
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack align="center" pb="1rem">
                        {icon}
                        <List styleType="disc" pt="2rem">
                            {Object.keys(resourceLinks).map(r => {
                                return (
                                    <ListItem mt="5%" key={Math.random()*1000}>
                                        <Link href={resourceLinks[r]} isExternal>
                                            {r}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
      );
  }

  export default ResourceModal;