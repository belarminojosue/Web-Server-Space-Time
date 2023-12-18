'use client'

export default function Eeeeeerror({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.log(reset, error)
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        {error.message}{' '}
        <a href="" onClick={reset} className="underline hover:text-gray-50">
          tente novamente!
        </a>
        !
      </p>
    </div>
  )
}
