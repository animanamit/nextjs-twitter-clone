import React, { SVGProps } from 'react'

interface ISidebarRowProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({ Icon, title }: ISidebarRowProps) {
  return (
    <div className="flex items-center px-4 py-4 space-x-2 transition-all duration-200 rounded-full cursor-pointer group max-w-fit hover:bg-gray-100">
      <Icon className="w-6 h-6" />
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
