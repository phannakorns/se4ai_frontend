'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ImageUploader from '@/components/ImageUploader'
import DetectionResults from '@/components/DetectionResults'

interface Detection {
  class: string
  conf: number | null
}

interface PredictionResult {
  detections: Detection[]
  imagedetect: string
}

export default function Home() {
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePrediction = (data: PredictionResult) => {
    setResult(data)
    setError(null)
  }

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    setResult(null)
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
    setLoading(false)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl font-sans">
  {/* Banner */}
  <div className="mb-12 text-center relative">
    {/* Decorative background element (optional glow) */}
    <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20 blur-3xl">
      <div className="w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
      <div className="w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000 ml-10"></div>
    </div>

    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-600 mb-4 drop-shadow-sm">
      ระบบตรวจจับวัตถุด้วย YOLO
    </h1>
    <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide uppercase">
      663380038-8 | พรรณกร
    </p>
    <div className="mt-6 flex justify-center gap-4">
      {/* Glam Gold Badge */}
      <span className="inline-block bg-gradient-to-r from-amber-200 to-amber-400 text-amber-950 px-6 py-2 rounded-full text-sm font-bold shadow-sm border border-amber-300/50">
        ✨ Next.js Frontend
      </span>
      {/* Glam Emerald Badge */}
      <span className="inline-block bg-gradient-to-r from-emerald-700 to-teal-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
        🚀 Flask Backend
      </span>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Upload Section */}
    <div className="card bg-white/80 backdrop-blur-sm border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
        {/* Glam Number Circle with Gradient and Shadow */}
        <span className="bg-gradient-to-tr from-emerald-700 to-teal-400 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-emerald-200/50 text-lg">
          1
        </span>
              อัปโหลดรูปภาพ
            </h2>
            <ImageUploader
              onPrediction={handlePrediction}
              onError={handleError}
              onLoadingChange={setLoading}
            />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">
                  <strong>❌ เกิดข้อผิดพลาด:</strong> {error}
                </p>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-kku-gold text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                2
              </span>
              ผลการตรวจจับ
            </h2>
            <DetectionResults result={result} loading={loading} onReset={handleReset} />
          </div>
        </div>
      </main>
    </div>
  )
}