'use client'

import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Spacer,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import SkeletonUsersHome from './parts/SkeletonUsersHome'

export default function LoadingHome() {
  return (
    <>
      <Flex w="full" bg="gray.700" p={3} height="57px">
        <Spacer />
        <Flex align="center" gap={6} mr={8}>
          <SkeletonText noOfLines={1} fontSize="sm">
            Light
          </SkeletonText>
          <SkeletonText noOfLines={1} fontSize="sm">
            Dark
          </SkeletonText>
          <SkeletonText noOfLines={1} fontSize="sm">
            Dark
          </SkeletonText>
        </Flex>
      </Flex>
      <VStack spacing={4} align="stretch" p={8}>
        <Box bg="gray.700" p={4} borderRadius={10} lineHeight={8} h="112.5">
          <SkeletonText noOfLines={1} spacing={4} w="150px" />
          <SkeletonText noOfLines={2} spacing={4} mt={4} />
        </Box>

        <Flex p={4} borderRadius={10}>
          <Skeleton height="45px" width="85.43px" borderRadius={10} />
          <Spacer />
          <Skeleton height="45px" width="190px" borderRadius={10} />
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          minChildWidth="340px"
        >
          <SkeletonUsersHome />
        </SimpleGrid>
      </VStack>
    </>
  )
}
