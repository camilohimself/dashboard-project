import CulturePeintureDashboard from '@/components/ui/CulturePeintureDashboard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Culture Peinture - Rapport de Performance OSOM',
  description: 'Rapport détaillé des performances marketing : 688 nouveaux clients vs 49 avec méthodes classiques. ROI, coûts et résultats mesurés.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CulturePeintureDashboard className="w-full" />
      </div>
    </div>
  )
}