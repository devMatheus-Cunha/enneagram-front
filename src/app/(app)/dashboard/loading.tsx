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
      {/* Content */}
      <VStack spacing={8} align="stretch" p={['2', '4', '6']}>
        {/* Section Content Info */}
        <Box
          bg="gray.700"
          p={4}
          borderRadius={10}
          h={['162px', '143.91px', '103.5px']}
        >
          <SkeletonText noOfLines={1} w="150px" />
          <SkeletonText noOfLines={[6, 3]} fontSize={['sm', 'md']} mt={3} />
        </Box>

        {/* Actions Buttons */}
        <Flex>
          <Skeleton height="45px" width="85.43px" borderRadius={10} />
          <Spacer />
          <Skeleton height="45px" width="190px" borderRadius={10} />
        </Flex>

        {/* Users Data */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          minChildWidth={['100%', '50%', '31%']}
        >
          <SkeletonUsersHome />
        </SimpleGrid>
      </VStack>
    </>
  )
}
