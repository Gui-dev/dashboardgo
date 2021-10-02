import { Box, Stack, Text } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

type PaginationProps = {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage: number
  onChangePage: (page: number) => void
}

export const Pagination = ({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onChangePage
}: PaginationProps) => {
  const siblingsCount = 1

  const generatePagesArray = (from: number, to: number) => {
    return [...new Array(to - from)].map((_, index) => {
      return from + index + 1
    }).filter(page => page > 0)
  }

  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage)
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      align="center"
      justify="space-between"
      direction={['column', 'row']}
      mt="8"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        { currentPage > (1 + siblingsCount) && (
            <>
              <PaginationItem onChangePage={ onChangePage } number={ 1 }/>
              { currentPage > (2 + siblingsCount) && (
                <Text color="gray.300" textAlign="center" w="8">...</Text>
              )}
            </>
        ) }

        { previousPages.length > 0 && previousPages.map(page => {
          return (
            <PaginationItem onChangePage={ onChangePage } key={String(page)} number={ page }/>
          )
        }) }

        <PaginationItem onChangePage={ onChangePage } number={ currentPage } isCurrent/>

        { nextPages.length > 0 && nextPages.map(page => {
          return (
            <PaginationItem onChangePage={ onChangePage } key={String(page)} number={ page }/>
          )
        }) }

        { (currentPage + siblingsCount) < lastPage && (
            <>
              { (currentPage + 1 + siblingsCount) < lastPage && (
                <Text color="gray.300" textAlign="center" w="8">...</Text>
              )}
              <PaginationItem onChangePage={ onChangePage } number={ lastPage }/>
            </>
        ) }

      </Stack>
    </Stack>
  )
}
