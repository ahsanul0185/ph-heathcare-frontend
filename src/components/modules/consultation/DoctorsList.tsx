"use client"

import { getDoctors } from '@/app/(commonLayout)/consultation/_actions'
import { useQuery } from '@tanstack/react-query'

export default function DoctorsList() {

const { data } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => getDoctors(),
  })

  const {data : nonPrefetchData} = useQuery({
    queryKey: ['doctors-nonprefetch'],
    queryFn: () => getDoctors(),
  })

  console.log({data})
  console.log({nonPrefetchData})

  return (
    <div></div>
  )
}
