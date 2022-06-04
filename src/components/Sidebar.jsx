import { Box, Stack, Link as ChakraLink, Text, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiTableLine  } from 'react-icons/ri';
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text
                    fontWeight="bold"
                    color="gray.400"
                    fontSize="small"
                    >Cadastrar</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <ChakraLink display="flex" as={Link} to="/cadastro/item">
                            <Icon as={RiTableLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium">Chamado</Text>
                        </ChakraLink >
                        <ChakraLink display="flex" as={Link} to="/cadastro/usuario">
                            <Icon as={RiContactsLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium">Usuário</Text>
                        </ChakraLink >
                    </Stack>
                </Box>
                {/* <Box>
                    <Text
                    fontWeight="bold"
                    color="gray.400"
                    fontSize="small"
                    >AUTOMAÇÃO</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" >
                            <Icon as={RiInputMethodLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium">Formulários</Text>
                        </Link>
                        <Link display="flex" >
                            <Icon as={RiGitMergeLine} fontSize="20"/>
                            <Text ml="4" fontWeight="medium">Automação</Text>
                        </Link>
                    </Stack>
                </Box> */}
            </Stack>
        </Box>
    );
}