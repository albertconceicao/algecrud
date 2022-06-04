import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar';



export const CreatePage = () => {
    return (
        <Box>
            {/* <Header /> */}
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
                >
                    
                <Sidebar />
                {/* <Box flex="1" borderRadius={8} bg="gray.300" p="8">
                    <Text fontSize="lg" mb="4">Chamados</Text>
                    <Chart type="area" height={160} options={options} series={series} />
                </Box>
                <Box flex="1" borderRadius={8} bg="gray.300" p="8">
                    <Text fontSize="lg" mb="4">Usuários</Text>
                    <Chart type="area" height={160} options={options} series={series} />
                </Box> */}
            </Flex>

        </Box>
        
    );
}