import { useMutation } from 'convex/react'
import React, { useState } from 'react'

export function useApiMutation(mutationFn: any) {
const [pending, setPending] = useState(false)
const apiMutation = useMutation(mutationFn)

 const mutate = async (payload: any) => {
    setPending(true);
    try {
         try {
             const result = await apiMutation(payload)
             return result
         } catch (err) {
             throw err
         }
     } finally {
         return setPending(false)
     }
 }

 return {
    pending,
    mutate
 }
}
