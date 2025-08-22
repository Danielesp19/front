import { Button } from '@/components/ui/button'
import { Menubar } from '@radix-ui/react-menubar'
import React from 'react'

function page() {
  return (
    <div>
      <Button>holaa</Button>
      <Menubar>  <Button>holaa</Button></Menubar>
    </div>
  )
}

export default page
