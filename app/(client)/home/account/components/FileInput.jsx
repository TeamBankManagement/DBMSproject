import React from 'react'

const FileInput = ({data,setData}) => {
  return (
    <div className="mx-auto max-w-xs">
  <label htmlFor="example5" className="mb-1 block text-sm font-medium text-gray-700">Upload file</label>
  <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
    <div className="space-y-1 text-center">
      <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      </div>
      <div className="text-gray-600"><a href="#" className="font-medium text-primary-500 hover:text-primary-700">Click to upload</a> or drag and drop {data && data.name}</div>
      <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
    </div>
    <input  type="file" onChange={(e)=>setData(e.target.files?.[0])} className="sr-only" />
  </label>
</div>
  )
}

export default FileInput