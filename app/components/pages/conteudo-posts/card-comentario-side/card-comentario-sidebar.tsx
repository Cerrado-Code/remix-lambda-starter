import React from 'react'
import { Card } from '~/components/ui/card'

function CardComentarioSidebar() {
  return (
    <Card className="flex  items-center">
        <div className="bg-white p-4 px-3 w-full">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⚡</span>
              <span className="font-semibold">Assigned to You</span>
            </div>
            <span className="text-xs text-gray-500">4 days ago</span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="font-semibold text-gray-800">
              Igor Matheus Mendes
            </span>
          </div>

          <p className="text-gray-700 mb-4">Concordo plenamente!</p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="flex items-center">
                <span className="w-4 h-4 inline-block bg-gray-400 rounded-full mr-1"></span>
                Neutral
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="w-5 h-5 text-gray-500">🤍</span>
              <span className="w-5 h-5 text-gray-500">✔️</span>
            </div>
          </div>
        </div>
      </Card>
  )
}

export default CardComentarioSidebar