import { Card } from '~/components/ui/card'

export const ComingSoonCard = () => {
  return (
    <Card className="h-[450px] p-8">
      <div className="border-2 border-dashed w-full h-full flex flex-col justify-center items-center rounded-lg p-4">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl sm:text-3xl font-bold">Coming Soon!</h2>
            <p className="text-center">New features will be released monthly</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
