import React from 'react'

const Loading = () => {
  return (
    <div class="main-content w-full px-[var(--margin-x)] pt-32 mt-10">
    <div className="  flex flex-col justify-center items-center">
    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
    <div className="pt-2 text-xl">Page is Loading </div>
    </div>
</div>
  )
}

export default Loading