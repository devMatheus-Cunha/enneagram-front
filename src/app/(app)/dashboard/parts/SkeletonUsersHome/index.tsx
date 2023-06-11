import { Flex, SkeletonText, Spacer, Skeleton } from '@chakra-ui/react'
import React from 'react'

export default function SkeletonLoadingHome() {
  return (
    <>
      <Flex
        p={5}
        bg="gray.700"
        borderRadius={10}
        align="center"
        h={['95.63', '101.63', '101.3']}
      >
        <Flex direction="column" flex="1">
          <SkeletonText noOfLines={1} />
          <SkeletonText mt="4" noOfLines={1} />
        </Flex>
        <Spacer />
        <Flex gap={3}>
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          {/* <Skeleton h="45px" w="45px" borderRadius="0.375rem" /> */}
        </Flex>
      </Flex>
      <Flex
        p={5}
        bg="gray.700"
        borderRadius={10}
        align="center"
        h={['95.63', '101.63', '101.3']}
      >
        <Flex direction="column" flex="1">
          <SkeletonText noOfLines={1} spacing="4" skeletonHeight="2" />
          <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="2" />
        </Flex>
        <Spacer />
        <Flex gap={3}>
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          {/* <Skeleton h="45px" w="45px" borderRadius="0.375rem" /> */}
        </Flex>
      </Flex>
      <Flex
        p={5}
        bg="gray.700"
        borderRadius={10}
        align="center"
        h={['95.63', '101.63', '101.3']}
      >
        <Flex direction="column" flex="1">
          <SkeletonText noOfLines={1} spacing="4" skeletonHeight="2" />
          <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="2" />
        </Flex>
        <Spacer />
        <Flex gap={3}>
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          {/* <Skeleton h="45px" w="45px" borderRadius="0.375rem" /> */}
        </Flex>
      </Flex>
    </>
  )
}
