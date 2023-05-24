import { Flex, SkeletonText, Spacer, Skeleton } from '@chakra-ui/react'
import React from 'react'

export default function SkeletonLoadingHome() {
  return (
    <>
      <Flex
        p={5}
        w="456px"
        h="101.63px"
        bg="gray.700"
        borderRadius={10}
        align="center"
      >
        <Flex direction="column" flex="1">
          <SkeletonText
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
            w="79.57px"
          />
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
            w="79.57px"
          />
        </Flex>
        <Spacer />
        <Flex gap={3}>
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
        </Flex>
      </Flex>
      <Flex
        p={5}
        w="456px"
        h="101.63px"
        bg="gray.700"
        borderRadius={10}
        align="center"
      >
        <Flex direction="column" flex="1">
          <SkeletonText
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
            w="79.57px"
          />
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
            w="79.57px"
          />
        </Flex>
        <Spacer />
        <Flex gap={3}>
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
        </Flex>
      </Flex>
      <Flex
        p={5}
        w="456px"
        h="101.63px"
        bg="gray.700"
        borderRadius={10}
        align="center"
      >
        <Flex direction="column" flex="1">
          <SkeletonText
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
            w="79.57px"
          />
          <SkeletonText
            mt="4"
            noOfLines={1}
            spacing="4"
            skeletonHeight="2"
            w="79.57px"
          />
        </Flex>
        <Spacer />
        <Flex gap={3}>
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
          <Skeleton h="45px" w="45px" borderRadius="0.375rem" />
        </Flex>
      </Flex>
    </>
  )
}
