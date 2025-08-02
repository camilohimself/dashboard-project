'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DashboardProps {
  className?: string
  showFullDashboard?: boolean
}

interface TooltipProps {
  content: string
  children: React.ReactNode
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 z-50 whitespace-nowrap border border-gray-700">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )
}

const CulturePeintureDashboard = ({ className = '', showFullDashboard = false }: DashboardProps) => {
  const [activeSection, setActiveSection] = useState('roi')
  
  // Métriques business critiques avec calculs corrects
  const businessMetrics = {
    investment: 6000, // CHF investis
    newClients: 688,  // Nouveaux clients OSOM
    competitorClients: 49, // Clients méthode classique
    costPerClient: 8.7, // 6000/688
    industryCostPerClient: 122, // 6000/49
    totalRevenue: 47040, // Estimation conservative 68.4 CHF/client moyen
    netProfit: 41040, // Revenue - investment
    multiplier: 14 // 688/49
  }

  const monthlyBudgetReallocation = {
    currentMonthly: 2000, // CHF/mois actuellement en Google Ads
    period: 5, // Août à Décembre 2025
    totalBudget: 10000, // 2000 x 5 mois
    projectedNewClients: 573, // Basé sur performance actuelle
    projectedRevenue: 39192 // Conservative estimate
  }

  return (
    <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 shadow-xl ${className}`}>
      {/* Header avec proposition de valeur */}
      <div className="p-8 border-b border-gray-200 bg-white rounded-t-3xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Rapport de Performance Culture Peinture
          </h1>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <p className="text-xl font-semibold text-green-800 mb-2">
              6,000 CHF investis = 688 nouveaux clients vs 49 avec publicité classique
            </p>
            <p className="text-lg text-green-700">
              Résultat : 8.7 CHF par client au lieu de 122 CHF (économie de 113 CHF/client)
            </p>
          </div>
        </div>
      </div>

      {/* Navigation simplifiée */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setActiveSection('roi')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeSection === 'roi' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ROI Business
          </button>
          <button
            onClick={() => setActiveSection('comparison')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeSection === 'comparison' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Comparaison
          </button>
          <button
            onClick={() => setActiveSection('budget')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeSection === 'budget' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Budget 2025
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="p-8">
        {activeSection === 'roi' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">ROI Business - Résultats Financiers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Investissement vs Retour */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Investissement Total</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">{businessMetrics.investment.toLocaleString()} CHF</div>
                <div className="text-green-700">Sur 6 mois (janvier-juin 2025)</div>
              </div>
              
              <div className="bg-green-100 rounded-xl p-6 border border-green-300">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Retour Généré</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">{businessMetrics.totalRevenue.toLocaleString()} CHF</div>
                <div className="text-green-700">Chiffre d'affaires estimé</div>
              </div>
            </div>
            
            {/* Bénéfice net */}
            <div className="bg-green-600 rounded-xl p-8 text-center text-white mb-8">
              <h3 className="text-xl font-semibold mb-4">Bénéfice Net</h3>
              <div className="text-5xl font-bold mb-2">+{businessMetrics.netProfit.toLocaleString()} CHF</div>
              <div className="text-green-100">Profit supplémentaire vs investissement initial</div>
            </div>
            
            {/* Métriques clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{businessMetrics.newClients}</div>
                <div className="text-gray-600">Nouveaux clients</div>
                <Tooltip content="Nombre de demandes de devis confirmées">
                  <div className="text-xs text-blue-500 mt-1 cursor-help">Qu'est-ce que c'est ?</div>
                </Tooltip>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{businessMetrics.costPerClient} CHF</div>
                <div className="text-gray-600">Coût par client</div>
                <Tooltip content="Coût d'acquisition d'un nouveau client">
                  <div className="text-xs text-blue-500 mt-1 cursor-help">Qu'est-ce que c'est ?</div>
                </Tooltip>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{businessMetrics.multiplier}x</div>
                <div className="text-gray-600">Plus efficace</div>
                <div className="text-xs text-gray-500 mt-1">vs méthodes classiques</div>
              </div>
            </div>
          </motion.div>
        )}
        
        {activeSection === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">OSOM vs Publicité Classique</h2>
            
            {/* Comparaison visuelle simple */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Méthode OSOM */}
                <div className="text-center">
                  <div className="bg-green-500 text-white rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-4">Méthode OSOM</h3>
                    <div className="text-4xl font-bold mb-2">{businessMetrics.newClients}</div>
                    <div className="text-green-100">Nouveaux clients</div>
                  </div>
                  <div className="text-green-600 font-semibold">Coût : {businessMetrics.costPerClient} CHF/client</div>
                </div>
                
                {/* Méthode classique */}
                <div className="text-center">
                  <div className="bg-red-500 text-white rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-4">Publicité Classique</h3>
                    <div className="text-4xl font-bold mb-2">{businessMetrics.competitorClients}</div>
                    <div className="text-red-100">Nouveaux clients</div>
                  </div>
                  <div className="text-red-600 font-semibold">Coût : {businessMetrics.industryCostPerClient} CHF/client</div>
                </div>
              </div>
              
              {/* Résumé comparaison */}
              <div className="bg-blue-50 rounded-lg p-6 mt-8 text-center">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  Économie par client : {(businessMetrics.industryCostPerClient - businessMetrics.costPerClient).toFixed(0)} CHF
                </h4>
                <p className="text-blue-700">
                  Même budget de 6,000 CHF - 14x plus de résultats - Coût divisé par 14
                </p>
              </div>
            </div>
            
            {/* Graphique simple avant/après */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Performance Visuelle</h3>
              <div className="flex items-end justify-center gap-8 h-40">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="bg-red-500 rounded-t-lg"
                    style={{ width: '80px', height: '30px' }}
                    initial={{ height: 0 }}
                    animate={{ height: '30px' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <div className="mt-2 text-center">
                    <div className="font-bold text-red-600">{businessMetrics.competitorClients}</div>
                    <div className="text-xs text-gray-600">Classique</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <motion.div
                    className="bg-green-500 rounded-t-lg"
                    style={{ width: '80px' }}
                    initial={{ height: 0 }}
                    animate={{ height: '120px' }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <div className="mt-2 text-center">
                    <div className="font-bold text-green-600">{businessMetrics.newClients}</div>
                    <div className="text-xs text-gray-600">OSOM</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {activeSection === 'budget' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Réallocation Budgétaire Août-Décembre 2025</h2>
            
            {/* Proposition budgétaire */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Proposition : Réorienter votre budget Google Ads vers OSOM
              </h3>
              <p className="text-blue-700 text-lg leading-relaxed">
                Au lieu de dépenser 2,000 CHF/mois en publicité Google Ads, 
                investissez cette somme chez OSOM pour construire un site web haute performance 
                avec tracking complet et SEO optimisé.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Budget Mensuel</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{monthlyBudgetReallocation.currentMonthly.toLocaleString()} CHF</div>
                <div className="text-gray-600">Par mois</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Période</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{monthlyBudgetReallocation.period}</div>
                <div className="text-gray-600">Mois (Août-Déc)</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Budget Total</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{monthlyBudgetReallocation.totalBudget.toLocaleString()} CHF</div>
                <div className="text-gray-600">Investissement</div>
              </div>
            </div>
            
            {/* Objectifs */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">
                Objectif : Doubler le chiffre d'affaires grâce à cette stratégie
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4">Ce que vous obtenez :</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>✓ Site web haute performance (chargement &lt; 2s)</li>
                    <li>✓ Tracking complet des conversions</li>
                    <li>✓ SEO optimisé pour le marché local</li>
                    <li>✓ Dashboard temps réel</li>
                    <li>✓ Maintenance et optimisation continue</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4">Résultats attendus :</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>✓ {monthlyBudgetReallocation.projectedNewClients}+ nouveaux clients</li>
                    <li>✓ {monthlyBudgetReallocation.projectedRevenue.toLocaleString()} CHF de CA supplémentaire</li>
                    <li>✓ ROI 390% sur 5 mois</li>
                    <li>✓ Base solide pour croissance 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Glossaire en bas */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Glossaire</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-900">Conversion :</span>
              <span className="text-gray-700"> Nouveau client qui vous contacte</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">ROI :</span>
              <span className="text-gray-700"> Retour sur investissement (gains vs dépenses)</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Coût par client :</span>
              <span className="text-gray-700"> Prix payé pour acquérir un nouveau client</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">SEO :</span>
              <span className="text-gray-700"> Référencement naturel sur Google</span>
            </div>
          </div>
        </div>
      </div>

        {/* CTA final */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <div className="bg-green-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à répliquer ces résultats pour votre entreprise ?
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Audit gratuit - Proposition personnalisée - Garantie résultats
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Planifier un Audit Gratuit
            </button>
          </div>
        </div>
    </div>
  )
}

export default CulturePeintureDashboard