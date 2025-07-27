// OSOM Dashboard - Utilitaires Graphiques Partagés

class OSOMChartUtils {
  
  // Configuration couleurs OSOM
  static colors = {
    primary: '#FFDD00',
    success: '#10B981', 
    warning: '#F59E0B',
    danger: '#EF4444',
    white: '#FFFFFF',
    gray: '#6B7280',
    dark: '#1F2937'
  };

  // Configuration Chart.js par défaut
  static getDefaultChartConfig() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: this.colors.white,
            font: {
              family: 'CeraPRO',
              weight: 'bold'
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: this.colors.gray },
          grid: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        y: {
          ticks: { color: this.colors.gray },
          grid: { color: 'rgba(255, 255, 255, 0.1)' }
        }
      }
    };
  }

  // Créer graphique de comparaison
  static createComparisonChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: data.dataset1.label,
          data: data.dataset1.values,
          backgroundColor: this.colors.primary,
          borderColor: this.colors.primary,
          borderWidth: 2
        }, {
          label: data.dataset2.label,
          data: data.dataset2.values,
          backgroundColor: this.colors.gray,
          borderColor: this.colors.gray,
          borderWidth: 2
        }]
      },
      options: {
        ...this.getDefaultChartConfig(),
        plugins: {
          ...this.getDefaultChartConfig().plugins,
          title: {
            display: true,
            text: data.title,
            color: this.colors.white,
            font: {
              family: 'CeraPRO',
              size: 16,
              weight: 'bold'
            }
          }
        }
      }
    });
  }

  // Créer graphique timeline
  static createTimelineChart(canvasId, timelineData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: timelineData.dates,
        datasets: [{
          label: timelineData.label,
          data: timelineData.values,
          borderColor: this.colors.primary,
          backgroundColor: 'rgba(255, 221, 0, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        ...this.getDefaultChartConfig(),
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          ...this.getDefaultChartConfig().plugins,
          tooltip: {
            backgroundColor: this.colors.dark,
            titleColor: this.colors.white,
            bodyColor: this.colors.white,
            borderColor: this.colors.primary,
            borderWidth: 1
          }
        }
      }
    });
  }

  // Animer compteur
  static animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = targetValue / (duration / 16);
    let currentValue = startValue;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        element.textContent = targetValue.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(currentValue).toLocaleString();
      }
    }, 16);
  }

  // Formatter pourcentage
  static formatPercentage(value, decimals = 1) {
    return `${value.toFixed(decimals)}%`;
  }

  // Formatter nombre avec séparateurs
  static formatNumber(value) {
    return value.toLocaleString('fr-CH');
  }

  // Calculer amélioration
  static calculateImprovement(newValue, oldValue) {
    if (oldValue === 0) return newValue > 0 ? '∞' : '0%';
    const improvement = ((newValue - oldValue) / oldValue) * 100;
    return this.formatPercentage(improvement);
  }

  // Créer badge de statut
  static createStatusBadge(status, container) {
    const badge = document.createElement('span');
    badge.className = `status-badge status-${status}`;
    
    const statusConfig = {
      success: { text: 'Résolu', color: this.colors.success },
      warning: { text: 'En cours', color: this.colors.warning },
      danger: { text: 'Critique', color: this.colors.danger }
    };
    
    badge.textContent = statusConfig[status].text;
    badge.style.backgroundColor = statusConfig[status].color;
    badge.style.color = this.colors.white;
    badge.style.padding = '0.25rem 0.75rem';
    badge.style.borderRadius = '1rem';
    badge.style.fontSize = '0.75rem';
    badge.style.fontWeight = 'bold';
    
    container.appendChild(badge);
  }
}

// Export pour utilisation
window.OSOMChartUtils = OSOMChartUtils;